// write database schema
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const {Schema , model} = require('mongoose')

let PostSchema = new Schema({
title : {
    type : String,
    require : true,
},
details : {
    type : String,
    require : true,
},
},
{timestamps:true}
);


module.exports = model("posts" , PostSchema)
