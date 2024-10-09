const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

firstName: {
    required: true,
    type: String
},

lastName: {
    required: true,
    type: String
},
email: {
    required: true,
    type: String
},
info: {
    required: false,
    type: String
}
})

module.exports = mongoose.model('Data:', userSchema)