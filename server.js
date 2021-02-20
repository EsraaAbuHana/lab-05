'use strict';
//1//
const { request, response } = require('express');
//build our server 
const express=require('express');//var that requires to use the express libraries

//when ever i require something i have to install it in terminal //in terminal : npm install express >>then file node_modules is been creating >>that has all the packages that i may gonna need to use them >>one of them is the express 
//2//
//do the previous step when ever you creat a new project 
const server=express();//to use the methods and properties inside the express file
//3//
const PORT=3000;//to connect my server to website range;0-65000 usually 4 digits 

//to access statics files and folders inside the public folder 
server.use(express.static('./public'));

//5//
//to test my server i will create a route request ~-request URL-
//takes two parameter (route ,function (request,response)) 
server.get('/test',(request,response)=>{
    response.send('this is my first server');// response.get()as it is in express

   //request:localhost:3000/test
    //response:'this is my first server'
})//this could be anything i want to pass it in  
//then;1>>in terminal:nmp start 2>>in browser:localhost:3000/test

server.get('/family',(req,res)=>{
    let family=[
        {name:'Esraa'},
        {name:'Batool'},
        {name:'Osama'},
        {name:'Abd-Alrahman'},
        {name:'Naseem'},
    ];
    res.json(family);//res.json() as it is in json
    //req:localhost:3000/family
    //res:family[]as whole arr
})

//4//
//my server is ready and its listening to the PORT it self 
server.listen(PORT,()=>console.log(`listening on PORT ${PORT}`));//check in your terminal  write:npm start
//to stop the server :ctrl+c




