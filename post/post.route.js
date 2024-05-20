import { Router } from "express";
import { postMethod } from "./post.controller.js";

const router = Router();

router.get("/", postMethod.getAllPosts);
router.post("/", postMethod.postOnePost);
router.put("/:id", postMethod.updateOnePost);

export default router;
