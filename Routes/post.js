const express = require('express');
const mongoose = require('mongoose');
let router = express.Router();

/*-------------imported POST schema------*/
require('../Model/Post');
let POST = mongoose.model('posts');
/*-------------end POST schema------*/



/** START @All GET ROUTES */

router.get("/create-post" , (req,res)=>{
    res.render("posts/CreatePost")
});
router.get("/edit-post" ,(req,res)=>{
    res.render("posts/EditPost")
});
router.get("/fetch-post" ,(req,res)=>{
    res.render("posts/FetchPost")
});

/** END @All GET ROUTES */

/** START @All POST ROUTES */
// for creating new DATA purpose HTTP Post method
router.post("/create-post" , (req,res)=>{
    // res.send('successfully created post');
let {title , details} = req.body;

let Errors = [];
if (!title) {
Errors.push({text : 'Title field is required'});
}  
if (!details) {
    Errors.push({text : 'Details field is required'});
}   
if (Errors.length >0) {
    res.render("posts/CreatePost", {errors:Errors}); //ending req,res cycle
    console.log(Errors);
}else {
    let newPost = {title,details};
    // save this form body to database
    new POST(newPost)
    .save()
    .then(post =>{
        console.log(post);
        res.redirect('/posts/fetch-post' , 301, () => {})
    })
    .catch(err =>console.log(err));
    // res.send('ok')
}
})

/** end @All POST ROUTES */

module.exports = router;


