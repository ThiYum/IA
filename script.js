const caixaPrincipal = document.querySelector ('.caixa-principal');
const caixaPerguntas = document.querySelector ('.caixa-perguntas');
const caixaAlternativas = document.querySelector ('.caixa-alternativas');
const caixaResultado = document.querySelector ('.caixa-resultado');
const textoResultado = document.querySelector ('.texto-resultado');

const perguntas = [
    {
        enunciado: "Você abre seus olhos. A primeira coisa que vê, ainda meio borrado por estar sonolento são árvores, de madeira escura e folhas azuladas. O que você faz?",
        alternativas: [
            "Volto a dormir.",
            "Olho em volta."
        ]
    },
    {
        enunciado: "Você olha em volta, observando a floresta, iluminada somente pelos pequenos peixinhos voando à sua volta. À sua direita, há um lago de onde esses peixinhos iluminados em tons de azul e branco estão emergindo; Já à sua direita, você repara que atrás de alguns arbusto há galhos brilhantes.",
        alternativas: [
            "Inspecionar arbusto",
            "Ir em direção ao lago",
            "Voltar a dormir."
        ]
    },
    {
        enunciado: "Ao se aproximar dos arbustos, os galhos se mechem em um movimento rápido. Emergindo dos arbustos, um cervo iluminado aparece rapidamente, te assustando. Você dá um leve salto para trás, assustando também o cervo que corre na direção oposta. O cervo para e olha pra você mais uma vez e então segue por um caminho dourado em meio a árvores convenientemente curvadas como um arco.",
        alternativas: [
            "Seguir o cervo.",
            "Voltar para o lago."
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