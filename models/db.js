//database connection statements
const Sequelize = require('sequelize')
const sequelize = new Sequelize('postapp', 'root', '6055302', {
    host: 'localhost',
    dialect: 'mysql'
})


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}