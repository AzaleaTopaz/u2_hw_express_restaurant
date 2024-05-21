const express = require('express')
const cors = (require('cors'))
const DessertController = require('./Controllers/DessertController')
const EntreesController = require('./Controllers/EntreesController')
const AppsController = require('./Controllers/AppsController')
const PORT = process.env.PORT || 3001
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.listen(PORT, ()=> {
    console.log(`listening at port ${PORT}`)
})
app.get('/', (req,res)=> {
    res.send('We are live!')
})

// Desserts are here
app.get('/desserts', DessertController.getDesserts)
app.get('/desserts/:id', DessertController.getDessertOrigin)

// entrees 
app.get('/entrees', EntreesController.getEntrees)
app.get('/entrees/:id', EntreesController.getEntreeVegan)

// apps
app.get('/apps', AppsController.getApps)
app.get('/apps/:id', AppsController.getAppsOrigin)
