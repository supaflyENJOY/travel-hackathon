import * as dotenv from 'dotenv';
dotenv.config();

import sequelize from './providers/sequelize'
import User from './providers/entities/User'


(async () => {
    await sequelize.sync({
        force: true
    })
})()

// app.get('/', async (request, reply) => {
//     return {
//         hello: 'world'
//     }   
// })

// const start = async () => {
//     try {
//         await app.listen(3000)
//         app.log.info(`server listening on ${app.server.address().port}`)
//     } catch (err) {
//         app.log.error(err)
//         process.exit(1)
//     }
// }
// start()