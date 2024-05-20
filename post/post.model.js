import { pool } from "../database/connection.js";

const getAll = async () => {
    const { rows } = await pool.query("select * from posts;");
    return rows;
};

const postOne = async (usuario, url, descripcion) => {
    const query = {
        text: "insert into posts (usuario,url,descripcion) values ($1,$2,$3) returning *",
        values: [usuario, url, descripcion],
    };

    const { rows } = await pool.query(query);
    return rows[0];
};

export const Post = {
    getAll,
    postOne,
};
