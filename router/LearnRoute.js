const express = require('express');
const router = express.Router();

let getData = (req, resp) => resp.send("Get data successfully")
let postData = (req, resp) => resp.send("Data insert successfully")
let updateData = (req, resp) => resp.send("Data update successfully")
let deleteData = (req, resp) => resp.send("Data delete successfully")
let patchData = (req, resp) => resp.send("Data update partially")

router.route('/')
    .get(getData)
    .post(postData)
    .put(updateData)
    .delete(deleteData)
    .patch(patchData)
module.exports = router