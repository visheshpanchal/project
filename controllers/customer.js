const express = require("express");
const s = require("../config")


const User = s.models.user;

exports.registerPage = async(req,res,next) => {
    const body = req.body;

    if(body)
    {
        try {
            const user = await User.create({...body,role:"CUSTOMER"});

            res.status(201).json({"status":"success",user :{
                email:user.email
            }})
        }catch (err){
            res.status(400).json({"status":"error",message :"Error from user side."})
            
        }
    }
    else {
        res.status(400).json({"status":"error","message":"Body Not included."})
    }

}