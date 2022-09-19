//require('dotenv');

const getUser = (req, res) => {
    
    try {
        const fullUrl = req.protocol + "://" + req.headers.host + req.url
        res.status(200).json({
                "name": "Britney",
                "age": "40",
                "url": fullUrl
               }); 
            
    } catch (err) {
        console.log(err);
        }
    }

module.exports = getUser;