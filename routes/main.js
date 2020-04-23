const express = require('express');
const controller = require('../controllers/control');
const path = require('path');
const bcrypt = require('bcryptjs')
const DirName=require('../util/path');
const router = express.Router();
const PreventiveMaintainance=require('../models/PreventiveMaintainance')
const WorksOrders=require('../models/worksOrders')
const Pre_installation = require('../models/pre-installation')
const Engineers= require('../models/engineers')

router.get('/index',controller.mainRoute);
// router.get('/pre-installationform',controller.Data);
router.post('/pre-installationform',controller.getData);
router.get('/pre-installationform',controller.showPreinstallationform);
router.post('/addEng',controller.singUp);
router.get('/addEng',controller.ShowEditEngForm);
router.get('/viewEng',controller.showEng);

router.get('/managementSystem',controller.managementSystem);
router.post('/login',controller.login);
router.get('/showLogin',controller.showLogin);
router.get('/showPre-installationform',controller.showPreinstallationData)

// router.post('/register',controller.regist);
// router.post('',controller.getDataPreven);
// router.get('',controller.dataPreven);
// router.post('',controller.getDataWorkOrder);
// router.get('',controller.dataWorkOrder);
module.exports=router;