// require('dotenv').config()

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

app.get('/contactus', async (req, res) => {
    try {
        const data = await Model.find()
        res.send(data)
    } catch(error){
    console.log(error)
    }
    })


app.post('/contactus', async (req, res) => {
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

// app.get('/books/:id', async(req, res) => {
//     const id = req.params.id

// try {
//     const data = await Model.findById(id)
//     res.send(data)
// } catch {
//     console.log(error)
// }
// })
// app.delete('/books/:id', async(req,res) => {
//     const id = req.params.id
//     try {
// const data = await Model.findByIdAndDelete(id)
// res.send(data)
//     } catch (error) {
// console.log(error)
//     }
// })

// app.put ('/books/:id', async(req, res) => {
//     const id = req.params.id
//     const updatedData = req.body
//     try {
// const data = await Model.findByIdAndUpdate(id, updatedData)
// res.send(data)
//     } catch (error) {
//         console.log(error)
//     }
// })
    app.listen(3000)
