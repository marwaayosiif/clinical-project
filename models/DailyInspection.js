const Sequelize=require('sequelize');
const sequelize=require('../util/db.js');


const DailyInspection = sequelize.define('DailyInspection',{
    SerailNo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    Location: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Authorized_Operator: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ForeignSubstances1: {
        type:Sequelize.TEXT,
        allowNull:true
    },
    ForeignSubstances2: {
        type:Sequelize.TEXT,
        allowNull:true
    },
    ForeignSubstances3: {
        type:Sequelize.TEXT,
        allowNull:true
    },
    ForeignSubstances4: {
        type:Sequelize.TEXT,
        allowNull:true
    },
    ForeignSubstances5: {
        type:Sequelize.TEXT,
        allowNull:true
    },
    ForeignSubstances6: {
        type:Sequelize.TEXT,
        allowNull:true
    },
    ForeignSubstances7: {
        type:Sequelize.TEXT,
        allowNull:true
    },
    DamageOrCracks1:{
        type: Sequelize.STRING,

    },
    DamageOrCracks2:{
        type: Sequelize.STRING,

    },
    DamageOrCracks3:{
        type: Sequelize.STRING,

    },
    DamageOrCracks4:{
        type: Sequelize.STRING,
    },
    DamageOrCracks5:{
        type: Sequelize.STRING,
    },
    DamageOrCracks6:{
        type: Sequelize.STRING,
    },
    DamageOrCracks7:{
        type: Sequelize.STRING,
    },
    BrokenOrLooseBattery1:{
        type:Sequelize.DATE,
        allowNull:true
    },
    BrokenOrLooseBattery2:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    BrokenOrLooseBattery3:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    BrokenOrLooseBattery4:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    BrokenOrLooseBattery5:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    BrokenOrLooseBattery6:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    BrokenOrLooseBattery7:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    DamagedORLeakingBattery1:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    DamagedORLeakingBattery2:{
        type: Sequelize.TEXT,
        allowNull: true
    },
    DamagedORLeakingBattery3:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    DamagedORLeakingBattery4:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    DamagedORLeakingBattery5:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    DamagedORLeakingBattery6:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    DamagedORLeakingBattery7:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    SpareBatteryAvailable1:{
        type:Sequelize.STRING,
        allowNull:true
    },
    SpareBatteryAvailable2:{
        type:Sequelize.STRING,
        allowNull:true
    },
    SpareBatteryAvailable3:{
        type:Sequelize.STRING,
        allowNull:true
    },
    SpareBatteryAvailable4:{
        type:Sequelize.STRING,
        allowNull:true
    },
    SpareBatteryAvailable5:{
        type:Sequelize.STRING,
        allowNull:true
    },
    SpareBatteryAvailable6:{
        type:Sequelize.STRING,
        allowNull:true
    },
    SpareBatteryAvailable7:{
        type:Sequelize.STRING,
        allowNull:true
    },
    CableDamage1:{
        type:Sequelize.STRING,
        allowNull:true
    },
    CableDamage2:{
        type:Sequelize.STRING,
        allowNull:true
    },
    CableDamage3:{
        type:Sequelize.STRING,
        allowNull:true
    },
    CableDamage4:{
        type:Sequelize.STRING,
        allowNull:true
    },
    CableDamage5:{
        type:Sequelize.STRING,
        allowNull:true
    },
    CableDamage6:{
        type:Sequelize.STRING,
        allowNull:true
    },
    CableDamage7:{
        type:Sequelize.STRING,
        allowNull:true
    },
    selfTestMessage1:{
        type:Sequelize.STRING,
        allowNull:true
    },
    selfTestMessage2:{
        type:Sequelize.STRING,
        allowNull:true
    },
    selfTestMessage3:{
        type:Sequelize.STRING,
        allowNull:true
    },
    selfTestMessage4:{
        type:Sequelize.STRING,
        allowNull:true
    },
    selfTestMessage5:{
        type:Sequelize.STRING,
        allowNull:true
    },
    selfTestMessage6:{
        type:Sequelize.STRING,
        allowNull:true
    },
    selfTestMessage7:{
        type:Sequelize.STRING,
        allowNull:true
    },
    SpeakerBeep1:{
        type:Sequelize.STRING,
        allowNull:true
    },
    SpeakerBeep2:{
        type:Sequelize.STRING,
        allowNull:true
    },
    SpeakerBeep3:{
        type:Sequelize.STRING,
        allowNull:true
    },
    SpeakerBeep4:{
        type:Sequelize.STRING,
        allowNull:true
    },
    SpeakerBeep5:{
        type:Sequelize.STRING,
        allowNull:true
    },
    SpeakerBeep6:{
        type:Sequelize.STRING,
        allowNull:true
    },
    SpeakerBeep7:{
        type:Sequelize.STRING,
        allowNull:true
    },
    TwoFullyChargedBatteries1:{
        type:Sequelize.STRING,
        allowNull:true
    },
    TwoFullyChargedBatteries2:{
        type:Sequelize.STRING,
        allowNull:true
    },
    TwoFullyChargedBatteries3:{
        type:Sequelize.STRING,
        allowNull:true
    },
    TwoFullyChargedBatteries4:{
        type:Sequelize.STRING,
        allowNull:true
    },
    TwoFullyChargedBatteries5:{
        type:Sequelize.STRING,
        allowNull:true
    },
    TwoFullyChargedBatteries6:{
        type:Sequelize.STRING,
        allowNull:true
    },
    TwoFullyChargedBatteries7:{
        type:Sequelize.STRING,
        allowNull:true
    },
    serviceIndicator1:{
        type:Sequelize.STRING,
        allowNull:true
    },
    serviceIndicator2:{
        type:Sequelize.STRING,
        allowNull:true
    },
    serviceIndicator3:{
        type:Sequelize.STRING,
        allowNull:true
    },
    serviceIndicator4:{
        type:Sequelize.STRING,
        allowNull:true
    },
    serviceIndicator5:{
        type:Sequelize.STRING,
        allowNull:true
    },
    serviceIndicator6:{
        type:Sequelize.STRING,
        allowNull:true
    },
    serviceIndicator7:{
        type:Sequelize.STRING,
        allowNull:true
    },
})


module.exports=DailyInspection;