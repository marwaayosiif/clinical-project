const express = require('express');
const controller = require('../controllers/control');
const path = require('path');
const bcrypt = require('bcryptjs')
const DirName=require('../util/path');
const router = express.Router();

const Pre_installation = require('../models/pre-installation')

router.get('/pre-installationform',controller.mainroute);
router.post('/pre-installationform',controller.getData);
module.exports=router;