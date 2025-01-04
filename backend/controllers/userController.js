import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import validator from 'validator'
import userModel from '../models/userModel.js'

const createToken= (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET)
}
const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await userModel.findOne({email});

        if(!user){
            res.json({success:false, message:"User does not exist"})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(isMatch){
            const token = createToken(user._id)
            res.json({success:true,token})
        }
        else{
            res.json({success:false, message:"Invalid credentials"})

        }
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})

        
    }
}

const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        //checkin alredy exist
        const exist =await userModel.findOne({email});
        if (exist) {
            return res.json({success: false, message:"User alredy exists"})
        }

        //valiate email and strong password
        if (!validator.isEmail(email)) {
            return res.json({success: false, message:"Please enter a valid email"})
        }
        if (password.length < 8) {
            return res.json({success: false, message:"Please enter a strong password"})
        }

        //hash passwoord
        const salt =  await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name,
            email,
            password:hashedPassword
        })

        const user = await newUser.save()

        const token = createToken(user._id)

        res.json({
            success:true,
            token
        })

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})        
    }
}

const adminLogin= async (req, res) => {
    try {
        const {email, password} = req.body;
        console.log(req.body);
        
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password, process.env.JWT_SECRET);
            res.json({success:true, token})
        }else{
            res.json({success:false, message:"invalid credentials"})
        }
    } catch (error) {
        
    }
}

export { adminLogin, loginUser, registerUser }
