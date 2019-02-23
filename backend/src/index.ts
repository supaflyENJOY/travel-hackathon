import * as dotenv from 'dotenv';
dotenv.config();

import * as fastify from 'fastify'

import sequelize from './providers/sequelize'
import User from './providers/entities/User'

import placeRouter from './routers/placeRouter'

(async () => {
    

    await sequelize.sync({
        force: true
    })

    const app = fastify({
        logger: true
    })

    placeRouter(app);


    try {
        await app.listen(3000)
        app.log.info('server started')
    } catch (err) {
        app.log.error(err)
        process.exit(1)
    }

})()
