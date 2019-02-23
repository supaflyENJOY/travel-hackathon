import * as Sequelize from 'sequelize'
import sequelize from '../sequelize'
import Place from './Place'

export default sequelize.define('Tag', {
    titile: Sequelize.STRING,
})
Tag.belongsToMany(Place, {through: 'PlaceTag'});
Place.belongsToMany(Tag, {through: 'PlaceTag'});