const DirName=require('../util/path')
const path= require('path')
const bcrypt = require('bcryptjs')
const Pre_installation = require('../models/pre-installation')
const PreventiveMaintainance=require('../models/PreventiveMaintainance')
const WorksOrders=require('../models/worksOrders')
const Engineers= require('../models/engineers')
//
// exports.showEng==(req,res,next) => {
//
//     res.sendFile(path.join(DirName,'views','add_engineer.html'));
// }
exports.ShowEditEngForm=(req,res,next) => {
    res.sendFile(path.join(DirName,'views','add_engineer.html'));

}
exports.showPreinstallationData=(req,res,next) => {
    // const Id = req.params.id;
    Pre_installation.findAll()
    .then(newform => {
        // console.log(newform)
        res.render('preinstallation_data',{newform:newform,layout:false})})
    }

exports.managementSystem=(req,res,next) => {

    res.sendFile(path.join(DirName,'views','management.html'));
}
exports.showLogin=(req,res,next) => {
    res.sendFile(path.join(DirName,'views','login.html'));
}
exports.mainRoute=(req,res,next) => {
    res.sendFile(path.join(DirName,'views','index.html'));
}
exports.Data=(req,res,next) => {

    res.sendFile(path.join(DirName,'views','preInstallation.html'));

}

exports.showEng=(req,res,next) => {
    // const Id = req.params.id;
    Engineers.findAll()
        .then(viewEng=> {
            // console.log(viewEng )
            res.render('engineers',{viewEng:viewEng,layout:false})
            console.log(viewEng)});
}
exports.singUp=(req,res,next) => {

    const viewEng  = new Engineers({
        FName:req.body.firstname,
        LName:req.body.lastname,
        Job:req.body.job,
        Email:req.body.email,
        Password:req.body.password
    });

        Engineers.findOne({where:{Email: viewEng.Email}}).then(user => {
           
            if (!user) {
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(viewEng.Password, salt, (err, hash) => {
                        viewEng.Password = hash;
                        viewEng.save().then(savedUser => {
                            console.log("eheldonya");
                            res.redirect('/addEng');
                        });
                    });
                });
            } else {
                console.log('User is found');
                res.redirect('/addEng');
            }
        });
    }

exports.login=(req,res,next) => {
    let Email = req.body.email;
    let Password = req.body.pass;
    Engineers.findOne({where:{Email:Email}}).then(user => {
 
        if(!user){           
           console.log("user is not found")
           res.redirect('/showLogin')
            // res.sendFile(path.join(DirName,'views','errors/signinemailerrorD.html'));
           
       } else{
           bcrypt.compare(Password, user.Password).then((returnedPassword) => {
               if (returnedPassword){


                res.redirect('/managementSystem');
                
               }
               else{
                   console.log("password is not correct")
                   res.redirect('login')
                // res.sendFile(path.join(DirName,'views','errors/siginwrongpassD.html'));
                  
               }
           });
       }
    });
}
// exports.dataPreven=(req,res,next) => {
//     res.sendFile(path.join(DirName,'views',''));
// }
// exports.dataWorkOrder=(req,res,next)=>{
//     res.sendFile(path.join(DirName,'views',''));
// }

// exports.getDataPreven = (req,res,next) => {
//     const preventive = new PreventiveMaintainance({
//         manufacture:req.body,
//         SchDate:req.body,
//         version:req.body,
//         serialNO:req.body,
//         freq:req.body,
//         processes:req.body,
//         daysOfMaintainance:req.body
//     });

        

//         if (PreventiveMaintainance.findOne({where:{serialNO: preventive.serialNO}}).then(user => {
           
//             if (!user) {
//                 preventive.save().then(res.sendFile(path.join(DirName,'views','')));

//             } else {
               
//                 console.log('anaa henaa');
//                 // res.sendFile(path.join(DirName,'views','errors/signupexistingemail.html'));
//             }
//         }));
        
// }
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
    newform.save().then(savedUser => {
        console.log("eheldonya");
        res.redirect('/pre-installationform'); 
    });
}
// exports.getDataWorkOrder = (req,res,next)=>{
//     new workOrder = new WorksOrders({
//         nameEq:req.body,
//         disc:req.body,
//         model:req.body,
//         assestType:req.body,
//         status:req.body,
//         serialNO:req.body,
//         manufacturer:req.body,
//         manufacturerInfo:req.body,
//         preferedSuppliers:req.body
//     });
//     workOrder.save().then(res.sendFile(path.join(DirName,'views','')));
// }