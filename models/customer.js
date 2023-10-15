const { Schema } = require('mongoose')


const customerSchema = new Schema(
    {
        name: {type: String},
        address: {type: String},
        phone: {type: Number},
        email: {type: String},
        password: {type: String}
    },
    {timestamps: true,}
)

module.exports = customerSchema