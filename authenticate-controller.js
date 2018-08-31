var connection = require('./config');
var Cryptr = require('cryptr');
ctyptr = new cryptr('myTotalSecretKey');
module.exports.authenticate=function(req,res){
var email=req.body.username;
var password=req.body.password;
connection.query('SELECT *FROM USERS WHERE username = ?',[username],function(error,results,fields) {
if (error) {
 res.json({ 
   status:false,
   message:'there is error in query'
   })
}
else{
   if(results.length>0){
   decryptedString = cryptr.decrypt(results[0].password);
      if(password==decryptedString){
      res.json({
       status:true,
      message:'succesful authentication'
      console.log("success");
      return res.redirect("https://www.npmjs.com/package/body-parser ");
       })
     }
      else{
        res.json({
           status:false,
           message:"username and password doesnot match"
           res.redirect('/index.html');
       })
     }
 
   }
   else{
     res.json({ 
       status:false,
       message:"username doses not exist"
       res.redirect('/index.html');
     })
   }
 }
});
}


