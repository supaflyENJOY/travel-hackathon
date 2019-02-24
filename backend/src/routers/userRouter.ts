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
    app.post('/api/signIn', async (request, reply) => {
        const { userName, password } = request.body;
        const user = await User.findOne({
            where: {
                userName,
                password
            }
        });
        if(user) {
            const token = app.jwt.sign({ id: user.id });
            return { success: true, token };
        }
        return { success: false, error: 'User not found' };
    })
    app.post('/api/signUp', async (request, reply) => {
        const { userName, email, password } = request.body;
        if(!userName || !email || !password) return { success: false, error: 'Invalid data!' };
        const user = await User.findOne({
            where: {
                $or: {
                    email,
                    $and: {
                        userName,
                        password
                    }
                }
            }
        });
        if(user) {
            return { success: false, error: 'User already registered!' };
        }
        const newUser = await User.create({
            userName,
            email,
            password
        })
        if(newUser) {
            const token = app.jwt.sign({ id: newUser.id });
            return { success: true, token };
        }
        return { success: false, error: 'Couldnt create user!' };
    })
}