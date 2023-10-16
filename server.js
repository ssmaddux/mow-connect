const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const bodyParser = require('body-parser')

//include controller name and path here
const companyController = require('./controllers/companies')
const customerController = require('./controllers/customers')
const appointmentController = require('./controllers/appointments')


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.get('/companies', companyController.getAllCompanies)
app.get('/customers', customerController.getAllCustomers)
app.get('/appointments', appointmentController.getAllAppointments)

app.get('/companies/:id', companyController.getOneCompany)
app.get('/customers/:id', customerController.getOneCustomer)
app.get('/appointments/:id', appointmentController.getOneAppointment)


app.post('/signupcompany', companyController.createCompany)
app.post('/signup', customerController.createCustomer)
//ned appropriate path here
app.post('/appointments', appointmentController.createAppointment)

app.put('/companies/:id', companyController.updateCompany)
app.put('/customers/:id', customerController.updateCustomer)
app.put('/appointments/:id', appointmentController.updateAppointment)

app.delete('/companies/:id', companyController.deleteCompany)
app.delete('/customers/:id', customerController.deleteCustomer)
app.delete('/appointments/:id', appointmentController.deleteAppointment)


app.get('/', (req, res) => {
    res.send('This is root!!')
  })

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
  })  