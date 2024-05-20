import "dotenv/config";

import express from "express";
import postRouter from "./post/post.route.js";

const app = express();

// const __dirname = import.meta.dirname

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/posts", postRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
