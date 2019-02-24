import * as Sequelize from 'sequelize'
import sequelize from '../sequelize'
import Place from './Place'

const Category = sequelize.define('Category', {
    title: Sequelize.STRING,
})
Category.belongsToMany(Place, {
    through: 'PlaceCategory'
});
Place.belongsToMany(Category, {
    through: 'PlaceCategory'
});

export default Category