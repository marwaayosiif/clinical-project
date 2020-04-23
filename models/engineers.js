const Sequelize=require('sequelize');
const sequelize=require('../util/db.js');


const Enigneers= sequelize.define('Enigneers',{
    FName:{
        type: Sequelize.TEXT,
    },
    LName:{
        type: Sequelize.TEXT,
    },
    Job: {
    type:Sequelize.TEXT,
    allowNull:true
    },
    Email:{
        type: Sequelize.STRING,
        primaryKey:true
    },
    Password:{
        type:Sequelize.STRING,
        allowNull:false
    },

   
})


module.exports=Enigneers;