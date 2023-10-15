const mongoose = require('mongoose')
const companySchema = require('./company')
const customerSchema = require('./customer')
const appointmentSchema = require('./appointment')

const Company = mongoose.model('Company', companySchema)
const Customer = mongoose.model('Customer', customerSchema)
const Appointment = mongoose.model('Appointment', appointmentSchema)

module.exports = {
    Company,
    Customer,
    Appointment
}