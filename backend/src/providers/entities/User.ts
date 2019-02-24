import * as Sequelize from 'sequelize'
import sequelize from '../sequelize'

export default sequelize.define('User', {
    userName: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    profileImagePath: Sequelize.STRING
})