const User = require('../models/user')


const test = (req,resp)=>{
    resp.json('test is working')
}


const registerUser= async(req,resp)=>{
 try{
        const {name,email,password}=req.body;
        if(!name){
            return resp.json({
                error:"name is required"
            })
        };

        if(!password||password.length<6){
            return resp.json({
                error:"password is required and must be at least 6 characters long"
            })
        };
        const exist = await User.findOne({email});
        if(exist){
            return resp.json({
                error:"email already exist"
                })
 }
 const user = await User.create({
    name,email,password
})

return resp.json(user)
}catch(error){
    console.log(error)
      
 }
}


module.exports={
    test,
    registerUser
}