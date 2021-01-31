//TODO: Avance de tutorial: 46 minutos

const express = require('express');
const app = express();
const path = require('path');

//settings
app.set('port', process.env.PORT || 4000);
app.set('views',path.join(__dirname,'views'));
app.engine('html',require('ejs').renderFile);
 app.set('view engine','ejs');


//middlewares

//routes
 app.use(require('./routes'));


//static files
app.use(express.static(path.join(__dirname,'public')));
 
//listening my server
app.listen(app.get('port'), () => {
    console.log(`app listening on port ${app.get('port')}!`);
});