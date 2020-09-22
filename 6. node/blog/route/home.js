// express framwork 
const express = require('express')

// create a router for blog home page 
const home = express.Router()

home.get('/', (req, res) => {
	res.send("Welcome to blog home page!")
})

module.exports = home;