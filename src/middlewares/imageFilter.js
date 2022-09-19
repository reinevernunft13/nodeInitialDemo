const imageFilter = (file, cb) => {

    const validMimes = ["image/jpg", "image/jpeg","image/png", "image/gif"];
    
    if(validMimes.includes(file.mimetype)){
      return cb(null, true);
      
    } else {
      return cb(new Error('ERROR 415 - Unsupported Media Type'), false);
    }
  };

  module.exports = imageFilter;