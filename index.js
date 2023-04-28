const express= require('express');
const app = express();
const port=5000;

app.listen(port,(error)=>{
    if(!error){
        console.log('Server is succesfully running and app is listening on port '+port);
    }
    else{
        console.log('Error ocurred ,server cannot connect to port '+ error);
    }
});