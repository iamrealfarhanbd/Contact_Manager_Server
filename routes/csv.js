const { dumbledoresArmyModel } = require("../models/csv");
const auth = require("../middlewares/auth");

const mongoose = require("mongoose");
const router = require("express").Router();


var multer = require('multer');
var csv = require('csvtojson');
require('dotenv/config');


var upload = multer({ dest: 'uploads/' });



router.get('/csv', auth,(req, res) => {
    dumbledoresArmyModel.find({}, (err, items) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json({ items: items });
        }
    });
});

router.post('/csv', upload.single('file'), (req, res, next) => {

    csv()
    .fromFile(req.file.path)
    .then((jsonObj)=>{
        var army = [];
        for(var i = 0;i<jsonObj.length;i++){
            var obj={};
            obj.firstName=jsonObj[i]['First Name'];
            obj.lastName=jsonObj[i]['Last Name'];
            obj.house=jsonObj[i]['House'];
            army.push(obj);
        }
        dumbledoresArmyModel.insertMany(army).then(function(){
            res.status(200).send({
                message: "Successfully Uploaded!"
            });
        }).catch(function(error){
            res.status(500).send({
                message: "failure",
                error
            });
        });
    }).catch((error) => {
        res.status(500).send({
            message: "failure",
            error
        });
    })
});

module.exports = router;