const express = require("express"),
    app = express(),
    PORT = 8888,
    mongoose = require("mongoose")
require("dotenv").config()

app.set("view engine", "ejs")
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}, () => {console.log('Connected to db!!')})