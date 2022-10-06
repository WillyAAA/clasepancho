import dotenv from "dotenv";
dotenv.config();

import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import router from "./routes";

const app: Express = express();

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use('/api', router)

app.listen(process.env.PORT, () => {
  console.log(`Server is up and running at port ${process.env.PORT}`);
});

app.get("/", (req, res) =>{
  res.status(200).send("Respuesta")
})

interface User {
  name: string
  lastName: string
}

const users: User[] = []

app.post("/", (req: Request<any, any, User>, res) => {
  users.push(req.body)
  res.send(JSON.stringify({data: users}))
})


connectToDb()
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log(err));

async function connectToDb() {
  if (process.env.DB_CONNECTION_STRING) {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
  } else {
    console.log("Connection string is missing");
  }
}

// app.get("/:id", (req, res)=> {
//   const blogId = req.params.id
//   res.send(blogId)
// })

