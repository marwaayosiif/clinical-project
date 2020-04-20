const Sequelize=require('sequelize');
const sequelize=require('../util/db.js');


const PreventiveMaintainance= sequelize.define('PreventiveMaintainance',{
    manufacture:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    SchDate: {
        type:Sequelize.DATE,
        allowNull:false
    },
    version:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    serialNO:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    freq:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    processes:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    daysOfMaintainance:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
    
})


module.exports=PreventiveMaintainance;