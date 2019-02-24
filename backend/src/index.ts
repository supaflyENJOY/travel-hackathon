import * as dotenv from 'dotenv';
dotenv.config();

import * as fastify from 'fastify'
import * as fastifyJwt from 'fastify-jwt'

import config from './utils/config'

import sequelize from './providers/sequelize'
import User from './providers/entities/User'
import FavoritePlace from './providers/entities/FavoritePlace'

import placeRouter from './routers/placeRouter'

(async () => {


    //await FavoritePlace.sync()
    await sequelize.sync({
        force: true
    })

    const app = fastify({
        // logger: true
    })

   // app.register(fastifyJwt, { secret: config.JWT_SECRET })

    placeRouter(app);


    try {
        await app.listen(3000)
        app.log.info('server started')
    } catch (err) {
        app.log.error(err)
        process.exit(1)
    }

})()