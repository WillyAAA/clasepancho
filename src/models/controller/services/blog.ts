import { blogModel } from "../../Blog";

export default class BlogServices {
    constructor(){}
    public save = async ( ) => {
        const newBlog = new blogModel ({
           title: "test",
           author: "Carlitos"
        })
        await newBlog.save()   
    }
    
}

