import * as Sequelize from 'sequelize'
import sequelize from '../sequelize'

const Like = sequelize.define('Like', {
    imageId: Sequelize.INTEGER,
    userId: Sequelize.INTEGER
})

export default Like