//require('dotenv');

const getUser = (req, res) => {
    
    try {
        res.status(200).json({
                "name": "Britney",
                "age": "40",
                "url": req.protocol + "://" + req.headers.host + req.url
               }); 
            
    } catch (err) {
        console.log(err);
        }
    
    }


module.exports = getUser;