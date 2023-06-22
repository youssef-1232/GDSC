const express = require('express')
const mongoos = require('mongoose')
const helemt = require('helmet')
const bcrypt = require('bcrypt')
const path = require('path')
const http = require('http')
const db = require('./db')
require("dotenv").config()
const app = express()
app.set("port", process.env.port)
const cors = require("cors")
const xss = require("xss-clean")
const fs = require('fs')
    //app.use(express.static(path.join(__dirname, '/public')));

const task = require('./model/taskSchema')
const taskController = require('./controller/taskController')

const bodyParser = require("body-Parser")
const cookieparser = require("cookie-parser")
    //var session = require('express-session')
const ejs = require('ejs')

// console.log(process.env.port)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// mongoos.connect("mongodb://0.0.0.0:27017/myTasks", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,

// }).then(() => {
//     console.log("concted")

// }).catch((err) => {
//     console.log(err)
// })

app.use(helemt({
    contentSecurityPolicy: false,
    frameguard: false
}));
app.use(express.static('public'));
app.use(cors());
app.use(xss());

app.use(cookieparser());


app.set('template engine', 'ejs')
app.set('views', 'temp')
const taskrouts = require('./router/taskRouter')



app.get('/tasks', taskController.finedAllTasks, (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");

    res.render(path.join(__dirname, './temp/task.ejs'))

})

app.post('/tasks', taskController.addtask, (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");

    res.render(path.join(__dirname, './temp/task.ejs'))

})
app.delete('/deletetask', taskController.deletetask, (req, res) => {
    res.render(path.join(__dirname, './temp/task.ejs'))
})


//pass for atlas
//a9ZoKqdFNfAuiA2z



const httpserver = http.createServer(app)
httpserver.listen(app.get('port'), () => {
    console.log("server is runing")

})