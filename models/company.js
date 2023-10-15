const { Schema } = require('mongoose')


const companySchema = new Schema(
    {
        name: {type: String},
        address: {type: String},
        phone: {type: Number},
        email: {type: String},
        password: {type: String}
    },
    {timestamps: true,}
)

module.exports = companySchema