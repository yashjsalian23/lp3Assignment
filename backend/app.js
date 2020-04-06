let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use((req, res , next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
  });

app.get("/date", (req, res, next)=>{
    let date = new Date();
    let dateString = date.getFullYear() + "/" + (date.getMonth()+1) + "/" + date.getDay();
    let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
     res.json({dateString,time});
  
})

app.listen(5000);