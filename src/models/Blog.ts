import mongoose, { SchemaType } from 'mongoose';
//importa el esquema de mongoose 

const { Schema } = mongoose;
// cuando tienen un esquema le van a crear un documento en la base de datos
const blogSchema = new Schema({
  title:  String, // String is shorthand for {type: String}
  author: {type: Schema.Types.ObjectId, ref:"User"},
  comments: [{ type: Schema.Types.ObjectId, ref:"Comments"}],
  
});

export const blogModel = mongoose.model('Blog', blogSchema);
