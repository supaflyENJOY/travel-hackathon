import * as fastify from 'fastify'

import User from '../providers/entities/User'


export default (app : fastify.FastifyInstance) => {
    app.get('/api/users/:id', (request, reply) => {
        return User.findOne({
            exclude: ["password"],
            where: {
                id: request.params.id
            }
        })
    })
}