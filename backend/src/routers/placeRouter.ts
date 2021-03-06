import * as fastify from 'fastify'

import Place from '../providers/entities/Place'
import Category from '../providers/entities/Category'
import Region from '../providers/entities/Region'
import FavoritePlace from '../providers/entities/FavoritePlace'
import Like from '../providers/entities/Like'
import {
    writeFileAsync
} from 'fs-extra-promise';
import compressImage from '../utils/compressImage';
import storage from '../utils/storage';
import uniqid from 'uniqid';
import {
    tmpdir
} from 'os';
import * as imageSize from 'image-size'

export default (app) => {
    function mapArray(line: string) {
        if (!line)
            return undefined;

        return line.split(',').map(it => it.trim())
    }

    const include = [{
        all: true,
        attributes: {
            exclude: ["password"]
        },
    }]

    async function markLiked(places: Array < any > , userId) {
        if (!userId) return places;

        const images = [].concat.apply([], places.map(place => place.images))
        const imageIds = images.map(image => image.id)

        const likes = await Like.findAll({
            where: {
                imageId: {
                    $in: imageIds
                },
                userId
            }
        }).map(img => img.id)

        images.filter(img => likes.includes(img.id)).foreach(img => img.liked = true);
        return places;
    }

    app.get('/api/places/list', async (request, reply) => {
        let pageSize: number = request.query.pageSize || 0
        if (pageSize <= 0 || pageSize > 100)
            pageSize = 10

        let pageIndex = request.query.pageIndex || 0

        const categories = mapArray(request.query.categories)
        const regions = mapArray(request.query.regions)

        const categoriesFilter = categories ? {
            '$Categories.id$': {
                $in: categories
            }
        } : undefined;

        const regionsFilter = regions ? {
            '$Regions.id$': {
                $in: regions
            }
        } : undefined;

        const places = Place.findAll({
            include,
            limit: +pageSize,
            offset: pageSize * pageIndex,
            where: {
                ...categoriesFilter,
                ...regionsFilter
            },
            subQuery: false
        })

        return markLiked(places, request.user.id);
    })

    function getPlace(id: number, userId) {
        const place = Place.findOne({
            include,
            where: {
                id
            }
        })

        markLiked([place], userId);
        return place;
    }

    app.get('/api/places/:id',
        async (request, reply) => {
            try {
                await request.jwtVerify();
            } catch (e) {

            }
            const user = request.user && request.user.id ? request.user.id : undefined;
            return getPlace(request.params.id, user)
        })

    app.get('/api/places/info', async (request, reply) => {
        const [categories, regions] = await Promise.all([
            Category.findAll({
                include
            }),
            Region.findAll({
                include
            })
        ])

        return {
            categories,
            regions
        }
    })


    app.get('/api/places/favorite',
        async (request, reply) => {
            await request.jwtVerify();

            const userId = request.user.id
            const favoritePlaces = FavoritePlace.findAll({
                where: {
                    userId
                }
            })

            const places = Place.findAll({
                include,
                where: {
                    id: {
                        $in: favoritePlaces.map(fp => fp.id)
                    }
                }
            })
            return markLiked(places, userId)
        })

    async function isInFavorite(userId: number, placeId: number) {
        return !!(await FavoritePlace.findOne({
            include: [{
                model: Place,
                attributes: ['id']
            }],
            where: {
                userId,
                '$Place.id$': placeId
            },
            subQuery: false
        }))
    }

    app.get('/api/places/addToFavorite/:placeId',
        async (request, reply) => {
            await request.jwtVerify();

            const userId = request.user.id
            const placeId = request.params.placeId
            if (await isInFavorite(userId, placeId))
                return 0
            const place = await getPlace(placeId, userId)
            if (!place)
                return 404

            const fPlace = await FavoritePlace.create({
                userId
            })
            await fPlace.setPlace(place);

            return 1
        })

    async function isImageLiked(userId: number, imageId: number) {
        return !!(await Like.findOne({
            where: {
                userId,
                imageId
            },
        }))
    }

    app.post('/api/places/likeImage/:imageId',
        async (request, reply) => {
            await request.jwtVerify();
            const userId = request.user.id
            const imageId = request.params.imageId
            if (await isImageLiked(userId, imageId))
                return 0

            await Like.create({
                userId,
                imageId
            })

            return 1
        })

    app.post('/api/places/create', async (request, reply) => {
        await request.jwtVerify();

        const {
            title,
            description
        } = request.body
        const image = request.raw.image
        const path = `${tmpdir()}/${image.name}`;
        await writeFileAsync(path, image.data);
        const compressedPath = await compressImage(path);
        const imagePath = storage.uploadFile(compressedPath, `${uniqid()}.jpg`);
        const {
            width,
            heigth
        } = imageSize(imagePath);

        const place = await Place.create({
            title,
            description
        })

        const imageData = await place.addImage({
            imagePath,
            width,
            heigth
        })

        return imageData
    })
}