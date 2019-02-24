import * as dotenv from 'dotenv';
dotenv.config();

import * as fastify from 'fastify'
import * as fastifyJwt from 'fastify-jwt'

import config from './utils/config'

import sequelize from './providers/sequelize'
import User from './providers/entities/User'
import FavoritePlace from './providers/entities/FavoritePlace'

import placeRouter from './routers/placeRouter'
import { join } from 'path';
import * as fastifyStatic from 'fastify-static';
import userRouter from './routers/userRouter';
import * as cors from 'cors';

(async () => {

    await sequelize.sync({
        force: false
    })

    const app = fastify({
         logger: true
    })

    app.register(fastifyStatic, {
        root: join(__dirname, 'public'),
    })
    app.register(require('fastify-formbody'))
    app.register(fastifyJwt, { secret: config.JWT_SECRET })

    placeRouter(app);
    userRouter(app);


    try {
        const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
        await app.listen(port, "0.0.0.0")
        app.log.info('server started')
    } catch (err) {
        app.log.error(err)
        process.exit(1)
    }

})()