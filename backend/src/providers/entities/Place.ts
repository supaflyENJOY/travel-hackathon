import * as Sequelize from 'sequelize'
import sequelize from '../sequelize'
import User from './User'
import Image from './Image'

const Place = sequelize.define('Place', {
    title: Sequelize.STRING,
    description: Sequelize.STRING
})
Place.belongsTo(User)
Place.hasMany(Image, { as: 'images' })

export default Place