const express = require('express');
const controller = require('../controllers/control');
const path = require('path');
const bcrypt = require('bcryptjs')
const DirName=require('../util/path');
const router = express.Router();
const PreventiveMaintainance=require('./models/PreventiveMaintainance')
const WorksOrders=require('./models/worksOrders')
const Pre_installation = require('../models/pre-installation')

router.get('/index',controller.mainRoute)
router.get('/pre-installationform',controller.Data);
router.post('/pre-installationform',controller.getData);
router.post('',controller.getDataPreven);
router.get('',controller.dataPreven);
router.post('',controller.getDataWorkOrder);
router.get('',controller.dataWorkOrder);
module.exports=router;