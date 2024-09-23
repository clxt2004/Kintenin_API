const {Sequelize, DataTypes} = require('sequelize')
const bcrypt = require('bcrypt')
const imageModel = require('../models/Image')
const userModel = require('../models/User')
const menueModel = require('../models/Menu')
// Configuration de la connexion de sequelize a notre base de donnée
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
const sequelize = new Sequelize(
     'kintenin_db',
     'root',
     '',
     {
          host:'localhost',
          dialect:'mariadb',
          dialectOptions:{
               timezone:'Etc/GMT-2'
          },
          logging:false
     }
)
// Initialisation des modèles
const Image = imageModel(sequelize, DataTypes)
const User = userModel(sequelize, DataTypes)
const Menu = menueModel(sequelize, DataTypes)

// Initialisation de l'objet des modeles
const models = {
     Image,
     User,
     Menu
}
Image.association(models)
User.association(models)
Menu.association(models)


// Verification de la connexion
sequelize.authenticate().then(_=>console.log("Conexion effectuer avec success"))

// Syncronisation avec la db
sequelize.sync({force:true})
          .then(_=>console.log("Syncronisation terminer"))

module.exports = {
     User,
     Image,
     Menu
}