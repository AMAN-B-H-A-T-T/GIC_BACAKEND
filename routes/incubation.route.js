const { add_incubation } = require("../controller/incubation.controller");
const express = require('express');
const upload = require("../utils/multer.middleware");
const route = express.Router()


route.post('/add_incubation',add_incubation)

module.exports = route