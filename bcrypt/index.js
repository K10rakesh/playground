const bcrypt = require('bcrypt');
const saltRounds = 10;
const password = "password123";
const hasher = async () => {
    try{
        const hashedPassword1 = await bcrypt.hash(password, saltRounds);
        const hashedPassword2 = await bcrypt.hash(password, saltRounds);
        const compare1 = await bcrypt.compare(password, hashedPassword1);
        const compare2 = await bcrypt.compare(password, hashedPassword2);
        const compare3 = await bcrypt.compare("wrongpassword", hashedPassword1);
        console.log(compare1, compare2, compare3);
    }
    catch (error){
        console.error(error);
    }
}
hasher();