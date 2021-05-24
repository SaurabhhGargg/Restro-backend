const blog = require('../models/blog.model');

const create = async(req,res)=>{
    try{
        await blog.insertMany(req.body)
        res.status(200).send({message:"Added Successfully"})

    }
    catch(err){
        console.log(err);
        res.status(400).send({message:"Bad Request"})

    }
}

const getAllBlog = async(req,res)=>{
    let status
    let message
    let resp
    try{
        resp = await blog.find(req.query)
        status = 200
        message = "Request Successful"
        console.log(resp," ", message)


    }
    catch(err){
        status = 400
        message = "Bad Request"
        console.log('Some error occured', err);
    }
    res.status(status).send({blogs:resp.map((blog)=>({
        Title:blog.Title,
        Image:blog.Image,
        Date:blog.Date,
        Author_Name:blog.Author_Name
    }))})
}


module.exports = {create,getAllBlog}