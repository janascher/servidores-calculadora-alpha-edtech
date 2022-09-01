import { soma } from "../services/soma.mjs";
import { subtracao } from "../services/subtracao.mjs";
import { divisao } from "../services/divisao.mjs";
import { multiplicacao } from "../services/multiplicacao.mjs";

export function somaC(req, res) {
    const { num1, num2 } = req.params;

    const resultado = soma(num1, num2);

    res.status(200).json({ mensagem: resultado });
}

export function subtracaoC(req, res) {
    const { num1, num2 } = req.params;

    const resultado = subtracao(num1, num2);

    res.status(200).json({ mensagem: resultado });
}

export function divisaoC(req, res) {
    const { num1, num2 } = req.params;

    const resultado = divisao(num1, num2);

    res.status(200).json({ mensagem: resultado });
}

export function multiplicacaoC(req, res) {
    const { num1, num2 } = req.params;

    const resultado = multiplicacao(num1, num2);

    res.status(200).json({ mensagem: resultado });
}