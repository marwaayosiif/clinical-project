const DirName=require('../util/path')
const path= require('path')
const bcrypt = require('bcryptjs')
const Pre_installation = require('../models/pre-installation')
// const doctor = require('../models/doctor')
// const flash = require('req-flash')
// const date = require('../models/date')
// const appointment = require('../models/appointment')
// const complain = require('../models/complain')

exports.mainroute=(req,res,next) => {

    res.sendFile(path.join(DirName,'views','preInstallation.html'));

}
exports.getData =(req,res,next) => {
    const newform = new Pre_installation({
        Hospital:req.body.hospital,
        Date : req.body.date,
        Name : req.body.name,
        Equipment : req.body.equipment,
        Floor: req.body.floor,
        Room: req.body.room,
        Department: req.body.department,
        Pre_installationFormCopiedCheck: req.body.preinstallCheck,
        Pre_installationFormCopiedRON: req.body.preinstallRON,
        Pre_installationFormCopiedComment:req.body.preinstallComment,
        SitePowerOutletAvailableCheck: req.body.sitepowerCheck,
        SitePowerOutletAvailableRON: req.body.sitepowerRON,
        SitePowerOutletAvailableComment:req.body.sitepowerComment,
        RequiredToolsAvailableCheck:req.body.requiredtoolCheck,
        RequiredToolsAvailableRON:req.body.requiredtoolRON,
        RequiredToolsAvailableComment:req.body.requiredtoolComment,
        RequiredSuppliesAvailableCheck:req.body.requiredsupllyCheck,
        RequiredSuppliesAvailableRON:req.body.requiredsupplyRON,
        RequiredSuppliesAvailableComment:req.body.requiredsupplyComment,
        SiteCanBeLockedAfterHoursCheck:req.body.sitelockCheck,
        SiteCanBeLockedAfterHoursRON:req.body.sitelockRON,
        SiteCanBeLockedAfterHoursComment:req.body.sitelockComment,
        LockKeysAssignedToPersonalCheck:req.body.lockkeyCheck,
        LockKeysAssignedToPersonalRON:req.body.lockkeyRON,
        LockKeysAssignedToPersonalComment:req.body.lockkeyComment,
    });
    // console.log(Pre_installationFormCopiedCheck)
    // console.log(newform.Data)
    // if (req.body.preinstallCheck == )
    newform.save()
    res.sendFile(path.join(DirName,'views','preInstallation.html'));
}