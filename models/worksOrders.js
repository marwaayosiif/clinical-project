const Sequelize=require('sequelize');
const sequelize=require('../util/db.js');


const WorksOrders= sequelize.define('WorksOrders',{
    nameEq:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    disc: {
        type:Sequelize.TEXT,
        allowNull:false
    },
    model:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    assestType:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    status:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    serialNO:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true
    },
    manufacturer:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    manufacturerInfo:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    preferedSuppliers:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    
})


module.exports=WorksOrders;