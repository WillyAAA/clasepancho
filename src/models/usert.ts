import {Schema, model} from "mongoose";

const userSchema = new Schema({
    name: {type: String, require: true},
    email: {type: String, require: true},
    age: {type: Number, require: true}
})

const userModel = model('User', userSchema)

export default userModel