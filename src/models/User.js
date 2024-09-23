module.exports = (sequelize, DataTypes)=>{
     const User = sequelize.define('User', {
          id:{
               type:DataTypes.INTEGER,
               primaryKey:true,
               autoIncrement:true,
          },
          username:{
               type:DataTypes.STRING,
               allowNull:false,
               unique:true
          },
          email:{
               type:DataTypes.STRING,
               allowNull:false,
               unique:true
               ,
               validate: {
                    isEmail:{
                         msg:"Veuillez saisir une email correcte"
                    }
               }
          },
          password:{
               type:DataTypes.STRING,
               allowNull:false
          }
     })
     User.association = (models)=>{
          User.hasMany(models.Menu, {foreignKey:"user_id"})
     }
     return User
}