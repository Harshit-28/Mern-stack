const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');



router.get('/',(req,res) => {
    res.send(`Hello From UserRoute`);

});

router.get('/postBlog',(req,res) => {
    res.send(`Hello From UserRoute`);

});

    
    router.post('/signup',userController.userSignup);
    router.post('/login',userController.userLogin);
    router.get('/getUser/:id',userController.getUser);
    router.post('/postBlog',userController.postBlog);
    router.get('/getBlog/:id',userController.getBlog);

    module.exports = router;