const getTime = (req,res) => {
    try {
        res.status(200).send({ date: new Date().toLocaleString()});
    
    } catch (err) {
        res.status(500).send({
            status: "error",
            message: "ERROR 500-Internal Server Error!"
        });
    } 
}

module.exports = getTime;