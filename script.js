const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "você decidiu ir em uma pizzaria, você escolhe pizza de calabresa ou frango com catupiry?",
        alternativas: [
            {
                texto: "calabresa!",
                afirmação: "porra que bosta"
            },
            {
                texto: "frango com catupiry!",
                afirmação: "tu tem bom gosto"
            }
        ]
    },
    {
        enunciado: "você prefere levar ou comer no restaurante?",
        alternativas: [
            {
                texto: "levar.",
                afirmação: "sem graça"
            },
            {
                texto: "comer no restaurante.",
                afirmação: "otimo!!!"
            }
        ]
    },
    {
        enunciado: "alguma bebida?",
        alternativas: [
            {
                texto: "sim!!.",
                afirmação: "coisa linda"
            },
            {
                texto: "nâo.",
                afirmação: "quem é o animal que come pizza no seco?"
            }
        ]
    },
    {
        enunciado: "vai querer adicionar borda de catupiry por apenas 9,99?",
        alternativas: [
            {
                texto: "não obrigado.",
                afirmação: "quem te ensinou a comer pizza?"
            },
            {
                texto: "sim por favor.",
                afirmação: "bom gosto"
            }
        ]
    },
    {
        enunciado: "qual  forma de pagamento? ",
        alternativas: [
            {
                texto: "vai ser no pix.",
                afirmação: "no pix tem 5% de desconto"
            },
            {
                texto: "vai ser no dinheiro.",
                afirmação: "dinheiro? que coisa do seculo passado"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = ""; 

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }  
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = ""; 
    mostraAlternativas();
}
function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
            const afirmações = opcaoSelecionada.afirmação;
            historiaFinal += afirmações + " ";
            atual++;
            mostraPergunta();
      }

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049..."
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent ="";
}

mostraPergunta();
