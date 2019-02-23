import * as fastify from 'fastify'

import Place from '../providers/entities/Place'

export default (app: fastify.FastifyInstance) => {
    app.get('/api/places/:id', (request, reply) => {
        return Place.find({
            where: {
                id: request.params.id
            }
        })
    })

    function mapArray(line: string) {
        if (!line)
            return undefined;

        return line.split(',').map(it => it.trim)
    }

    app.get('/api/places', (request, reply) => {
        let pageSize: number = request.query.pageSize || 0
        if (pageSize < 0 || pageSize > 100)
            pageSize = 10

        let pageIndex = request.query.pageIndex || 0

        const categories = mapArray(request.query.categories)
        const regions = mapArray(request.query.regions)

        return Place.findAll({
            limit: pageSize,
            offset: pageSize * pageIndex,
            
        })


    })
}