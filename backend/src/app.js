const express = require('express')
const app = express();
const bodyParcel = require('body-parser')


app.use(express.json());
app.use(bodyParcel.urlencoded({ extended: true }));
app.use(bodyParcel.json());

module.exports = app;