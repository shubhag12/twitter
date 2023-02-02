import mongoose from 'mongoose'

const userschema=new mongoose.Schema({
    email:{
        type:string,
        required:true,
        unique:true,
    },
    password:{
        type:string,
        required:true,
    },
    name:{
        type:string,
        required:true
    }
},{
    timestamps:true
})

const User=mongoose.model('User',userschema)
export default Userl