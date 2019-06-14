const Sequelize = require('sequelize')
const db = require('../../config/database')

const Campus = db.define('campu', {
    campusName: {
        type: Sequelize.STRING,
       
    },
    studentCount: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.STRING
    },
    imageURL: {
        type: Sequelize.INTEGER
    }

})

module.exports = Campus