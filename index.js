const express= require('express');
const app = express();
const port=5000;

app.listen(port,(error)=>{
   if(error){
    console.log('Sever cannot listen on port' +error);
   }
   else{
    console.log('Sever listening on port ' + port);
   }
});