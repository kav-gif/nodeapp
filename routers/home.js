const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();


router.get('/',(req,res)=>{
    res.render('home')   
})

router.get('/about',(req,res)=>{
    res.render('about')
})

router.get('/contact',(req,res)=>{
    res.render('contact')
})


module.exports = router