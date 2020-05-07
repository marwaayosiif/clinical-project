const DirName = require('../util/path')
const path = require('path')
const bcrypt = require('bcryptjs')
const Pre_installation = require('../models/pre-installation')
const WorksOrders = require('../models/worksOrders')
const Engineers = require('../models/engineers')
const Equipment = require('../models/equipment')
const spareParts = require('../models/spareParts')
const DailyInspection = require('../models/DailyInspection')

exports.showWorkOrdeForm = (req, res, next) => {
    res.sendFile(path.join(DirName, 'views', 'add_workorder.html'));
}
exports.showEqform = (req, res, next) => {
    res.sendFile(path.join(DirName, 'views', 'add_equipment.html'));
}
exports.showPreinstallationform = (req, res, next) => {
    res.sendFile(path.join(DirName, 'views', 'add_preinstallation.html'));
}
exports.ShowEditEngForm = (req, res, next) => {
    res.sendFile(path.join(DirName, 'views', 'add_engineer.html'));
}
exports.viewTechForm = (req, res, next) => {
    res.sendFile(path.join(DirName, 'views', 'add_technician.html'));
}
exports.managementSystem = (req, res, next) => {
    res.sendFile(path.join(DirName, 'views', 'management.html'));
}
exports.showLogin = (req, res, next) => {
    res.sendFile(path.join(DirName, 'views', 'login.html'));
}
exports.mainRoute = (req, res, next) => {
    res.sendFile(path.join(DirName, 'views', 'index.html'));
}
exports.showEditEng = (req, res, next) => {
    res.sendFile(path.join(DirName, 'views', 'edit_engineer.html'));
}

exports.pre_installationform = (req, res, next) => {
    res.sendFile(path.join(DirName, 'views', 'add_preinstallation.html'));
}
exports.showDailyInspectionForm = (req, res, next) => {
    res.sendFile(path.join(DirName, 'views', 'add_dailyinspection.html'));
}
exports.showInventoryListingForm = (req, res, next) => {
    res.sendFile(path.join(DirName, 'views', 'add_inventorylisting.html'));
}

exports.ShowEditTech = (req, res, next) => {
    res.sendFile(path.join(DirName, 'views', 'edit_technician.html'));
}
exports.showEditEq = (req, res, next) => {
    res.sendFile(path.join(DirName, 'views', 'edit_equipment.html'));
}

exports.showPreinstallationCatheterData = (req, res, next) => {
    const Department = 'Catheterization'
    Pre_installation.findAll({ where: {Department: Department} }).then(prev => {
        res.render('CatheterPre_installation', { newform: prev, layout: false })
    })
}
exports.CatheterPreinstallationReport = (req, res, next) => {
    const Id = req.params.id;
    Pre_installation.findOne({ where: {SerialNO:Id} }).then(prev => {
        res.render('CathPreinstallReport', {newform: prev, layout: false })
    })
}
exports.showPreinstallationSurgeryData = (req, res, next) => {
    const Department = 'Surgery'
    Pre_installation.findAll({ where: {Department: Department } }).then(prev => {
        res.render('SurgeryPre_installation', {newform: prev, layout: false })
    })
}
exports.SurgeryPreinstallationReport = (req, res, next) => {
    const Id = req.params.id;
    Pre_installation.findOne({ where: {SerialNO:Id} }).then(prev => {
        res.render('SurgPreinstallReport', {newform: prev, layout: false })
    })
}

exports.showPreinstallationEmergencyData = (req, res, next) => {
    Department = 'Emergency'
    Pre_installation.findAll({ where: { Department:Department } }).then(prev => {
        res.render('EmergencyPre_installation', { newform: prev, layout: false })
    })
}
exports.EmergencyPreinstallationReport= (req, res, next) => {
    const Id = req.params.id;
    Pre_installation.findOne({ where: {SerialNO:Id} }).then(prev => {
        res.render('EmerPreinstallReport', {newform: prev,id:Id, layout: false })
    })
}

exports.showDailyInspectionCatheterData = (req, res, next) => {
    const Department = 'Catheterization'
    DailyInspection.findAll({ where: { Department: Department } }).then(prev => {
        res.render('CatheterDailyInspection', { daily: prev, layout: false })
    })
}
exports.CatheterDailyInspectionReport= (req, res, next) => {
    const Id = req.params.id;
    DailyInspection.findOne({ where: {SerailNo:Id} }).then(prev => {
        res.render('CathInspectionReport', {newform: prev, layout: false })
    })
}

