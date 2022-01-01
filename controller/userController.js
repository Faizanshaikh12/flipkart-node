import User from "../models/User.js";

export const userSignup = async (req, res) => {
    try {
        const existUsername = await User.findOne({username: req.body.username});
        if(existUsername){
            return res.status(401).json('Username already exists');
        }
        const user = req.body;
        const newUser = new User(user);
        await newUser.save();

        res.status(200).json('User is successfully registered');

    } catch (e) {
        console.log('Error', e.message);
    }
}

export const userLogin = async (req, res) =>{
    try{
     let user = await User.findOne({username: req.body.username, password: req.body.password});
     if(user){
         return res.status(200).json('Login Successfully');
     }else{
         return res.status(401).json('Something went wrong');
     }
    }catch (e) {
        console.log('Error', e.message);
    }
}
