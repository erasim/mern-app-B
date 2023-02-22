import  Jwt  from "jsonwebtoken"
import bcrypt from "bcryptjs"
import users from "../models/auth.js"
import auth from "../models/auth.js";

export const signup = async (req, res) => {
 
    const {name,email,password} =req.body;
    try {
        const existinguser = await users.findOne({email});
        if(existinguser){
            return res.status(404).json({massage:"user already exist"});
        }
        const hashpass = await bcrypt.hash(password,12)
        const newuser = await users.create({name,email,password:hashpass});
        const token = Jwt.sign({email:newuser.email,id:newuser._id}, "text",{expiresIn:"1h"});
        res.status(200).json({result:newuser,token})

    }
     catch (error) {
        res.status(500).json("something went wrong");
    }
}   
export const login = async (req, res) => {
 
    const {email,password} =req.body;
    try {
        const existinguser = await users.findOne({email});
        if(!existinguser){
            return res.status(404).json({massage:"user don't exist"});
        }
      const isPasswordCrt = await bcrypt.compare(password, existinguser.password)
      if(!isPasswordCrt){
        return res.status(400).json({massage:" Invalid username or password"})
      }  
      const token = Jwt.sign({email:existinguser.email,id:existinguser._id}, "text",{expiresIn:"1h"});
      res.status(200).json({result:existinguser,token})

    }
     catch (error) {
        res.status(500).json("something went wrong");
    }
}

export default auth