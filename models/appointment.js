const { Schema } = require('mongoose')


const appointmentSchema = new Schema(
    {
        date: {type: Date},
        time: {type: String},
        company: { type: Schema.Types.ObjectId, ref: 'Company' },
        customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
        address: { type: Schema.Types.ObjectId, ref: 'Customer' }
    },
    {timestamps: true,}
)

module.exports = appointmentSchema