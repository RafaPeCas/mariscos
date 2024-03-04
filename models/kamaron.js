'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let kamaronSchema = new Schema({
    url: String,
    price: Number,
    name: String,
    descripcion: String
})

const kamaron = mongoose.model('kamaron', kamaronSchema, "kamaron");

module.exports = kamaron;