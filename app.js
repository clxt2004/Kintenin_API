const express = require("express")
const app = express()
const BodyParser = require('body-parser')
const morgan = require('morgan')
const sequelize = require('./src/DB/sequelize')
const userRoute = require("./src/Routes/userRoutes")



app
     .use(BodyParser.json())
     .use(morgan('dev'))
     .use(userRoute)




app.listen(3000, ()=>{
     console.log("Serveur lancer avec success");
})