const express = require('express');
const app = express();
const employeeRoute = express.Router();

let EmployeeModel = require('../model/Employee');

// Add Employee
employeeRoute.route('/create-employee').post((req, res, next) => {
    EmployeeModel.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// Get all employees
employeeRoute.route('/').get((req, res) => {
    EmployeeModel.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get single employee
employeeRoute.route('/get-employee/:id').get((req, res) => {
    EmployeeModel.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update employee
employeeRoute.route('/update-employee/:id').put((req, res, next) => {
    EmployeeModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('Employee successfully updated!')
        }
    })
})

// Delete employee
employeeRoute.route('/delete-employee/:id').delete((req, res, next) => {
    EmployeeModel.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = employeeRoute;