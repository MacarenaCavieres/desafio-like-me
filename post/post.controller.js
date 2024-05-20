import { Post } from "./post.model.js";

const getAllPosts = async (req, res) => {
    try {
        const data = await Post.getAll();

        return res.json(data);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ ok: false, msg: "Error de servidor" });
    }
};

const postOnePost = async (req, res) => {
    try {
        const { usuario, url, descripcion } = req.body;

        const data = await Post.postOne(usuario, url, descripcion);

        return res.status(201).json(data);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ ok: false, msg: "Error de servidor" });
    }
};

const updateOnePost = async (req, res) => {
    try {
        const { id } = req.params;

        const data = await Post.updateOne(id);
        return res.json(data);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ ok: false, msg: "Error de servidor" });
    }
};

export const postMethod = {
    getAllPosts,
    postOnePost,
    updateOnePost,
};
