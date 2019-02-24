import * as Sequelize from 'sequelize'
import sequelize from '../sequelize'
import Place from './Place'

const FavoritePlace = sequelize.define('FavoritePlace', {
    userId: Sequelize.INTEGER,
})

FavoritePlace.belongsTo(Place);


export default FavoritePlace