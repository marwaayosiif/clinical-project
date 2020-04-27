const DirName=require('../util/path')
const path= require('path')
const bcrypt = require('bcryptjs')
const Pre_installation = require('../models/pre-installation')
const WorksOrders=require('../models/worksOrders')
const Engineers= require('../models/engineers')
const Equipment= require('../models/equipment')
// const Technician = require('../models/technician')


exports.showWorkOrdeForm=(req,res,next) => {
    res.sendFile(path.join(DirName,'views','add_workorder.html'));
}
exports.showEqform=(req,res,next) => {
    res.sendFile(path.join(DirName,'views','add_equipment.html'));
}
exports.showPreinstallationform=(req,res,next) => {
    res.sendFile(path.join(DirName,'views','add_preinstallation.html'));
}
exports.ShowEditEngForm=(req,res,next) => {
    res.sendFile(path.join(DirName,'views','add_engineer.html'));
}
exports.viewTechForm=(req,res,next)=>{
    res.sendFile(path.join(DirName,'views','add_technician.html'));
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
exports.showEditEng=(req,res,next)=>{
    res.sendFile(path.join(DirName,'views','edit_engineer.html'));
}
exports.ShowEditTech=(req,res,next)=>{
    res.sendFile(path.join(DirName,'views','edit_technician.html'));
}
exports.showEditEq=(req,res,next)=>{
    res.sendFile(path.join(DirName,'views','edit_equipment.html'));
}
exports.showPreinstallationData=(req,res,next) => {
    Pre_installation.findAll()
    .then(newform => {
        res.render('pre_installation',{newform:newform,layout:false})})
    }
exports.showEng=(req,res,next) => {
    Engineers.findAll().then(viewEng=> {
            res.render('engineers',{engineer:viewEng,layout:false})
            });
}
exports.viewTech=(req,res,next)=>{
    Technician.findAll().then(viewTech=>{
        res.render('technicians',{tech:viewTech,layout:false}) 
    });
}
exports.showWorkOrder=(req,res,next)=>{
    WorksOrders.findAll().then(viewWO=> {
        res.render('workorder',{workorder:viewWO,layout:false})
        });
}
exports.showEq=(req,res,next) => {
    Equipment.findAll().then(viewEq=> {
            res.render('equipments',{equip:viewEq,layout:false})
            });
}
exports.showPrevMain=(req,res,next) => {
    let preVenM = "yes"
    Equipment.findAll({where:{preVenM:preVenM}}).then(prev=> {
            console.log(prev.preVenM)
            res.render('preventive_maintance',{pre:prev ,layout:false})
        })
}

exports.EditTech=(req,res,next) => {
    const TECH = new Technician({
        FirstName:req.body.firstname,
        LastName:req.body.lastname,
        ID:req.body.id,
        SerialNO:req.body.serial,
        CompanyName:req.body.company,
        PhoneNumber:req.body.phone
    });
    Technician.findOne({where:{ ID:TECH.ID}}).then(editTech => {
        TECH.FirstName ? editTech.FName=TECH.FName : null;
        TECH.LastName ?  editTech.LastName=TECH.LastName : null;
        TECH.SerialNO ?  editTech.SerialNO=TECH.SerialNO : null;
        TECH.CompanyName ? editTech.CompanyName=TECH.CompanyName : null;
        TECH.PhoneNumber ? editTech.PhoneNumber=TECH.PhoneNumber : null;
        TECH.save();
    })
        .then( result => {
            res.redirect('/viewTech')
        })
        .catch(err =>  res.redirect('/viewTech'))

}

exports.getTechdata=(req,res,next) => {
    const tech = new Technician({
        FirstName:req.body.firstname,
        LastName:req.body.lastname,
        ID:req.body.id,
        SerialNO:req.body.serial,
        CompanyName:req.body.company,
        PhoneNumber:req.body.phone
    });
    tech.save().then(
        res.redirect('/viewTechForm')
    )
}
exports.getWorkOrderData=(req,res,next) => {
    const workorder = new WorksOrders({
        nameEq:req.body.equipment,
        disc:req.body.desc,
        model:req.body.model,
        assestType:req.body.assest,
        status:req.body.status,
        serialNO:req.body.serial,
        prioity:req.body.priority,

        
        Date:req.body.date,
    });
    workorder.save().then(res.redirect('/showWorkOrdersForm'));
}
exports.getEqData=(req,res,next) => {
    const equip = new Equipment({
        Name:req.body.name,
        Ventor:req.body.ventor,
        Model:req.body.model,
        SerialNO:req.body.serial,
        Operation:req.body.operation,
        Cost:req.body.cost,
        WarrantyPeriod:req.body.warrantyperiod,
        DueDate:req.body.maintainDate,
        Department:req.body.department,
        preVenM:req.body.PreventiveM,
        frequency:req.body.freq
    });
    Equipment.findOne({where:{SerialNO: equip.SerialNO}}).then(user => {
        if (!user) {
            equip.save().then(
                res.redirect('/showEqform')
            );
        } else {
            console.log('User is found');
            res.redirect('/showEqform');
        }
    });
}

exports.editEq=(req,res,next) => {
    const equip = new Equipment({
        Name:req.body.name,
        Ventor:req.body.ventor,
        Model:req.body.model,
        SerialNO:req.body.serial,
        Operation:req.body.operation,
        Cost:req.body.cost,
        WarrantyPeriod:req.body.warrantyperiod,
        DueDate:req.body.maintainDate,
        Department:req.body.department,
        preVenM:req.body.preven,
        frequency:req.body.freq
    });
    Equipment.findOne({where:{SerialNO:equip.SerialNO}}).then(editEq => {
        equip.Name ? editEq.Name=equip.Name : null;
        equip.Ventor ? editEq.Ventor=equip.Ventor : null;
        equip.Operation ? editEq.Operation=equip.Operation : null;
        equip.Cost ? editEq.Cost=equip.Cost : null;
        equip.WarrantyPeriod ? editEq.WarrantyPeriod=equip.WarrantyPeriod : null;
        equip.Model ?  editEq.Model=equip.Model : null;
        equip.SerialNO ?  editEq.SerialNO=equip.SerialNO : null;
        equip.DueDate ? editEq.DueDate=equip.DueDate : null;
        equip.Department ? editEq.Department=equip.Department : null;
        equip.preVenM ? editEq.preVenM=equip.preVenM : null;
        equip.frequency ? editEq.frequency=equip.frequency : null;
        editEq.save();
    })
        .then( result => {
            res.redirect('/showEditEq')
        })
        .catch(err =>  res.redirect('/showEditEq'))
}




exports.singUp=(req,res,next) => {

    const engineer  = new Engineers({
        FName:req.body.firstname,
        LName:req.body.lastname,
        Department:req.body.department,
        Salary:req.body.salary,
        Email:req.body.email,
        Password:req.body.password
    });

        Engineers.findOne({where:{Email: engineer.Email}}).then(user => {
            if (!user) {
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(engineer.Password, salt, (err, hash) => {
                        engineer.Password = hash;
                        engineer.save().then(savedUser => {
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
exports.editEng=(req,res,next)=>{
    const EditEngineer  = new Engineers({
        FName:req.body.firstname,
        LName:req.body.lastname,
        Department:req.body.department,
        Salary:req.body.salary,
        Email:req.body.email,
        Password:req.body.password
    });
// console.log(req.body);
    Engineers.findOne({where:{ Email:EditEngineer.Email}}).then(engineer => {
        EditEngineer.FName ? engineer.FName=EditEngineer.FName : null;
        EditEngineer.LName ?  engineer.LName=EditEngineer.LName : null;
        EditEngineer.Department ?  engineer.Department=EditEngineer.Department : null;
        EditEngineer.Salary ?  engineer.Salary=EditEngineer.Salary : null;
        EditEngineer.Email ? engineer.Email=EditEngineer.Email : null;
        EditEngineer.Password ? engineer.Password=EditEngineer.Password : null;
        engineer.save();
    })
        .then( result => {
            res.redirect('showEditEng')
        })
        .catch(err =>  res.redirect('showEditEng'))


}
    exports.login=(req,res,next) => {
    let Email = req.body.email;
    let Password = req.body.pass;
    Engineers.findOne({where:{Email:Email}}).then(user => {
        if(!user){           
           console.log("user is not found")
           res.redirect('/showLogin')
       } else{
           bcrypt.compare(Password, user.Password).then((returnedPassword) => {
               if (returnedPassword){
                res.redirect('/managementSystem');
               }
               else{
                   console.log("password is not correct")
                   res.redirect('/showLogin')
               }
           });
       }
    });
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
    newform.save().then(savedUser => {
        console.log("eheldonya");
        res.redirect('/pre-installationform'); 
    });
}
