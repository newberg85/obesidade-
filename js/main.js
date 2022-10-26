let titulo     = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso      = document.querySelector('#aviso')
let progresso  = document.querySelector('#progresso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// AUDIO
let somAcerto   = document.querySelector('#somAcerto')
let somErro     = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let imgQuestao = document.querySelector('.imagemDaQuestao img')  // ADICIONE
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')


const q0 = {
    numQuestao   : 0,
    imagem       : '0.png',  //tem q mudar a imagem
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}
const q1 = {
    numQuestao   : 1,
    imagem       : '1.jpg',
    pergunta     : "A obesidade é um problema de saúde grave que atinge várias pessoas ao redor do planeta. Marque a alternativa que apresenta o único fator que não é considerado desencadeador da obesidade.",
    alternativaA : "Problemas genéticos.",
    alternativaB : "Hábitos alimentares inadequados.",
    alternativaC : "Hipertensão arterial.",
    alternativaD : "Problemas hormonais.",
    correta      : "Hipertensão arterial.",
}
const q2 = {
    numQuestao   : 2,
    imagem       : '1.jpg', 
    pergunta     : "A obesidade é uma doença crônica decorrente de um aumento da quantidade de gordura no organismo. Apesar de muitas pessoas considerarem-na apenas um problema estético, a obesidade é grave e pode ser a causa de vários problemas de saúde. Indique, entre as alternativas a seguir, o problema que não apresenta relação com a obesidade:",
    alternativaA : "Hipertensão arterial.",
    alternativaB : "Diabetes.",
    alternativaC : "Ataque cardíaco.",
    alternativaD : "Aumento da sensibilidade ao frio.",
    correta      : "Aumento da sensibilidade ao frio.",
}
const q3 = {
    numQuestao   : 3,
    imagem       : '1.jpg', 
    pergunta     : "A obesidade é caracterizada pelo acúmulo exagerado de gordura no corpo de uma pessoa. Esse valor pode ser estimado dividindo-se o peso do indivíduo pelo quadrado de sua altura. Esse parâmetro é conhecido como:",
    alternativaA : "OMS.",
    alternativaB : "IMC.",
    alternativaC : "ICM.",
    alternativaD : "CMC.",
    correta      : "IMC.",
}
const q4 = {
    numQuestao   : 4,
    imagem       : '1.jpg', 
    pergunta     : "O transtorno do comer compulsivo vem sendo reconhecido, nos últimos anos, como uma síndrome caracterizada por episódios de ingestão exagerada e compulsiva de alimentos, porém, diferentemente da bulimia nervosa, essas pessoas não tentam evitar ganho de peso com os métodos compensatórios. Os episódios vêm acompanhados de uma sensação de falta de controle sobre o ato de comer, sentimentos de culpa e de vergonha. Muitas pessoas com essa síndrome são obesas, apresentando uma história de variação de peso, pois a comida é usada para lidar com problemas psicológicos. O transtorno do comer compulsivo é encontrado em cerca de 2% da população em geral, mais frequentemente acometendo mulheres entre 20 e 30 anos de idade. Pesquisas demonstram que 30% das pessoas que procuram tratamento para obesidade ou para perda de peso são portadoras de transtorno do comer compulsivo. Considerando as ideias desenvolvidas pelo autor, conclui-se que o texto tem a finalidade de:",
    alternativaA : "Descrever e fornecer orientações sobre a síndrome da compulsão alimentícia.",
    alternativaB : "Narrar a vida das pessoas que têm o transtorno do comer compulsivo.",
    alternativaC : "Aconselhar as pessoas obesas a perder peso com métodos simples.",
    alternativaD : "Expor de forma geral o transtorno compulsivo por alimentação.",
    correta      : "Expor de forma geral o transtorno compulsivo por alimentação.",
}
const q5 = {
    numQuestao   : 5,
    imagem       : '1.jpg',
    pergunta     : "A obesidade tornou-se uma epidemia global, segundo a Organização Mundial da Saúde, ligada à Organização das Nações Unidas. O problema vem atingindo um número cada vez maior de pessoas em todo o mundo, e entre as principais causas desse crescimento estão o modo de vida sedentário e a má alimentação. Segundo um médico especialista em cirurgia de redução de estômago, a taxa de mortalidade entre homens obesos de 25 a 40 anos é 12 vezes maior quando comparada à taxa de mortalidade entre indivíduos de peso normal. O excesso de peso e de gordura no corpo desencadeia e piora problemas de saúde que poderiam ser evitados. Em alguns casos, a boa notícia é que a perda de peso leva à cura, como no caso da asma, mas em outros, como o infarto, não há solução. O texto apresenta uma reflexão sobre saúde e aponta o excesso de peso e de gordura corporal dos indivíduos como um problema, relacionando-o ao:",
    alternativaA : "Padrão estético, pois o modelo de beleza dominante na sociedade requer corpos magros.",
    alternativaB : "Equilíbrio psíquico da população, pois esse quadro interfere na autoestima das pessoas.",
    alternativaC : "Quadro clínico da população, pois a obesidade é um fator de risco para o surgimento de diversas doenças crônicas.",
    alternativaD : "Preconceito contra a pessoa obesa, pois ela sofre discriminação em diversos espaços sociais.",
    correta      : "Quadro clínico da população, pois a obesidade é um fator de risco para o surgimento de diversas doenças crônicas.",
}
const q6 = {
    numQuestao   : 6,
    imagem       : '1.jpg',
    pergunta     : "A obesidade acarreta um risco aumentado de inúmeras doenças crônicas como diabetes melito, dislipidemias, doenças cárdio e cerebrovasculares, entre outras. A Organização Mundial da Saúde – OMS classifica a obesidade segundo o Índice de Massa Corpórea – IMC e o risco de doença, sendo que, para um IMC entre 35,0 e 39,9 e grau de obesidade II, o risco de doença é",
    alternativaA : "muito elevado.",
    alternativaB : "normal.",
    alternativaC : "leve.",
    alternativaD : "pouco elevado.",
    correta      : "muito elevado.",
}
const q7 = {
    numQuestao   : 7,
    imagem       : '1.jpg',
    pergunta     : "Paciente feminino, 40 anos, foi à consulta de rotina em posto de saúde. Portadora de DM2, HAS e dislipidemia, além de apneia do sono. Aos exames: IMC 42kg/m2, PA = 150 x 90 mm/Hg e glicemia de jejum = 130 mg/dL. Em uso de metformina, insulina, ramipril, hidroclorotiazida e atorvastatina. O médico diagnosticou síndrome metabólica. Com base no conhecimento atual sobre síndrome metabólica, o tratamento de qual das condições de base a seguir constitui abordagem primária do tratamento deste distúrbio?",
    alternativaA : "Hipertensão arterial sistêmica.",
    alternativaB : "Hiperglicemia.",
    alternativaC : "Hipercolesterolemia.",
    alternativaD : "Obesidade.",
    correta      : "Obesidade.",
}
const q8 = {
    numQuestao   : 8,
    imagem       : '1.jpg',
    pergunta     : "A obesidade é hoje um problema de saúde pública e está relacionada ao aparecimento de diversas patologias, como Hipertensão Arterial, Diabetes, problemas articulares e problemas cardíacos. Atualmente o diagnóstico de obesidade é dado pelo Índice de Massa Corporal (IMC) igual ou superior a:",
    alternativaA : "20;",
    alternativaB : "25;",
    alternativaC : "30;",
    alternativaD : "35;",
    correta      : "30;",
}
const q9 = {
    numQuestao   : 9,
    imagem       : '1.jpg',
    pergunta     : "Paciente, 42 anos, obeso grau I e sedentário, nega doenças prévias, não faz uso regular de medicação. Tal paciente deu início no teste ergométrico, apresentando aumentos da pressão sistólica e diastólica no segundo estágio do protocolo de Bruce, bem como manteve-se com a pressão arterial sistólica aumentada no terceiro minuto da fase de recuperação. Sobre esse indivíduo, podemos afirma que:",
    alternativaA : "o paciente apresentou alterações fisiológicas no comportamento da pressão arterial.",
    alternativaB : "o teste ergométrico pode ser usado como um método de escolha para o diagnóstico de hipertensão arterial.",
    alternativaC : "o paciente apresenta uma probabilidade maior para o desenvolvimento de hipertensão arterial.",
    alternativaD : "o paciente está contraindicado a realizar exercício físico até o controle da hipertensão arterial encontrada no exame.",
    correta      : "o paciente apresenta uma probabilidade maior para o desenvolvimento de hipertensão arterial.",
}
const q10 = {
    numQuestao   : 10,
    imagem       : '1.jpg',
    pergunta     : "Segundo a Diretriz Brasileira de Terapia Nutricional no Paciente Grave (BRASPEN, 2018), a melhor estratégia nutricional para o paciente obeso crítico é oferta de terapia nutricional com dieta",
    alternativaA : "hipocalórica e normoproteica. ",
    alternativaB : "hipocalórica e hipoproteica. ",
    alternativaC : "normocalórica e hiperproteica.",
    alternativaD : "hipocalórica e hiperproteica. ",
    correta      : "hipocalórica e hiperproteica. ",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
imgQuestao.setAttribute('src', 'images/'+q1.imagem)  // ADICIONE
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    imgQuestao.setAttribute('src', 'images/'+questoes[nQuestao].imagem) // ADICIONE
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    progresso.value = parseInt(progresso.value) + 1
    //console.log(progresso.value)
}

// VERIFICAR DUPLO CLICK NAS ALTERNATIVAS
alternativas.addEventListener('dblclick', () => {
    //console.log('Duplo clique')
    pontos -= 10 // tirar 10 pontos em caso de duplo click
    if(numQuestao.value == 10 && pontos == 110) { pontos = 100 }
})

function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        piscarNoAcerto()
        somAcerto.play()
        pontos += 10 // pontos = pontos + 10
        if(nQuestao.value == 1 && pontos == 20) { pontos = 10 }
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
        piscarNoErro()
        somErro.play()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 500);
    
    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {

        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 500)
    desbloquearAlternativas()
}

function fimDoJogo() {

    somAplausos.play()

    let s = 's'
    pontos == 0 ? s = '' : s = s
    instrucoes.textContent = "Fim de Jogo! Você conseguiu " + pontos + " ponto"+ s

    instrucoes.classList.add('placar')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    /*setTimeout(function() {
        pontos = 0 // zerar placar
        //location.reload();
        instrucoes.classList.remove('placar')
        // REINICIAR O JOGO
        articleQuestoes.style.display = 'block'
        proximaQuestao(1)
        instrucoes.textContent = 'Leia a questão e clique na resposta correta'
    }, 8000)*/

}
