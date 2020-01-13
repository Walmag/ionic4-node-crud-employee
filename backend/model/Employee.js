const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Employee = new Schema({
    employee_name: {
        type: String
    },
    birthday: {
        type: Date
    }
}, {
    collection: 'employees'
})

module.exports = mongoose.model('Employee', Employee)