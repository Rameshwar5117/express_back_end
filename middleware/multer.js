const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  
  filename: function(req, file, cb) {
    let filename = Date.now() + path.extname(file.originalname)
    req.filename = filename;
    cb(null, filename);
  }
});

const upload = multer({ storage: storage });

module.exports = upload;