exports.showDailyInspectionEmergencyData = (req, res, next) => {
    Department = 'Emergency'
    DailyInspection.findAll({ where: { Department: Department } }).then(prev => {
        res.render('EmergencyDailyInspection', { daily: prev, layout: false })
    })
}

exports.EmergencyDailyInspectionReport = (req, res, next) => {
    const Id = req.params.id;
    DailyInspection.findOne({ where: {SerailNo:Id} }).then(prev => {
        res.render('EmerInspectionReport', {newform: prev, layout: false })
    })
}

exports.showDailyInspectionSurgeryData = (req, res, next) => {
    Department = 'Surgery'
    DailyInspection.findAll({ where: { Department: Department } }).then(prev => {
        res.render('SurgeryDailyInspection', { daily: prev, layout: false })
    })
}
exports.SurgeryDailyInspectionReport = (req, res, next) => {
    const Id = req.params.id;
    DailyInspection.findOne({ where: {SerailNo:Id} }).then(prev => {
        res.render('SurgInspectionReport', {newform: prev, layout: false })
    })
}


exports.showInventoryListingCatheterData = (req, res, next) => {
    Department = 'Catheterization'
    spareParts.findAll({ where: { Department: Department } }).then(prev => {
        res.render('CatheterInventorylisting', { inventory: prev, layout: false })
    })
}
exports.showInventoryListingSurgeryData = (req, res, next) => {
    Department = 'Surgery'
    spareParts.findAll({ where: { Department: Department } }).then(prev => {
        res.render('SurgeryInventorylisting', { inventory: prev, layout: false })
    })
}
exports.showInventoryListingEmergencyData = (req, res, next) => {
    Department = 'Emergency'
    // const Id = req.params.id;
    spareParts.findAll({ where: { Department: Department } }).then(prev => {
        res.render('EmergencyInventorylisting', { inventory: prev, layout: false })
    })
}




exports.showEng = (req, res, next) => {
    Engineers.findAll().then(viewEng => {
        res.render('engineers', { engineer: viewEng, layout: false })
    });
}
exports.viewTech = (req, res, next) => {
    Technician.findAll().then(viewTech => {
        res.render('technicians', { tech: viewTech, layout: false })
    });
}
exports.showWorkOrder = (req, res, next) => {
    WorksOrders.findAll().then(viewWO => {
        res.render('workorder', { workorder: viewWO, layout: false })
    });
}
exports.showEq = (req, res, next) => {
    Equipment.findAll().then(viewEq => {
        res.render('equipments', { equip: viewEq, layout: false })
    });
}
exports.showPrevMain = (req, res, next) => {
    let preVenM ="yes"
    Equipment.findAll({ where: { preVenM: preVenM } }).then(prev => {
        console.log(prev.preVenM)
        res.render('preventive_maintance', { pre: prev, layout: false })
    })
}

exports.EditTech = (req, res, next) => {
    const TECH = new Technician({
        FirstName: req.body.firstname,
        LastName: req.body.lastname,
        ID: req.body.id,
        SerialNO: req.body.serial,
        CompanyName: req.body.company,
        PhoneNumber: req.body.phone
    });
    Technician.findOne({ where: { ID: TECH.ID } }).then(editTech => {
            TECH.FirstName ? editTech.FName = TECH.FName : null;
            TECH.LastName ? editTech.LastName = TECH.LastName : null;
            TECH.SerialNO ? editTech.SerialNO = TECH.SerialNO : null;
            TECH.CompanyName ? editTech.CompanyName = TECH.CompanyName : null;
            TECH.PhoneNumber ? editTech.PhoneNumber = TECH.PhoneNumber : null;
            TECH.save();
        })
        .then(result => {
            res.redirect('/viewTech')
        })
        .catch(err => res.redirect('/viewTech'))
}

