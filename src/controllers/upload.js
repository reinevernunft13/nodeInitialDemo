const multer = require('multer');
const path = require('path');

const imageFilter = require('../middlewares/imageFilter.js');

//MULTER CONFIG
//Set storage location for our file by creating a storage object with diskStorage();
let storage = multer.diskStorage({
  destination: './my_uploads',
  fileName: (req, file, cb) => {
    cb(null, file.originalname + '-' + Date.now()); //displays file's original name
   //cb(null, file.fieldname + '-' + Date.now()); //displays file with fieldname 
  }
});

// Initialize multer 
const upload = multer({
  storage: storage,
  limits:{fileSize: 3000000}, //3MB
  fileFilter: function (req, file, cb) {
    imageFilter(file, cb);
  }
}).single('my_pic');

//CONTROLLER
const uploadImage = (req,res) => { 
  
try {
    upload(req, res,(err) => {
    // Invalid file extension
        if (err) {
          return res.status(415).send({
            status: 'error', 
            message: err.message
            });
          } else if(!req.file){
            return res.status(400).send({
              status: 'error', 
              message: 'ERROR 400-File Not Found'});   
          } else { 
            return res.status(200).send({
             message: 'File Uploaded Successfully!',
             file: req.file
            });
        };
    });

} catch (err) {
  res.status(500).send({
      status: 'error',
      message: 'ERROR 500-Internal Server Error'
  });
 };
}

module.exports = uploadImage;
