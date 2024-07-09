const express = require('express');
const router = express.Router();

const commonAuth = (req, res, next) => {
    console.log("commonAuth")
    next();
};

const adminAuth = (req, res, next) => {
    console.log("adminAuth")
    next();
};

// Route handlers
let getData = (req, res) => res.send("Get data successfully");
let postData = (req, res) => res.send("Data insert successfully");
let updateData = (req, res) => res.send("Data update successfully");
let deleteData = (req, res) => res.send("Data delete successfully");
let patchData = (req, res) => res.send("Data update partially");

// Define routes using router.route('/')
router.route('/')
    .get([commonAuth,adminAuth], getData)
    .post(adminAuth, postData)
    .put(adminAuth, updateData)
    .delete(adminAuth, deleteData)
    .patch(adminAuth, patchData)

module.exports = router;
