import * as Sequelize from 'sequelize'
import sequelize from '../sequelize'
import User from './User'

export default sequelize.define('Image', {
    placeId: Sequelize.INTEGER,
    authorId: Sequelize.INTEGER,
    imagePath: Sequelize.STRING
})
Image.belongsTo(Place)
Image.belongsTo(User)