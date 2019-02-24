import * as Sequelize from 'sequelize'
import sequelize from '../sequelize'
import User from './User'
import Place from './Place'

const Image = sequelize.define('Image', {
    imagePath: Sequelize.STRING,
    width: Sequelize.INTEGER,
    heigth: Sequelize.INTEGER
})
//Image.belongsTo(Place)
Image.belongsTo(User)

export default Image