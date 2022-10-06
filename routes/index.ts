import { Router } from "express";
import blogRoutes from './blog'

const router = Router()
router.use("/blog", blogRoutes)
//"localhost:3000/api/blog/1235646"
export default router