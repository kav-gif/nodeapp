const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const homeRouter = require('./routers/home')
const app = express();
const port = 3000;

app.engine('ejs',ejsMate)
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'/public')))
app.set('views',path.join(__dirname,'/views'))

app.use('',homeRouter)

app.use('*',(req, res) => {
  res.send('Page not found')
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}.`)
})