import * as Sequelize from 'sequelize'
import sequelize from '../sequelize'
import Place from './Place'

const Region = sequelize.define('Region', {
    title: Sequelize.STRING,
    latitude: Sequelize.DECIMAL,
    longtitude: Sequelize.DECIMAL
})
Region.belongsToMany(Place, {
    through: 'PlaceRegion'
});
Place.belongsToMany(Region, {
    through: 'PlaceRegion'
});

export default Region