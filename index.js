require('dotenv').config()

const bodyParser = require('body-parser')
let express = require('express')
let mongoose = require('mongoose')
const Model = require('./models/schema.js')


let mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString)
const database = mongoose.connection
database.once('connected', ()=> {
    console.log("database connected")
})


let app = express()
app.use(bodyParser.json())


app.get('/', function(req, res){
    res.send("Boogers")
    })


    app.get('/walkprep', async (req, res) => {
try {
    const data = await Model.find()
    res.send(data)
} catch(error){
console.log(error)
}
})

    app.get('/mapcourse', async (req, res) => {
try {
    const data = await Model.find()
    res.send(data)
} catch(error){
console.log(error)
}
})

app.get('/gallery', async (req, res) => {
    try {
        const data = await Model.find()
        res.send(data)
    } catch(error){
    console.log(error)
    }
    })


app.post('/gallery', async (req, res) => {
let firstName = req.body.firstName
let lastName = req.body.lastName
let email = req.body.email
let info = req.body.info

const data = new Model({
    firstName: firstName,
    lastName: lastName,
    email: email,
    info: info

})

try {
    const saveData = await data.save()
    res.send(saveData)
} catch(error) {
console.log(error)
}
})
    app.listen(3000)
