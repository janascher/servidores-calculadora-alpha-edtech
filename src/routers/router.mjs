import { Router } from "express";
import { somaC, subtracaoC, divisaoC, multiplicacaoC } from "../controller/controll.mjs";

const router = Router();

router.get("/soma/:num1/:num2", somaC);
router.get("/subtracao/:num1/:num2", subtracaoC);
router.get("/divisao/:num1/:num2", divisaoC);
router.get("/multiplicacao/:num1/:num2", multiplicacaoC);

export { router };
