const {Sequelize, DataTypes} = require('sequelize')

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

// Verification de la connexion

sequelize.authenticate().then(_=>console.log("Conexion effectuer avec success"))