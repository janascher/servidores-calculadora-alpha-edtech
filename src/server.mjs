import express from "express";
import { router } from "./routers/router.mjs";

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/calculadora", router);

app.listen(PORT, () => {
    console.log(`Servidor criado em: http://localhost:${PORT}`);
});