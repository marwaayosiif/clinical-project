const Sequelize=require('sequelize');
const sequelize=require('../util/db.js');


const Technician= sequelize.define('Technician',{
    FirstName:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    LastName:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    ID: {
    type:Sequelize.INTEGER,
    allowNull:true
    },
    SerialNO:{
        type: Sequelize.INTEGER,
        primaryKey:true
    },
    CompanyName:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    PhoneNumber:{
        type: Sequelize.INTEGER,
        allowNull:false
    }
   
})


module.exports=Technician;