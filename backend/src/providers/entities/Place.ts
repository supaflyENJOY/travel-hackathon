import * as Sequelize from 'sequelize'
import sequelize from '../sequelize'
import User from './User'

const Place = sequelize.define('Place', {
    authorId: Sequelize.INTEGER,
    title: Sequelize.STRING,
    description: Sequelize.STRING
})
Place.belongsTo(User)

export default Place