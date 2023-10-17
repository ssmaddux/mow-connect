const { Customer }  = require('../models');

const getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.find()
        res.json(customers)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getOneCustomer(req, res) {
    try {
        const id = req.params.id
        const customer = await Customer.findById(id)
        if (customer) {
            return res.json(customer)
        }
        return res.status(404).send('Customer with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createCustomer(req,res) {
    try {
        const customer = await new Customer (req.body)
        await customer.save()
        return res.status(201).json({
            customer
        })
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


async function updateCustomer(req,res) {
    try {
        const id = req.params.id
        const customer = await Customer.findByIdAndUpdate(id, req.body, {new: true})
        if (customer) {
            return res.status(200).json(customer)
        }
        throw new Error('Customer not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

async function deleteCustomer(req,res) {
    try {
        const id = req.params.id
        const customer =  await Customer.findByIdAndDelete(id)
        if (customer) {
            return res.status(200).json(customer)
        }
        throw new Error('Customer not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


async function validateUserSignin(req, res) {
    const { email, password } = req.body;

    try {
        const customer = await Customer.findOne({ email });

        if (!customer) {
            return res.json({ authenticated: false, message: 'User not found' });
        }

        if (customer.password === password) {
            return res.json({ authenticated: true, message: 'User authenticated' });
        } else {
            return res.json({ authenticated: false, message: 'Incorrect password' });
        }
    } catch (error) {
        return res.status(500).json({ authenticated: false, message: 'Server error' });
    }
}




module.exports = {
    getAllCustomers,
    getOneCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer,
    validateUserSignin
}