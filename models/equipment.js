const Sequelize=require('sequelize');
const sequelize=require('../util/db.js');


const Equipment= sequelize.define('Equipment',{
    Name:{
        type: Sequelize.TEXT,
    },
    Model: {
    type:Sequelize.DATE,
    allowNull:true
    },
    SerialNO:{
        type: Sequelize.INTEGER,
        primaryKey:true
    },
    DueDate:{
        type:Sequelize.DATE,
        allowNull:false
    },
    Department:{
        type: Sequelize.TEXT,
        allowNull:false
    }
   
})


module.exports=Equipment;