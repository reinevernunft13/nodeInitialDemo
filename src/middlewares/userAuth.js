const basicAuth = require('express-basic-auth');

const userAuth = basicAuth({
    users: { 'admin': 'password1234' },
    unauthorizedResponse: {status:"not-authorized", 
    message:"401-Unauthorized Access."}
    });

module.exports = userAuth;
