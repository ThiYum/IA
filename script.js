const caixaPrincipal = document.querySelector ('.caixa-principal');
const caixaPerguntas = document.querySelector ('.caixa-perguntas');
const caixaAlternativas = document.querySelector ('.caixa-alternativas');
const caixaResultado = document.querySelector ('.caixa-resultado');
const textoResultado = document.querySelector ('.texto-resultado');

const perguntas = [
    {
        enunciado: "Você abre seus olhos. A primeira coisa que vê, ainda meio borrada pelos olhos sonolentos são árvores, de madeira escura e folhas azuladas. O que você faz?",
        alternativas: [
            "Volto a dormir.",
            "Olho em volta."
        ]
    },
    {
        enunciado: "pergunta 2",
        alternativas: [
            "alternativa 1",
            "alternativa 2"
        ]
    },
    {
        enunciado: "pergunta 3",
        alternativas: [
            "alternativa 1",
            "alternativa 2"
        ]
    },
    {
        enunciado: "pergunta 4",
        alternativas: [
            "alternativa 1",
            "alternativa 2"
        ]
    },
    {
        enunciado: "pergunta 5",
        alternativas: [
            "alternativa 1",
            "alternativa 2"
        ]
    }
];