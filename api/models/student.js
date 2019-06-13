const Sequelize = require('sequelize')
const db = require('../../config/database')

const Student = db.define('student', {
    firstName: {
        type: Sequelize.STRING,
       
    },
    lastName: {
        type: Sequelize.STRING
    },

})

module.exports = Student