exports.getTechdata = (req, res, next) => {
    const tech = new Technician({
        FirstName: req.body.firstname,
        LastName: req.body.lastname,
        ID: req.body.id,
        SerialNO: req.body.serial,
        CompanyName: req.body.company,
        PhoneNumber: req.body.phone
    });
    tech.save().then(
        res.redirect('/viewTechForm')
    )
}
exports.getWorkOrderData = (req, res, next) => {
    const workorder = new WorksOrders({
        nameEq: req.body.equipment,
        disc: req.body.desc,
        model: req.body.model,
        assestType: req.body.assest,
        status: req.body.status,
        serialNO: req.body.serial,
        prioity: req.body.priority,
        Date: req.body.date,
    });
    workorder.save().then(res.redirect('/showWorkOrdersForm'));
}
exports.getEqData = (req, res, next) => {
    const equip = new Equipment({
        Name: req.body.name,
        Ventor: req.body.ventor,
        Model: req.body.model,
        SerialNO: req.body.serial,
        Operation: req.body.operation,
        Cost: req.body.cost,
        WarrantyPeriod: req.body.warrantyperiod,
        DueDate: req.body.maintainDate,
        Department: req.body.department,
        preVenM: req.body.PreventiveM,
        frequency: req.body.freq
    });
    Equipment.findOne({ where: { SerialNO: equip.SerialNO } }).then(user => {
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

exports.editEq = (req, res, next) => {
    const equip = new Equipment({
        Name: req.body.name,
        Ventor: req.body.ventor,
        Model: req.body.model,
        SerialNO: req.body.serial,
        Operation: req.body.operation,
        Cost: req.body.cost,
        WarrantyPeriod: req.body.warrantyperiod,
        DueDate: req.body.maintainDate,
        Department: req.body.department,
        preVenM: req.body.preven,
        frequency: req.body.freq
    });
    Equipment.findOne({ where: { SerialNO: equip.SerialNO } }).then(editEq => {
            equip.Name ? editEq.Name = equip.Name : null;
            equip.Ventor ? editEq.Ventor = equip.Ventor : null;
            equip.Operation ? editEq.Operation = equip.Operation : null;
            equip.Cost ? editEq.Cost = equip.Cost : null;
            equip.WarrantyPeriod ? editEq.WarrantyPeriod = equip.WarrantyPeriod : null;
            equip.Model ? editEq.Model = equip.Model : null;
            equip.SerialNO ? editEq.SerialNO = equip.SerialNO : null;
            equip.DueDate ? editEq.DueDate = equip.DueDate : null;
            equip.Department ? editEq.Department = equip.Department : null;
            equip.preVenM ? editEq.preVenM = equip.preVenM : null;
            equip.frequency ? editEq.frequency = equip.frequency : null;
            editEq.save();
        })
        .then(result => {
            res.redirect('/showEditEq')
        })
        .catch(err => res.redirect('/showEditEq'))
}




exports.singUp = (req, res, next) => {

    const engineer = new Engineers({
        FName: req.body.firstname,
        LName: req.body.lastname,
        Department: req.body.department,
        Salary: req.body.salary,
        Email: req.body.email,
        Id: req.body.id
    });

    Engineers.findOne({ where: { Email: engineer.Email } }).then(user => {
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
exports.editEng = (req, res, next) => {
    const EditEngineer = new Engineers({
        FName: req.body.firstname,
        LName: req.body.lastname,
        Department: req.body.department,
        Salary: req.body.salary,
        Email: req.body.email,
        Password: req.body.password
    });
    // console.log(req.body);
    Engineers.findOne({ where: { Email: EditEngineer.Email } }).then(engineer => {
            EditEngineer.FName ? engineer.FName = EditEngineer.FName : null;
            EditEngineer.LName ? engineer.LName = EditEngineer.LName : null;
            EditEngineer.Department ? engineer.Department = EditEngineer.Department : null;
            EditEngineer.Salary ? engineer.Salary = EditEngineer.Salary : null;
            EditEngineer.Email ? engineer.Email = EditEngineer.Email : null;
            EditEngineer.Password ? engineer.Password = EditEngineer.Password : null;
            engineer.save();
        })
        .then(result => {
            res.redirect('showEditEng')
        })
        .catch(err => res.redirect('/showEditEng'))

}
exports.login = (req, res, next) => {
    let Email = req.body.email;
    let Password = req.body.pass;
    if(Email=='admin@gmail.com' && Password == 0000){
        res.redirect('/managementSystem');
    }
    else{
        console.log("You Are Not The Admin!!")
        res.redirect('/showLogin')
    }
    // Engineers.findOne({ where: { Email: Email } }).then(user => {
    //     if (!user) {
    //         console.log("user is not found")
    //         res.redirect('/showLogin')
    //     } else {
    //         bcrypt.compare(Password, user.Password).then((returnedPassword) => {
    //             if (returnedPassword) {
    //                 res.redirect('/managementSystem');
    //             } else {
    //                 console.log("password is not correct")
    //                 res.redirect('/showLogin')
    //             }
    //         });
    //     }
    // });
}
exports.pre_installationformData = (req, res, next) => {
    const newform = new Pre_installation({
        SerialNO: req.body.serial,
        Date: req.body.date,
        Name: req.body.name,
        Equipment: req.body.equipment,
        Floor: req.body.floor,
        Room: req.body.room,
        Department: req.body.department,
        Pre_installationFormCopiedCheck: req.body.preinstallCheck,
        Pre_installationFormCopiedRON: req.body.preinstallRON,
        Pre_installationFormCopiedComment: req.body.preinstallComment,
        SitePowerOutletAvailableCheck: req.body.sitepowerCheck,
        SitePowerOutletAvailableRON: req.body.sitepowerRON,
        SitePowerOutletAvailableComment: req.body.sitepowerComment,
        RequiredToolsAvailableCheck: req.body.requiredtoolCheck,
        RequiredToolsAvailableRON: req.body.requiredtoolRON,
        RequiredToolsAvailableComment: req.body.requiredtoolComment,
        RequiredSuppliesAvailableCheck: req.body.requiredsupllyCheck,
        RequiredSuppliesAvailableRON: req.body.requiredsupplyRON,
        RequiredSuppliesAvailableComment: req.body.requiredsupplyComment,
        SiteCanBeLockedAfterHoursCheck: req.body.sitelockCheck,
        SiteCanBeLockedAfterHoursRON: req.body.sitelockRON,
        SiteCanBeLockedAfterHoursComment: req.body.sitelockComment,
        LockKeysAssignedToPersonalCheck: req.body.lockkeyCheck,
        LockKeysAssignedToPersonalRON: req.body.lockkeyRON,
        LockKeysAssignedToPersonalComment: req.body.lockkeyComment,
    });
    // newform.RequiredSuppliesAvailableCheck == 'on' ? newform.RequiredSuppliesAvailableCheck == 'true' : newform.RequiredSuppliesAvailableCheck == 'false'

    // newform.Pre_installationFormCopiedCheck == 'on' ? newform.Pre_installationFormCopiedCheck == 'true' : newform.Pre_installationFormCopiedCheck == 'false'

    newform.save().then(savedUser => {
        res.redirect('/pre-installationform');
    });
}
exports.showDailyInspectionData = (req, res, next) => {
    const daily = new DailyInspection({
        SerailNo:req.body.serial,
        Location:req.body.location,
        Department:req.body.department,
        EndDate:req.body.enddate,
        BeginDate:req.body.begindate,
        Authorized_Operator:req.body.name,
        ForeignSubstances1:req.body.ForeignSubstances1,
        ForeignSubstances2:req.body.ForeignSubstances2,
        ForeignSubstances3:req.body.ForeignSubstances3,
        ForeignSubstances4:req.body.ForeignSubstances4,
        ForeignSubstances5:req.body.ForeignSubstances5,
        ForeignSubstances6:req.body.ForeignSubstances6,
        ForeignSubstances7:req.body.ForeignSubstances7,
        DamageOrCracks1:req.body.DamageOrCracks1,
        DamageOrCracks2:req.body.DamageOrCracks2,
        DamageOrCracks3:req.body.DamageOrCracks3,
        DamageOrCracks4:req.body.DamageOrCracks4,
        DamageOrCracks5:req.body.DamageOrCracks5,
        DamageOrCracks6:req.body.DamageOrCracks6,
        DamageOrCracks7:req.body.DamageOrCracks7,
        BrokenOrLooseBattery1:req.body.BrokenOrLooseBattery1,
        BrokenOrLooseBattery2:req.body.BrokenOrLooseBattery2,
        BrokenOrLooseBattery3:req.body.BrokenOrLooseBattery3,
        BrokenOrLooseBattery4:req.body.BrokenOrLooseBattery4,
        BrokenOrLooseBattery5:req.body.BrokenOrLooseBattery5,
        BrokenOrLooseBattery6:req.body.BrokenOrLooseBattery6,
        BrokenOrLooseBattery7:req.body.BrokenOrLooseBattery7,
        DamagedORLeakingBattery1:req.body.DamagedORLeakingBattery1,
        DamagedORLeakingBattery2:req.body.DamagedORLeakingBattery2,
        DamagedORLeakingBattery3:req.body.DamagedORLeakingBattery3,
        DamagedORLeakingBattery4:req.body.DamagedORLeakingBattery4,
        DamagedORLeakingBattery5:req.body.DamagedORLeakingBattery5,
        DamagedORLeakingBattery6:req.body.DamagedORLeakingBattery6,
        DamagedORLeakingBattery7:req.body.DamagedORLeakingBattery7,
        SpareBatteryAvailable1:req.body.SpareBatteryAvailable1,
        SpareBatteryAvailable2:req.body.SpareBatteryAvailable2,
        SpareBatteryAvailable3:req.body.SpareBatteryAvailable3,
        SpareBatteryAvailable4:req.body.SpareBatteryAvailable4,
        SpareBatteryAvailable5:req.body.SpareBatteryAvailable5,
        SpareBatteryAvailable6:req.body.SpareBatteryAvailable6,
        SpareBatteryAvailable7:req.body.SpareBatteryAvailable7,
        CableDamage1:req.body.CableDamage1,
        CableDamage2:req.body.CableDamage2,
        CableDamage3:req.body.CableDamage3,
        CableDamage4:req.body.CableDamage4,
        CableDamage5:req.body.CableDamage5,
        CableDamage6:req.body.CableDamage6,
        CableDamage7:req.body.CableDamage7,
        selfTestMessage1:req.body.selfTestMessage1,
        selfTestMessage2:req.body.selfTestMessage2,
        selfTestMessage3:req.body.selfTestMessage3,
        selfTestMessage4:req.body.selfTestMessage4,
        selfTestMessage5:req.body.selfTestMessage5,
        selfTestMessage6:req.body.selfTestMessage6,
        selfTestMessage7:req.body.selfTestMessage7,
        SpeakerBeep1:req.body.SpeakerBeep1,
        SpeakerBeep2:req.body.SpeakerBeep2,
        SpeakerBeep3:req.body.SpeakerBeep3,
        SpeakerBeep4:req.body.SpeakerBeep4,
        SpeakerBeep5:req.body.SpeakerBeep5,
        SpeakerBeep6:req.body.SpeakerBeep6,
        SpeakerBeep7:req.body.SpeakerBeep7,
        TwoFullyChargedBatteries1:req.body.TwoFullyChargedBatteries1,
        TwoFullyChargedBatteries2:req.body.TwoFullyChargedBatteries2,
        TwoFullyChargedBatteries3:req.body.TwoFullyChargedBatteries3,
        TwoFullyChargedBatteries4:req.body.TwoFullyChargedBatteries4,
        TwoFullyChargedBatteries5:req.body.TwoFullyChargedBatteries5,
        TwoFullyChargedBatteries6:req.body.TwoFullyChargedBatteries6,
        TwoFullyChargedBatteries7:req.body.TwoFullyChargedBatteries7,
        serviceIndicator1:req.body.serviceIndicator1,
        serviceIndicator2:req.body.serviceIndicator2,
        serviceIndicator3:req.body.serviceIndicator3,
        serviceIndicator4:req.body.serviceIndicator4,
        serviceIndicator5:req.body.serviceIndicator5,
        serviceIndicator6:req.body.serviceIndicator6,
        serviceIndicator7:req.body.serviceIndicator7,
    });
    daily.save().then(savedUser => {
        res.redirect('/showDailyInspectionForm');
    });
}
exports.showInventoryListingData = (req, res, next) => {
    const inventory = new spareParts({
        PartNumber:req.body.serial,
        Name:req.body.name,
        Category:req.body.category,
        UnitCost:req.body.cost,
        Vendor:req.body.vendor,
        Department:req.body.department,
        Quantity:req.body.quantity,
    });
    inventory.save().then(savedUser => {
        res.redirect('/showInventoryListingForm');
    });
}
// exports.pre_installationformData=(req,res,next) => {
//     const TECH = new Technician({
//         FirstName:req.body.firstname,
//         LastName:req.body.lastname,
//         ID:req.body.id,
//         SerialNO:req.body.serial,
//         CompanyName:req.body.company,
//         PhoneNumber:req.body.phone
//     })

//         .then( result => {
//             res.redirect('/viewTech')
//         })
//         .catch(err =>  res.redirect('/viewTech'))
// }