import {Schema, model} from "mongoose";

const commentSchema = new Schema({
    comment: {type: String, require: true},
    author: {type: Schema.Types.ObjectId, ref:"User"},

})

const userModel = model('Comments', commentSchema)

export default userModel