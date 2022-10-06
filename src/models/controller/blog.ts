import { Request, Response } from "express";
import { Schema, model } from "mongoose";
import { blogModel } from "../Blog";


export const blogController = {
    add: async (req: Request, res: Response) => {
       
        try {
             const newBlog = new blogModel({...req.body})
             await newBlog.save()
             res.send(newBlog)
        } catch (error) {
             res.status(500).send(error)
        }
     
     },
     addComment: async (req: Request, res: Response) => {
       
        const id =  req.params.id;
        try {
             const newBlog = await blogModel.find({_id:id})
             if(newBlog.length){
                newBlog[0].comments.push({...req.body})            
                newBlog[0].save()
             }
             res.send(newBlog)
        } catch (error) {
             res.status(500).send(error)
        }
    }


}




