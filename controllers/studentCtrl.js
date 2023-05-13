const Student = require('../models/student');
const createStudent = async(req, res) => {
    try{
        const student = new Student({
            name: req.body.name,
            fName: req.body.fName,
            nicNumber: req.body.nicNumber,
            email: req.body.email,
            password: req.body.password,
        });
        const result = await student.save()      
    } catch(err){
        console.log(err);
    } 
}
module.exports = { createStudent };
