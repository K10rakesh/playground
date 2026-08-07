const jwt = require('jsonwebtoken');
const payload = {
    userId: "12345"
};
const secret = "temporary-test-secret";
const token = jwt.sign(payload, secret, {expiresIn: "1s"});
setTimeout(() => {
    try{
        const decoded = jwt.verify(token, secret);
        console.log(decoded);
    }
    catch (err){
        console.error(err.name);
        console.error(err.message);
    }
}, 2000);