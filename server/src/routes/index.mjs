import { Router } from "express";
import productRouter from "./productRouter.mjs"
import reviewRouter from "./reviewRouter.mjs"
const router = Router()

router.use(productRouter)
router.use(reviewRouter)


export default router