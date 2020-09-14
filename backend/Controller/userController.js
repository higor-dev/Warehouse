const express = require('express');
require('dotenv/config');
const port = process.env.PORT;
const service = require("../Database/userMethods");
const { response } = require('express');
const router = express.Router();


router.get("/", (req,res)=>{
    const allUsers = service.getAllUsers();
    allUsers
        .then(data => res.json(data))
        .catch(err => res.json(err));
})

router.get("/get", (req,res)=>{
    const user = service.getUserById(req.body);
    user
        .then(data => res.json(data))
        .catch(err => res.json(err));
})

router.post("/createUser", (req,res) => {
    console.log(req.body);
    const user = service.createdUser(req.body);
    user
        .then(data => res.json(data))
        .catch(err => res.json(err));

})

router.put("/updateUser", (req,res) => {
    const user = service.updatedUser(req.body);
    user
        .then(data => res.json(data))
        .catch(err => res.json(err));
})

router.delete("/deleteUser", (req,res)=>{
    const user = service.deleteUser(req.body);
    user
        .then(data => res.json(data))
        .catch(err => res.json(err));
    
})

module.exports = router;