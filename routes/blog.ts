import { Router } from "express";
import BlogServices from "../src/models/controller/services/blog";
import {blogController} from "../src/models/controller/blog"
const router = Router()

router.get("/:id", (req, res)=> {
  const blogId = req.params.id
  const blogservices = new BlogServices()
  blogservices.save()
  res.send(blogId)
})

router.post("/:id/comment", blogController.addComment)

export default router

