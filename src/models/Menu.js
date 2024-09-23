module.exports = (sequelize, DataTypes)=>{
     const Menu = sequelize.define('menu', {
          id:{
               type:DataTypes.INTEGER,
               primaryKey:true,
               autoIncrement:true
          },
          title:{
               type:DataTypes.STRING,
               allowNull:false,
               validate:{
                    min:{
                         args: [5],
                         msg:"Veuillez saisir un titre d'au moins 5 caractère"
                    }
               }
          },
          description:{
               type:DataTypes.STRING,
               allowNull:false,
               validate:{
                    min:{
                         args: [15],
                         msg:"Veuillez saisir une description d'au moins 15 caractère"
                    }
               }
          },
          price:{
               type:DataTypes.FLOAT,
               allowNull:false,
          }
     })
     Menu.association = (models)=>{
          Menu.belongsTo(models.User, {foreignKey:"user_id"})
          Menu.belongsTo(models.Image, {foreignKey:"image_id"})
     }
     return Menu
}