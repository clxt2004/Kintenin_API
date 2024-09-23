module.exports = (sequelize, DataTypes)=>{
     const Image = sequelize.define('image',{
          id:{
               type:DataTypes.INTEGER,
               primaryKey:true,
               autoIncrement:true
          },
          src:{
               type:DataTypes.STRING,
               allowNull:false
          }
     })
     Image.association = (models)=>{
          Image.hasMany(models.Menu, {foreignKey:"image_id"})
     }
     return Image
}