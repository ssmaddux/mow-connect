const { Appointment }  = require('../models');

const getAllAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find()
        res.json(appointments)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getOneAppointment(req, res) {
    try {
        const id = req.params.id
        const appointment = await Appointment.findById(id)
        if (appointment) {
            return res.json(appointment)
        }
        return res.status(404).send('Appointment with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createAppointment(req,res) {
    try {
        const appointment = await new Appointment (req.body)
        await appointment.save()
        return res.status(201).json({
            appointment
        })
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


async function updateAppointment(req,res) {
    try {
        const id = req.params.id
        const appointment = await Appointment.findByIdAndUpdate(id, req.body, {new: true})
        if (appointment) {
            return res.status(200).json(appointment)
        }
        throw new Error('Appointment not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

async function deleteAppointment(req,res) {
    try {
        const id = req.params.id
        const appointment =  await Appointment.findByIdAndDelete(id)
        if (appointment) {
            return res.status(200).json(appointment)
        }
        throw new Error('Appointment not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


module.exports = {
    getAllAppointments,
    getOneAppointment,
    createAppointment,
    updateAppointment,
    deleteAppointment
}