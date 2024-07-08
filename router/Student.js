const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/Student')
const upload = require('../middleware/multer')

let field = [
    { name: "profile", maxCount: 1 }, { name: "adhar_card", maxCount: 1 }, { name: "pan_card", maxCount: 1 }
]

router.post('/single', upload.single('profile_img'), StudentController.single)

router.post('/multiple', upload.array('profile_img'), StudentController.multiple);

router.post('/fields', upload.fields(field), StudentController.fields);

module.exports = router;

