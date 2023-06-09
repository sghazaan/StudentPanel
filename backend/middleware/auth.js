const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;
 exports.setStudent = (student) => {   
    try{
        // console.log("token signed")
        return jwt.sign({id: student._id, email: student.email}, secret, {expiresIn: '1h'});
    }catch  (err){
        // console.log(err);
    }
}
 exports.getStudent = (req, res, next) => {
    try{
        let token = req.headers.authorization.split(" ")[1];
        if(token){
         let student = jwt.verify(token, secret);
         req.id = student.id;
        //  console.log("Token verified");
        } else{
            res.status(401).json({message: "Unauthorized User"});
        }
        next();
        }catch(err){
        // console.log(err);
        res.status(401).json({message: "Unauthorized User error"});
    }
}
