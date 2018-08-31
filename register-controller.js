var connection = require('./config');
var Cryptr = require('cryptr');
var express = require('express');
module.exports.register=function(req,res){
var encryptedString = cryptr.encrypt(req.body.password);
var user={
    "username":req.body.username,
    "email":req.body.email,
    "password":enctyptedString,
 }
connection.query('INSERT INTO user SET ?',user,function(error,results,fields){
        if(error){
         res.json({
           status:false;
           message:'there is some error in query'
        })
     }
       else{
         res.json({
            status:true,
            data:results,
            message:'users r registered'
      })
 }
});
}
