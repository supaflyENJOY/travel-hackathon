import * as Sequelize from 'sequelize'
import sequelize from '../sequelize'
import User from './User'

export default sequelize.define('Place', {
    authorId: Sequelize.INTEGER,
    title: Sequelize.STRING,
    description: Sequelize.STRING
})
Place.belongsTo(User)
