import User from "../models/userModel.js"


export const first = (req,res)=>{
    return res.status(200).json({message:"From Backend. This is First Page."})
}

export const second = (req,res)=>{
    res.send("This is second Page.")
}

export const third = (req,res)=>{
    res.send("This is third Page.")
}


export const Register = async(req,res)=>{
    try{
        const{name,email}=req.body;
        const image = req.file;
        if(!image){
            return res.status(400).json({
                message: "file not found."
            })
        }

        if(!name || !email){
            return res.status(400).json({success:false,message:"All fields required"})
        }
        const existingUser = await User.findOne({email})
        // if(existingUser){
        //     return res.status(400).json({success:false,message:"User All ready exist. Please Login"})
        // }
        // const hashPass = await bcrypt.hash(password,10)
        // const verficationCode = Math.floor(100000 + Math.random() * 900000).toString()
        const newUser= new User({name,email,image:req.file.path})
        await newUser.save();
        // await sendVerificationCode(newUser.email,newUser.verficationCode)
        return res.status(201).json({success:true,message:"User Register successfully"})
    }catch(error){
        return res.status(500).json({success:false,message:error.message})
    }
}

export const GetAll = async(req,res)=>{
    try{
        const newUser=await User.find()
        return res.json(newUser)
        // return res.json({message: " Successfully"})
    }catch(error){
        return res.json({message: error.message})
    }
}

export const Edit = async(req,res)=>{
    const uid = req.params.id
    try{
        // const{name,details}=req.body;
        const nuser = await User.findByIdAndUpdate(uid,req.body,{new:true});
        
        await nuser.save();
        return res.json({message: "Updated Successfully"})
    }catch(error){
        return res.json({message: error.message})
    }
}