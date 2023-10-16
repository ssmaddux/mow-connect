const { Company }  = require('../models');

const getAllCompanys = async (req, res) => {
    try {
        const companys = await Company.find()
        res.json(companys)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getOneCompany(req, res) {
    try {
        const id = req.params.id
        const company = await Company.findById(id)
        if (company) {
            return res.json(company)
        }
        return res.status(404).send('Company with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createCompany(req,res) {
    try {
        const company = await new Company (req.body)
        await company.save()
        return res.status(201).json({
            company
        })
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


async function updateCompany(req,res) {
    try {
        const id = req.params.id
        const company = await Company.findByIdAndUpdate(id, req.body, {new: true})
        if (company) {
            return res.status(200).json(company)
        }
        throw new Error('Company not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

async function deleteCompany(req,res) {
    try {
        const id = req.params.id
        const company =  await Company.findByIdAndDelete(id)
        if (company) {
            return res.status(200).json(company)
        }
        throw new Error('Company not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


module.exports = {
    getAllCompanys,
    getOneCompany,
    createCompany,
    updateCompany,
    deleteCompany
}