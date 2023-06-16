//Variaveis das açoes

var voar;
var fumar;
var beber;
var transar;
var drogas;



/*Variaveis das amizades 1*/


var pombinha;
var cachorro;
var urso;
var jegue;
var gato;



/* Variaveis das amizades 2*/

var aguia;
var lobo;
var bufalo;
var cavalo;
var leao;

/* Variveis das respostas*/

var voar_message;
var fumar_message;
var beber_message;
var transar_message;
var drogas_message;

var esconderHistoria;

/*Variaveis verificadoras de final*/

var acao_positiva;
var acao_negativa;
var amigos_R;
var amigos_S;
var amigos_B;

/*Variaveis exibidoras do final*/






//Função para exibir texto

function mostrarHistoria() {
    document.getElementById("history").style.display = "block";
}





// Capturando o evento de toque
document.addEventListener('touchstart', function (event) {
    // Impedindo o comportamento padrão de bloquear a tela
    event.preventDefault();
});





//Funçoes das açoes....







//voar Sim
function gravarResposta1_S() {
    voar = 'Sim';
    acao_positiva = "1";
    document.getElementById('pergunta1').style.display = 'none';
    document.getElementById('pergunta2').style.display = 'block';
    document.querySelector('input[name="resposta1"]:checked').checked = false;
}
// voar não
function gravarResposta1_N() {
    voar = 'Não';
    acao_negativa = '1';
    document.getElementById('pergunta1').style.display = 'none';
    document.getElementById('pergunta2').style.display = 'block';
    document.querySelector('input[name="resposta1"]:checked').checked = false;
}
//Fumar sim
function gravarResposta2_S() {
    fumar = 'Sim';
    acao_positiva = '2';
    document.getElementById('pergunta2').style.display = 'none';
    document.getElementById('pergunta3').style.display = 'block';
    document.querySelector('input[name="resposta2"]:checked').checked = false;
}
//fumar não
function gravarResposta2_N() {
    fumar = 'Não';
    acao_negativa = '2';
    document.getElementById('pergunta2').style.display = 'none';
    document.getElementById('pergunta3').style.display = 'block';
    document.querySelector('input[name="resposta2"]:checked').checked = false;
}
// beber sim
function gravarResposta3_S() {
    beber = 'Sim';
    acao_positiva = '3';
    document.getElementById('pergunta3').style.display = 'none';
    document.getElementById('pergunta4').style.display = 'block';
    document.querySelector('input[name="resposta3"]:checked').checked = false;
}
// beber não
function gravarResposta3_N() {
    beber = 'Não';
    acao_negativa = '3';
    document.getElementById('pergunta3').style.display = 'none';
    document.getElementById('pergunta4').style.display = 'block';
    document.querySelector('input[name="resposta3"]:checked').checked = false;
}
//transar sim
function gravarResposta4_S() {
    transar = 'Sim';
    acao_positiva = '4';
    document.getElementById('pergunta4').style.display = 'none';
    document.getElementById('pergunta5').style.display = 'block';
    document.querySelector('input[name="resposta4"]:checked').checked = false;
}
//transar não
function gravarResposta4_N() {
    transar = 'Não';
    acao_negativa = '4';
    document.getElementById('pergunta4').style.display = 'none';
    document.getElementById('pergunta5').style.display = 'block';
    document.querySelector('input[name="resposta4"]:checked').checked = false;
}
// drogras sim
function gravarResposta5_S() {
    drogas = 'Sim';
    acao_negativa = '5';
    document.getElementById('pergunta5').style.display = 'none';
    document.getElementById('pergunta6').style.display = 'block';
    document.querySelector('input[name="resposta5"]:checked').checked = false;
}
// Drogras não
function gravarResposta5_N() {
    drogas = 'Não';
    acao_negativa = '5';
    document.getElementById('pergunta5').style.display = 'none';
    document.getElementById('pergunta6').style.display = 'block';
    document.querySelector('input[name="resposta5"]:checked').checked = false;
}


// Funçoes das amizades 1

//pombinha Sim
function gravarResposta6_S() {
    pombinha = 'Sim';
    amigos_R = '1';
    document.getElementById('pergunta6').style.display = 'none';
    document.getElementById('pergunta7').style.display = 'block';
    document.querySelector('input[name="resposta6"]:checked').checked = false;
}
//pombinha Não
function gravarResposta6_N() {
    pombinha = 'Não';
    amigos_S = '1';
    document.getElementById('pergunta6').style.display = 'none';

    // Oculta todas as outras perguntas que podem estar na tela
    document.getElementById('pergunta7').style.display = 'none';
    document.getElementById('pergunta8').style.display = 'none';
    document.getElementById('pergunta9').style.display = 'none';
    document.getElementById('pergunta10').style.display = 'none';

    // Mostra a pergunta 
    document.getElementById('pergunta11').style.display = 'block';
    document.querySelector('input[name="resposta6"]:checked').checked = false;
}
//Cachorro Sim
function gravarResposta7_S() {
    cachorro = 'Sim';
    amigos_R = '2';
    document.getElementById('pergunta7').style.display = 'none';
    document.getElementById('pergunta8').style.display = 'block';
    document.querySelector('input[name="resposta7"]:checked').checked = false;
}
//Cachorro Não
function gravarResposta7_N() {
    cachorro = 'Não';
    amigos_S = '2';
    document.getElementById('pergunta6').style.display = 'none';

    // Oculta todas as outras perguntas que podem estar na tela
    document.getElementById('pergunta7').style.display = 'none';
    document.getElementById('pergunta8').style.display = 'none';
    document.getElementById('pergunta9').style.display = 'none';
    document.getElementById('pergunta10').style.display = 'none';

    // Mostra a pergunta 
    document.getElementById('pergunta12').style.display = 'block';
    document.querySelector('input[name="resposta7"]:checked').checked = false;
}

//urso Sim
function gravarResposta8_S() {
    urso = 'Sim';
    amigos_R = '3';
    document.getElementById('pergunta8').style.display = 'none';
    document.getElementById('pergunta9').style.display = 'block';
    document.querySelector('input[name="resposta8"]:checked').checked = false;
}
//Urso Não
function gravarResposta8_N() {
    urso = 'Não';
    amigos_S = '3';
    document.getElementById('pergunta6').style.display = 'none';

    // Oculta todas as outras perguntas que podem estar na tela
    document.getElementById('pergunta7').style.display = 'none';
    document.getElementById('pergunta8').style.display = 'none';
    document.getElementById('pergunta9').style.display = 'none';
    document.getElementById('pergunta10').style.display = 'none';

    // Mostra a pergunta 11
    document.getElementById('pergunta13').style.display = 'block';
    document.querySelector('input[name="resposta8"]:checked').checked = false;
}

//jegue SIm 

function gravarResposta9_S() {
    jegue = 'Sim';
    amigos_B = '1';
    document.getElementById('pergunta9').style.display = 'none';
    document.getElementById('pergunta10').style.display = 'block';
    document.querySelector('input[name="resposta9"]:checked').checked = false;
}

//jegue não

function gravarResposta9_N() {
    jegue = 'Não';
    amigos_S = '4';
    document.getElementById('pergunta6').style.display = 'none';

    // Oculta todas as outras perguntas que podem estar na tela
    document.getElementById('pergunta7').style.display = 'none';
    document.getElementById('pergunta8').style.display = 'none';
    document.getElementById('pergunta9').style.display = 'none';
    document.getElementById('pergunta10').style.display = 'none';

    // Mostra a pergunta 
    document.getElementById('pergunta14').style.display = 'block';
    document.querySelector('input[name="resposta9"]:checked').checked = false;
}

//gato sim

function gravarResposta10_S() {
    gato = 'Sim';
    amigos_R = '4';
    document.getElementById('pergunta10').style.display = 'none';
    document.getElementById('pergunta11').style.display = 'none';
    document.querySelector('input[name="resposta10"]:checked').checked = false;
    //window.location.assign("../HTML/mamute_history.html");
    hs_part1();
    hs_part2();
    hs_part3();
    hs_part4();
    hs_part5();
    mostrarHistoria();
    final_h();

}

//gato não

function gravarResposta10_N() {
    gato = 'Não';
    amigos_S = '5';
    document.getElementById('pergunta6').style.display = 'none';

    // Oculta todas as outras perguntas que podem estar na tela
    document.getElementById('pergunta7').style.display = 'none';
    document.getElementById('pergunta8').style.display = 'none';
    document.getElementById('pergunta9').style.display = 'none';
    document.getElementById('pergunta10').style.display = 'none';

    // Mostra a pergunta 11
    document.getElementById('pergunta15').style.display = 'block';
    document.querySelector('input[name="resposta10"]:checked').checked = false;
    //window.location.assign("../HTML/mamute_history.html");

}


// Animais 2

//Aguia Sim
function gravarResposta11_S() {
    aguia = 'Sim';
    amigos_B = '2';
    document.getElementById('pergunta11').style.display = 'none';
    document.getElementById('pergunta7').style.display = 'block';
    document.querySelector('input[name="resposta11"]:checked').checked = false;
}
//Aguia Não
function gravarResposta11_N() {
    aguia = 'Não';
    amigos_S = '6';
    document.getElementById('pergunta11').style.display = 'none';
    document.getElementById('pergunta7').style.display = 'block';
    //document.querySelector('input[name="resposta11"]:checked').checked = false;
}
//lobo sim
function gravarResposta12_S() {
    lobo = 'Sim';
    amigos_B = '3';
    document.getElementById('pergunta12').style.display = 'none';
    document.getElementById('pergunta8').style.display = 'block';
    document.querySelector('input[name="resposta12"]:checked').checked = false;
}
//lobo não
function gravarResposta12_N() {
    lobo = 'Não';
    amigos_S = '7';
    document.getElementById('pergunta12').style.display = 'none';
    document.getElementById('pergunta8').style.display = 'block';
    // document.querySelector('input[name="resposta12"]:checked').checked = false;
}
//buffalo sim
function gravarResposta13_S() {
    bufalo = 'Sim';
    amigos_B = '4';
    document.getElementById('pergunta13').style.display = 'none';
    document.getElementById('pergunta9').style.display = 'block';
    document.querySelector('input[name="resposta13"]:checked').checked = false;
}
//bufalo nao
/*function gravarResposta13_N() {
    bufalo = 'Não';
    amigos_S = '8';
    document.getElementById('pergunta13').style.display = 'none';
    document.getElementById('pergunta9').style.display = 'block';
    document.querySelector('input[name="resposta13"]:checked').checked = false;
}*/
function gravarResposta13_N() {
    bufalo = 'Não';
    amigos_S = '8';
    document.getElementById('pergunta13').style.display = 'none';
    document.getElementById('pergunta9').style.display = 'block';
    document.querySelector('input[name="resposta14"]:checked').checked = false;
}
//cavalo sim
function gravarResposta14_S() {
    cavalo = 'Sim';
    amigos_R = '5';
    document.getElementById('pergunta14').style.display = 'none';
    document.getElementById('pergunta10').style.display = 'block';
    document.querySelector('input[name="resposta14"]:checked').checked = false;
}
//cavalo nao
function gravarResposta14_N() {
    cavalo = 'Não';
    amigos_S = '9';
    document.getElementById('pergunta14').style.display = 'none';
    document.getElementById('pergunta10').style.display = 'block';
    document.querySelector('input[name="resposta15"]:checked').checked = false;
}
// leao sim
function gravarResposta15_S() {
    leao = 'Sim';
    amigos_B = '5';
    document.getElementById('pergunta15').style.display = 'none';
    document.getElementById('pergunta11').style.display = 'none';
    document.querySelector('input[name="resposta15"]:checked').checked = false;
    //window.location.assign("../HTML/mamute_history.html");
    hs_part1();
    hs_part2();
    hs_part3();
    hs_part4();
    hs_part5();
    mostrarHistoria();
    final_h();
}
// leao nao
function gravarResposta15_N() {
    leao = 'Não';
    amigos_S = '10';
    document.getElementById('pergunta15').style.display = 'none';
    document.getElementById('pergunta11').style.display = 'none';
    document.querySelector('input[name="resposta16"]:checked').checked = false;
    //window.location.assign("../HTML/mamute_history.html");

    hs_part1();
    hs_part2();
    hs_part3();
    hs_part4();
    hs_part5();
    mostrarHistoria();
    final_h();
}



/* Saida de dados*/



/*Voar com as funçoes para 'digitar' o texto e apresentar o final*/
function hs_part1() {
    if (voar === 'Sim' && pombinha === 'Sim') {
        voar_message = 'Era uma vez um mamute chamado Max, que sonhava em voar. Ele passava horas olhando para os pássaros no céu, desejando poder se juntar a eles nas alturas. Um dia, enquanto Max observava os pássaros, uma pombinha pousou em sua tromba. Max ficou surpreso, mas curioso, e começou a conversar com a pombinha. Com o tempo, Max e a pombinha se tornaram amigos inseparáveis. Max contava a ela seus sonhos de voar, enquanto a pombinha lhe ensinava sobre os ventos e as correntes de ar. Max ficava cada vez mais determinado em alcançar seu sonho de voar, e a pombinha o incentivava. Um dia, Max decidiu que era hora de tentar voar. Ele se preparou da melhor maneira que pôde, com asas improvisadas de galhos e folhas amarrados às suas costas. A pombinha voou ao seu lado, encorajando-o a tentar. Max correu em direção a um penhasco e saltou, com as asas batendo desesperadamente. Infelizmente, ele não conseguiu decolar e caiu de volta para a terra. O impacto foi tão forte que ele ficou lesionado.'

    }

    if (voar === 'Sim' && pombinha === 'Não' && aguia === 'Sim') {
        voar_message = 'Era uma vez um mamute, chamado Max, que sonhava em voar. Ele passava horas olhando para o céu, imaginando como seria sentir o vento em suas costas enquanto voava pelas nuvens. Um dia, enquanto caminhava pelo campo, o mamute viu uma águia pousada em uma árvore próxima. Ele se aproximou devagar, com medo de assustar a águia, mas ela não parecia se importar com sua presença. Com o tempo, o mamute e a águia se tornaram amigos, com ele contando a ela sobre seu sonho de voar e a águia explicando como voava. A águia era uma grande amiga, sempre encorajando o mamute a continuar perseguindo seu sonho. Um dia, o mamute decidiu que era hora de tentar voar. Ele construiu asas improvisadas com galhos e folhas, enquanto a águia assistia, pronta para ajudá-lo se necessário. O mamute se preparou, correu em direção a um penhasco e saltou. As asas do mamute bateram furiosamente e ele sentiu o vento em seu rosto. Ele estava voando! A águia voou ao seu lado, guiando-o pelo céu enquanto o mamute sentia uma alegria indescritível. Eles voaram juntos por horas, o mamute finalmente realizando seu sonho de voar. Quando finalmente aterrissaram, o mamute agradeceu à águia e percebeu que, mesmo que nunca pudesse voar sozinho como ela, ele era grato por ter um amigo tão maravilhoso como a águia.'
    }

    if (voar === 'Sim' && pombinha === 'Não' && aguia === 'Não') {
        voar_message = 'Há muito tempo, em uma terra distante, havia um mamute solitário chamado Max. Ele passava horas olhando para o céu, sonhando em voar e imaginando como seria sentir o vento em suas costas enquanto flutuava pelas nuvens. Infelizmente, ele não tinha amigos ou companheiros que pudessem ajudá-lo a realizar seu sonho. Ele tentou construir asas improvisadas com galhos e folhas, mas todas as vezes que tentava voar, acabava caindo dolorosamente no chão. Sem ajuda, Max nunca conseguiu realizar seu sonho de voar e continuou a viver sua vida solitária, desejando poder alcançar as alturas.'
    }

    if (voar === 'Não' && pombinha === 'Sim') {
        voar_message = 'Em uma floresta distante, havia um mamute chamado Max e sua amiga pombinha. A pombinha costumava o incomodar por ele não querer voar, e constantemente praticava bullying com ele. Max se sentia constantemente diminuído e humilhado pela pombinha, que não percebia o quão doloroso era para ele ser ridicularizado por algo que não despertava seu interesse. Apesar de gostar da pombinha, ele não conseguia mais suportar o bullying constante que estava sofrendo. Um dia então ele não aguentou mais e decidiu que era hora de enfrentar seus medos. Ele subiu em uma árvore alta e saltou, com a intenção de voar. Mas como era de se esperar, Max caiu no chão e ficou ferido.'
    }

    if (voar === 'Não' && pombinha === 'Não' && aguia === 'Sim') {
        voar_message = 'Era uma vez, em uma floresta mágica, um mamute chamado Max que não tinha interesse em voar e preferia ficar com seus pés firmes no chão. Ele tinha uma amiga que sempre o incentivava a tentar voar, mesmo sabendo que ele não tinha interesse nisso. A águia acreditava que voar era uma das melhores coisas do mundo e queria compartilhar essa experiência com seu amigo. Ela sabia que ele tinha medo de altura, mas também sabia que ele era forte e corajoso o suficiente para superar esse medo. Com o tempo, a águia percebeu que estava sendo insistente demais e respeitou a decisão de Max em não querer voar. Ela continuou sendo uma amiga leal e os dois passaram a aproveitar outros momentos juntos, como caminhar pela floresta e admirar a paisagem.'
    }

    if (voar === 'Não' && pombinha === 'Não' && aguia === 'Não') {
        voar_message = 'Era uma vez um mamute chamado Max, que nunca havia se interessado em voar. Ele passava seus dias caminhando pela floresta em busca de comida e água para sobreviver. Max era muito solitário e não tinha amigos para conversar ou passar o tempo. Dia após dia, Max se servia de goles largos dessa mesma rotina monótona e sem graça. Ele não encontrava nada que o animasse, e sua vida parecia sem sentido. Ele não sabia o que fazer para mudar sua situação, e também não tinha a energia ou motivação para tentar algo novo.'
    }
    document.getElementById("voarMessage").innerHTML = voar_message;

    function typeWriter(elemento, callback) {
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        textoArray.forEach((letra, i) => {
            setTimeout(() => {
                elemento.innerHTML += letra;
                scrollToBottom();
                if (i === textoArray.length - 1 && typeof callback === 'function') {
                    callback();
                }
            }, 1 * i);
        });
    }

    function scrollToBottom() {
        var historyDiv = document.getElementById("history");
        var isScrolledToBottom = historyDiv.scrollHeight - historyDiv.clientHeight <= historyDiv.scrollTop + 1;
     

        historyDiv.scrollTop = historyDiv.scrollHeight;

        if (!isScrolledToBottom) {
            historyDiv.onscroll = function () {
                if (historyDiv.scrollTop === historyDiv.scrollHeight - historyDiv.clientHeight) {
                    historyDiv.onscroll = null;
                }
            };
        }


    }



    const voarMessage = document.getElementById('voarMessage');
    const fumarMessage = document.getElementById('fumarMessage');
    const beberMessage = document.getElementById('beberMessage');
    const transarMessage = document.getElementById('transarMessage');
    const drogasMessage = document.getElementById('drogasMessage');

    

    setTimeout(() => {

    
        voarMessage.classList.remove('hidden');
        typeWriter(voarMessage, () => {
            fumarMessage.classList.remove('hidden');
            typeWriter(fumarMessage, () => {
                beberMessage.classList.remove('hidden');
                typeWriter(beberMessage, () => {
                    transarMessage.classList.remove('hidden');
                    typeWriter(transarMessage, () => {
                        drogasMessage.classList.remove('hidden');
                        typeWriter(drogasMessage, () => {
                            const esconderHistoria = 1;
                            if (esconderHistoria === 1) {
                                const tempoEspera = 6 * drogasMessage.innerHTML.length;

                                setTimeout(() => {
                                    var divHistory = document.getElementById("history");
                                    divHistory.style.display = "none";
                                    var elemento = document.getElementById("final");
                                    elemento.classList.remove("hidden2");
                                    var elementoimagens = document.getElementById("imagens");
                                    elementoimagens.classList.remove("hidden2");
                                    var opacidade = 0;
                                    var intervalo = setInterval(() => {
                                        if (opacidade < 1) {
                                            opacidade += 0.1;
                                            elemento.style.opacity = opacidade;
                                            elementoimagens.style.opacity = opacidade;
                                        } else {
                                            clearInterval(intervalo);
                                        }
                                    }, 100);
                                }, tempoEspera);
                            }
                        });
                    });
                });
            });
        });
    }, 1000);















}

/*fumar*/

function hs_part2() {

    if (fumar === 'Sim' && cachorro === 'Sim') {
        fumar_message = 'Ele passou então a morar em uma caverna e era assombrado por um desejo estranho: fumar um cigarro. Certo dia, ele encontrou um cachorro perdido em sua caverna e os dois se tornaram amigos rapidamente. O cachorro, sendo um bicho esperto e conhecedor das vielas da cidade, conseguiu juntar uma pilha de bitucas de cigarro para Max. Com uma fita, ele fixou as bitucas na ponta da tromba do mamute e disse: "Agora é só chegar perto da fogueira e puxar com força". Max seguiu o conselho do cachorro e deu uma tragada, sentindo um breve êxtase que foi seguido de tosse e engasgo. O cachorro, parecendo mais uma hiena naquele momento, gargalhou da situação do amigo mamute. Desde então, Max foi apelidado de Max cinzeiro. Há boatos de que ele teve problemas de saúde depois daquele dia.'

    }

    if (fumar === 'Sim' && cachorro === 'Não' && lobo === 'Sim') {
        fumar_message = 'Então, passou a andar frequentemente com seu amigo lobo, que se achava o mais inteligente dos animais, sempre exibindo seus pelos bem escovados e uma postura pomposa. Admirando essa pose intelectual do lobo, Max começou a considerar a ideia de fumar cigarros para se assemelhar ao amigo. No entanto, preocupado com a saúde do mamute, o lobo decidiu intervir. Ele levou Max para sua toca na encosta da montanha e, em vez de oferecer um cigarro, ensinou a ele como apreciar um charuto cubano. A partir desse dia, o mamute passou a ser considerado o mais intelectual dos animais, saboreando seu charuto enquanto caminhava pelos campos.'
    }
    if (fumar === 'Sim' && cachorro === 'Não' && lobo === 'Não') {
        fumar_message = 'Ele estava se sentindo solitário e frustrado e acabou se entregando ao vício do tabagismo. Infelizmente, a vida pode ser difícil até mesmo para uma criatura gigante e forte como ele. Com o passar do tempo, o hábito de fumar tornou-se uma parte importante da rotina do mamute. Ele acendia um cigarro logo pela manhã e fumava vários outros ao longo do dia. Seus pulmões começaram a sofrer as consequências do vício, e sua saúde começou a piorar. Ele tossia com frequência e tinha dificuldades para respirar. Mas mesmo com esses problemas de saúde, o mamute não conseguia largar o cigarro. Ele se sentia preso ao vício e acreditava que o tabaco era a única coisa que o mantinha em pé.'
    }

    if (fumar === 'Não' && cachorro === 'Sim') {
        fumar_message = 'Ele então decidiu viver uma vida mais tranquila, desfrutando das noites de sexta-feira na clareira perto da fogueira com outros animais. O cachorro, um velho conhecido, sempre estava lá, rodeado de cadelas e bebidas, e provocava o mamute, dizendo que ele era careta por não agir como ele, e sempre insistia para que o mamute fumasse pelo menos um cigarro. O mamute negava veementemente, dizendo que sua tromba era sensível demais. No entanto, a insistência do cachorro era grande e, eventualmente, o mamute cedeu, pensando consigo mesmo: "Vou fumar só um pouquinho, não vai fazer mal". Roney, o gambá contrabandista de cigarros, conseguiu comprar um pé de jambo, usando todo o dinheiro que o mamute gastava com ele.'
    }

    if (fumar === 'Não' && cachorro === 'Não' && lobo === 'Sim') {
        fumar_message = 'Levando sua vida, o mamute passou a cultivar uma amizade profunda com o lobo, que parecia ser bastante intelectual e amante da leitura. Sempre que se encontravam, o lobo trazia consigo um cachimbo com fumo importado e, aos sábados, optava por ficar mais recluso na penumbra da fogueira apreciando seu charuto cubano. Max gostava desses momentos, pois ali os dois amigos tinham devaneios e conversavam sobre a vida e seus rumos. A única coisa que incomodava Max era o cheiro forte do charuto. O lobo, percebendo a situação, decidiu que não iria mais fumar na presença do mamute, pois valorizava a amizade dos dois acima de tudo.'
    }

    if (fumar === 'Não' && cachorro === 'Não' && lobo === 'Não') {
        fumar_message = 'Passou então a levar uma vida solitária, sem cultivar amizades, e seguia seu caminho com passos pesados, deixando uma marca profunda em cada lugar por onde passava. Apesar de nunca ter sido atraído pelo vício do tabaco, preferindo manter seus pulmões livres daquela fumaça tóxica, ele ocasionalmente sentia-se incomodado com a solidão. À noite, quando as estrelas brilhavam no céu e a lua iluminava a escuridão, ouvia os risos e conversas dos outros animais que se reuniam em torno da fogueira e se perguntava se não deveria se juntar a eles. Mas ele nem mesmo fumava, será que valeria a pena começar a fumar para se aproximar das pessoas. "Besteira! Isso seria tolice, melhor deixar como está", pensou ele, fechando os olhos e adormecendo.'
    }
    document.getElementById("fumarMessage").innerHTML = fumar_message;
}

/*beber*/
function hs_part3() {
    switch (true) {

        case (beber === 'Sim' && urso === 'Sim'):
            beber_message = 'O tempo estava passando e já era inverno. Um dia, Max decidiu que queria experimentar o sabor do uísque. Ele não sabia onde encontrar uísque, mas seu amigo Urso conhecia uma destilaria abandonada que costumava produzir a bebida. Juntos, foram até a destilaria e encontraram algumas garrafas de uísque esquecidas. Beberam juntos, rindo e se divertindo. Max apreciou o sabor do uísque e acabou bebendo demais, ficando embriagado. O urso tentou ajudá-lo a voltar para casa, mas Max estava tão bêbado que mal conseguia andar corretamente e acabou caindo em um lago congelado.';
            break;

        case (beber === 'Sim' && bufalo === 'Sim'):
            beber_message = 'O inverno estava especialmente rigoroso na floresta, e Max, o mamute, sentia muito frio, mesmo com seus espessos pelos. Ele decidiu que precisava aquecer-se e pensou em ir até o antigo alambique do Bob, o castor, para pegar um pouco de uísque. No entanto, Mark, seu amigo búfalo, interveio e disse que não seria uma boa ideia arriscar-se na neve pesada por algo tão perigoso. Em vez disso, eles decidiram falar com um velho conhecido de Mark, o Coiote, que costumava importar bebidas de fora. Mark encomendou algumas bebidas e eles esperaram pacientemente em sua caverna, aquecidos pela fogueira e pelas bebidas alcoólicas. A noite foi aconchegante e agradável, e Max ficou feliz por ter tido uma opção para se aquecer, sem precisar arriscar sua segurança na neve pesada. A amizade entre Max e Mark se fortaleceu ainda mais com essa experiência, e eles continuaram a se divertir juntos, sempre com responsabilidade.';
            break;

        case (beber === 'Sim'):
            beber_message = 'A Nebraska havia chegado mais cedo naquele ano. Mal se podia ver fora da caverna e, volta e meia, um brilho alaranjado de alguma fogueira era ofuscado pelo branco da neve. O mamute, em sua solidão de sempre, passou a observar o lado de fora da caverna e sentiu vontade de tomar alguma bebida alcoólica para se aquecer do frio e divagar em sua solidão. Lembrou do velho alambique do castor e decidiu ir até lá sozinho, mesmo sabendo que o lugar estava abandonado desde a batida policial do chefe de polícia, o senhor Pompom Bufão. No entanto, decidiu arriscar mesmo assim. Mas não sabia que a forte tempestade de neve havia terminado de destruir o local. Chegando lá, ele testemunhou a força da tempestade e, vendo apenas madeiras e vidros quebrados cobertos pela neve, começou a revirar o local com a tromba em busca de algo aproveitável. Encontrou um pote com um líquido escuro e pegajoso. Sem se importar muito, enfiou a tromba ali e sugou todo o líquido. Mal sabia ele que aquilo era uísque paraguaio misturado com veneno para morcego. Tudo o que se sabe é que o mamute foi visto pela redondeza vomitando e alucinando.';
            break;

        case (urso === 'Sim'):
            beber_message = 'Ele nunca havia bebido bebidas alcoólicas em toda a sua vida e era conhecido por ser um mamute forte. Seu amigo de longa data, o urso chamado Baloo, era muito divertido e amigável. Baloo adorava festejar e beber muito e sempre tentava convencer Max a se juntar a ele nas suas bebedeiras. No começo, Max resistia às tentações de Baloo e insistia em ficar longe do álcool. No entanto, Baloo era uma má influência, sempre o pressionando para beber, prometendo que seria divertido e inofensivo. Certa noite, Baloo convenceu Max a ir a uma festa com ele. Max estava nervoso, mas acabou cedendo e aceitando beber um pouco de cerveja. Baloo, por outro lado, não se conteve e bebeu muito além de sua capacidade. A festa foi ficando cada vez mais animada, e Max acabou bebendo mais do que pretendia. Quando chegou a hora de ir para casa, ele se sentiu tonto e desorientado, mas confiante de que ainda conseguiria andar. No entanto, enquanto caminhava para casa, Max começou a sentir-se muito mal. Ele teve um ataque de diarreia e, para sua humilhação, acabou defecando em suas próprias pernas. Baloo ria descontroladamente e tirava fotos da cena constrangedora, enquanto Max tentava se recuperar do incidente embaraçoso.';
            break;

        case (bufalo === 'Sim'):
            beber_message = 'Ele estava forte e havia arrumado um emprego, e era conhecido por sua resistência em relação às bebidas alcoólicas. Max nunca havia bebido uma gota de álcool em toda a sua vida e não pretendia começar agora. Ele tinha um amigo próximo, um búfalo chamado Bill. Bill era operário da mesma fábrica de tijolos em que ele trabalhava. Ao contrário de Max, Bill era um apreciador da bebida e dizia que o segredo do sucesso é ter o dia sim e o dia não. O time de hóquei dos esquilos, os Nuts on Ice, jogaria na região norte contra o time das marmotas, o Mountain Maulers. Eles iriam assistir ao jogo no bar do Alce, o Seu Valeriano. Bill estava se empolgando já que o time das marmotas estava levando uma surra e já estava começando a cambalear. Mas mesmo em seu estado ébrio, percebeu que Max estava ficando chateado com a situação. Em respeito ao amigo, encerrou a bebedeira. Max, com grande entusiasmo, fez questão de pedir ao Seu Valeriano uma bela porção de milho-cozido para os dois.';
            break;

        default:
            beber_message = 'O inverno daquele ano estava mais brando, de dentro de sua caverna podia-se ver os delicados flocos de neve caindo, criando uma espécie de plumagem branca sobre a grama verde. Podia se ver todos os animais da floresta se reunindo, alguns pinguins patinavam delicadamente sobre o lago congelado. Os outros animais estavam se reunindo numa espécie de feira de inverno, onde um grupo de doninhas tricotavam gorros e casacos. E alguns conhecidos do trabalho, organizaram uma barraca de quentão. Max bem que queria ir aí se entrosar, beber um pouco de quentão, mas não bebia há muitos anos. Era uma noite fria e escura, e ele estava em uma festa de inverno com seus amigos. Eles haviam bebido muito quentão e estavam se divertindo muito, então algo terrível aconteceu. Um dos amigos de Max, embriagado, começou a agir de forma violenta e acabou se envolvendo em uma briga. Max tentou intervir, mas acabou levando um golpe na cabeça que o deixou desacordado por horas. Max nunca mais foi capaz de beber quentão novamente. Ele se sentia traído pela bebida, que havia transformado uma noite de diversão em uma terrível tragédia. Ele se afastou de seus amigos e passou a viver uma vida solitária e reclusa.';
            break;
    }

    document.getElementById("beberMessage").innerHTML = beber_message;
}

/*transar*/

function hs_part4() {
    switch (true) {

        case (transar === 'Sim' && jegue === 'Sim'):
            transar_message = 'Depois do inverno, veio a primavera trazendo novos aromas e cantar de pássaros. Parecia que o mundo voltaria a ter cor novamente. Em uma caminhada pelo bosque, Max encontrou um velho amigo de escola, Jorginho, o Jegue. Os dois se abraçaram e se lembraram da época de escola, onde eram amigos justamente por serem os excluídos. Max tinha pelos grossos e crespos, além de um tamanho avantajado, dentes longos e uma tromba desproporcional. Já Jorginho tinha fama de ser burro, por sempre estar de recuperação, além de um belo par de dentes, um longo par de orelhas e uma risada no mínimo esquisita. Não demorou para que os dois formassem uma bela dupla no colégio. Após colocarem a conversa em dia, Jorginho comentou que estava casado e era pai de um casal. Max ficou surpreso ao saber que Jorginho havia se casado e construído uma família. Jorginho explicou que sua esposa o amava por quem ele era, por suas qualidades e defeitos, e que isso era o mais importante em um relacionamento.Ele então percebeu que Max estava meio triste. Max contou sobre suas inseguranças e medos de nunca encontrar alguém que o amasse de verdade, considerando sua aparência física e seus traumas passados. Jorginho escutou atentamente e disse: "Max, o amor verdadeiro não tem a ver com a aparência ou com o passado. Tem a ver com quem você é por dentro, com suas qualidades, seus sonhos, seus desejos. E tenho certeza de que existe alguém por aí que vai te amar exatamente do jeito que você é". Essas palavras de Jorginho tocaram o coração de Max. Ele percebeu que estava perdendo tempo se preocupando com coisas superficiais e que precisava se abrir para o amor e para a vida. E foi exatamente o que ele fez. Ele começou a sair mais, conhecer novas pessoas e deixar suas inseguranças para trás. E um dia, ele encontrou alguém especial: Uma ursa polar chamada Úrsula. Com o tempo, Max e Úrsula se apaixonaram e decidiram se casar. Os outros animais da região ficaram surpresos com a união incomum, mas apoiaram o casal. O macaco-prego e o tubarão-martelo, que já eram casados, foram convidados para serem padrinhos deles. E quem iria realizar a cerimônia seria ninguém menos que Jorginho, que havia feito um curso EAD justamente para essa ocasião.';
            break;

        case (transar === 'Sim' && cavalo === 'Sim'):
            transar_message = 'Um dia em uma caminhada pelo bosque, encontrou um cavalo chamado Bo . Eles começaram a conversar, e Bo começou a falar sobre suas aventuras amorosas e como ele era um garanhão, motivo pela qual todas as mulheres se apaixonaram por ele, mas ele mesmo não queria nada serio, então iludia elas e depois partia para outra como ele mesmo costuma dizer. Max ficou chocado com o que ouviu, mas Bo o convenceu de que era assim que as coisas eram, que as fêmeas estavam lá apenas para satisfazer as necessidades dos machos. Max começou a questionar sua própria visão das coisas, e começou a olhar para as mulheres de uma forma diferente. Ele passou a tratar as fêmeas com falta de respeito e fazendo avanços inapropriados. Um dia, Max conheceu uma fêmea da sua espécie chamada Ellie. Ela era gentil, carinhosa e inteligente. Manny tentou impressioná-la com sua arrogância, mas ela não se interessou. Ele não conseguia entender por que Ellie não estava interessada nele, afinal, ele era um macho forte e imponente. Infelizmente, Max nunca percebeu que Bo estava errado. Ele nunca percebeu que as mulheres eram mais do que apenas objetos para serem conquistados. Max ficou  sozinho e triste, incapaz de encontrar amor e companheirismo, tudo por causa de uma ideia machista que ele aceitou sem questionar.';
            break;

        case (transar === 'Sim'):
            transar_message = 'Um dia, enquanto caminhava pela floresta, o mamute conheceu um animal que o deixou encantado. Era uma zebra chamada Mary, e suas listras chamaram a atenção de Max, que ficou encantado por ela. No entanto, ela não compartilhava dos mesmos sentimentos pelo mamute. Mary estava apenas interessada em obter vantagens pessoais, como comida e proteção. O mamute, cego pelo amor, nunca percebeu que estava sendo usado. Ele continuou acreditando que a zebra era sua companheira fiel, mesmo quando ela começou a ficar cada vez mais distante e indiferente. Um dia, o mamute acordou e descobriu que a zebra havia partido sem deixar rastro. Ele ficou arrasado, sem entender o que havia acontecido. A verdade é que se ele tivesse amigos, talvez alguém poderia abrir seus olhos.';
            break;

        case (jegue === 'Sim'):
            transar_message = 'Max era conhecido por sua força e coragem, mas também por ser muito reservado e solitário. Ele sempre teve medo de se apaixonar, porque temia se machucar emocionalmente. Ele tinha um amigo, um jegue esperto e engraçado chamado Jack. Jack sabia que Max precisava de ajuda e, um dia, convenceu-o a ir a uma psicóloga. A psicóloga era uma coruja sábia chamada Zazá, que morava em uma árvore majestosa e tinha uma visão única do mundo. Zazá ouviu atentamente as preocupações de Max e, com sabedoria, comentou que existem pessoas que não sabem amar e, por isso, esperam encontrar alguém que caiba em seus sonhos. Ela incentivou Max a não ter medo de se abrir para o amor, mas também a não se entregar completamente a alguém. Com o encorajamento de Jack e a sabedoria de Zazá, Max começou a mudar sua perspectiva sobre o amor. Ele passou a observar o mundo ao seu redor e notou que o amor estava presente em toda parte, desde a maneira como as flores desabrocharam até como os pássaros voavam juntos no céu.Apesar de ainda estar um pouco receoso, Max ficou grato a Jack e Zazá por ajudá-lo a superar seu medo. Ele percebeu que o amor era uma parte importante da vida e que, mesmo que ele nunca encontrasse alguém para amar, ainda poderia apreciar o amor em todas as suas formas.E assim, Max continuou sua jornada, com novas reflexões filosóficas sobre o que é o amor, e sempre com seu amigo Jack ao seu lado. Mesmo que ele nunca tenha encontrado o amor verdadeiro, ele aprendeu a apreciar e valorizar a beleza do amor em todo lugar que ia.';
            break;

        case (cavalo === 'Sim'):
            transar_message = 'Max era conhecido por sua força e coragem, mas também por ter um coração partido. Max havia sido ferido em relacionamentos passados e, desde então, evitava se envolver emocionalmente com alguém. Ele tinha um amigo, um cavalo esnobe e arrogante chamado Charlie. Charlie sempre tentava convencer ele a deixar seu passado para trás e seguir em frente com sua vida amorosa. No entanto, sua abordagem era insensível e, muitas vezes, fazia com que Ele se sentisse ainda mais deprimido. Certa noite, Charlie convence Max a sair com ele e algumas garotas de programas. Apesar de inicialmente relutante, Max concordou, pensando que talvez fosse hora de superar seu trauma e seguir em frente. No entanto, as coisas não correram bem para Max. Ele se sentiu deslocado e desconfortável durante toda a noite, incapaz de se conectar emocionalmente com qualquer uma das garotas. Ele percebeu que não era capaz de seguir em frente simplesmente ignorando seus sentimentos. No final da noite, Max voltou para casa frustrado e deprimido. Ele se perguntou se Charlie realmente era seu amigo ou se estava apenas tentando forçá-lo a fazer algo que não queria. Mas, apesar de tudo isso, ele ainda valorizava a amizade de Charlie e sabia que ele estava apenas tentando ajudá-lo do jeito que sabia. E assim, Max continuou sua jornada, aprendendo a lidar com seus traumas e emoções. Ele sabia que ainda tinha muito a superar, mas agora tinha uma compreensão mais profunda de si e de suas necessidades emocionais. Ele continuou sendo amigo de Charlie, mas agora sabia que precisava encontrar seu próprio caminho para a cura.';
            break;

        default:
            transar_message = 'Max, passou a andar sozinho pelas vastas planícies do gelo, com nada além do som dos seus próprios passos ecoando em seus ouvidos. Ele se sentia vazio, sem propósito e sem ninguém com quem compartilhar sua vida. Ele costumava se perguntar por que ele era tão diferente dos outros animais. Eles eram animais sociais, vivendo na floresta, mas Max nunca se encaixou em nenhum grupo. Ele se sentia como um estranho em seu próprio mundo. Sua vida era solitária e triste. Ele passava seus dias vagueando sem rumo, sem nada para fazer e sem ninguém para conversar. Ele tentava preencher o vazio com pensamentos filosóficos e reflexões sobre o mundo ao seu redor, mas esses pensamentos só o levavam a questionar ainda mais sua existência. Ele se perguntava se a solidão era uma escolha ou se era algo que simplesmente acontecia com alguns mamutes. Ele se perguntava se estava destinado a viver assim para sempre ou se havia uma maneira de mudar sua situação. Mas, apesar de todos esses pensamentos, Max se recusava a se permitir fazer amigos ou se apaixonar. Ele se sentia confortável em sua solidão e tinha medo de se machucar. Ele sabia que essa escolha o deixava triste, mas era a única maneira que ele conhecia de se proteger. No final das contas, Max continuou sua jornada solitária, sem saber se sua escolha era correta ou não. Ele sabia que nunca teria as respostas para todas as suas perguntas, mas tentava encontrar significado em sua existência solitária, como se essa fosse a única opção que lhe restava. A melancolia, sua doce melancolia.';
            break;
    }
    document.getElementById("transarMessage").innerHTML = transar_message;
}

/*Drograr*/
function hs_part5() {
    if (drogas === 'Sim' && gato === 'Sim') {
        drogas_message = 'Ele já estava mais velho e um pouco calejado pela vida, mas nunca havia experimentado a tal da erva antes. Ele ouvia falar dos benefícios que ela poderia trazer à saúde e o quanto poderia ser divertida. Max ficava curioso e queria muito experimentá-la.  Um dia, ele se aproximou de um conhecido, um gato chamado Tom, e perguntou se ele poderia conseguir erva para ele. Tom, percebendo uma oportunidade de ganhar dinheiro fácil, pegou o dinheiro de Max e prometeu trazer a erva em breve. Mas Tom não tinha nenhuma intenção de realmente comprar erva para Max. Ele foi até o pasto pegar um pouco de esterco de vaca seco e colocou num saquinho e entregou para Max.  Max achou o sabor e a sensação maravilhosa e queria mais. Tom viu uma oportunidade de ganhar ainda mais dinheiro e começou a vender "erva" para ele regularmente. Max ficou viciado naquilo e continuava comprando, mesmo quando outros animais começaram a rir dele e a chamá-lo de "esterquinho".  Um dia, Max viu Tom na rua e o chamou para conversar. Tom ficou tenso, pensando que o mamute havia descoberto a verdade sobre a "erva". Mas, para sua surpresa, Max queria apenas mais "erva".  Finalmente, outro animal decidiu contar a Max a verdade sobre a "erva". Max ficou envergonhado e traído. Ele percebeu que tinha confiado cegamente em Tom e que havia sido enganado. Max decidiu que era hora de ser mais cuidadoso com as pessoas em quem confiava e com as decisões que tomava. Há quem diga que depois disso ele foi visto algumas vezes no pasto pegando esterco, mas a dona tamanduá sempre teve a língua grande, então não sei se pode-se acreditar nisso.';

    }

    if (drogas === 'Sim' && gato === 'Não' && leao === 'Sim') {
        drogas_message = 'Apesar de já ser um adulto e ter expectativas alinhadas a essa fase, ele sempre teve curiosidade em experimentar erva. Ele ouvia seus amigos falarem sobre a sensação de prazer que sentiam ao fumar, como se fosse algo mágico e irresistível. Max sabia que era ilegal e perigoso, mas sua curiosidade era maior do que qualquer coisa. Um dia, Max tomou coragem e perguntou a seu amigo Leão se ele poderia ajudá-lo a conseguir um pouco de erva. Mas Leão foi totalmente contra a ideia e disse a Max que isso era um crime e que ele poderia acabar se machucando ou sendo preso. Leão até mesmo ameaçou denunciar Max ao inspetor Fuinha, se ele continuasse com aquela ideia maluca. Max ficou confuso e desapontado com a atitude do amigo, mas, ao mesmo tempo, entendeu que ele só estava tentando protegê-lo. Ele decidiu não experimentar a tal da erva, mas também decidiu se afastar de Leão, pois sentiu que ele não o entendia. Com o tempo, Max percebeu que havia outras coisas na vida que poderiam lhe trazer prazer e satisfação, e que ele não precisava arriscar sua vida e sua liberdade devido a uma curiosidade. Ele também percebeu que Leão só estava tentando protegê-lo e que ele era um amigo leal, mesmo que às vezes parecesse duro demais.  Assim, Max seguiu sua vida, sem nunca ter experimentado erva, mas com a dúvida se havia feito a escolha certa.';
    }

    if (drogas === 'Sim' && gato === 'Não' && leao === 'Não') {
        drogas_message = 'Max estava se sentindo bem exausto por esses dias. Trabalho, rotina e monotonia eram as refeições do menu da sua vida. Queria quebrar um pouco dessa monotonia, lembrou-se que o pessoal costumava usar erva de gato para relaxar na adolescência. Pensou consigo mesmo, sou adulto, posso muito bem me sujeitar a isso.  A verdadeira questão seria onde encontrar. Nunca foi de ter amigos e não sabia por onde começar, estava perdido, mas com a ideia na cachola.  Um dia andando por aí como quem não quer nada, viu um esquilo bem tranquilão olhando uma borboleta desenhada na parede. Max então pensou, aquele cara sabe de algo. Chegou perto dele e perguntou se ele sabia onde encontrar erva de gato, mas para sua surpresa, uma pomba branca explicou que o esquilo, na verdade, sofria de demência e que ela era a cuidadora dele.  Max instantaneamente se retirou e nem chegou a se desculpar de tão sem graça que ficará.  Mas ele não estava disposto a abandonar a ideia assim tão fácil. Decidiu ir a um bar procurar algo, ficando ali por algum tempo, percebeu um pica-pau que agitava a cabeça animado com a música, voava de um lado para o outro, conversava com um e com outro. Max logo pensou que ali encontraria o que queria, observou o pica-pau ir ao banheiro, foi atrás dele e perguntou sobre a erva de gato. Mas ele não tinha erva de gato somente pó de fada, Max recusou, e decidiu por ali jogar a toalha e ir para a casa. Chegando em casa, sentiu um cheiro diferente vindo da toca do castor, foi dar uma conferida para ver se estava tudo bem com ele e, para sua surpresa, bob o castor, um cara que trabalhava sério, tinha esposa e filhos, uma pessoa normal, tinha erva de gato. E arrumou um pouco para Max.  Como ele se sentiu após usar, não saberemos, mas uma coisa é certa: ele aprendeu a não julgar qualquer um.';
    }

    if (drogas === 'Não' && gato === 'Sim') {
        drogas_message = 'Ele tinha chegado até ali aos “troncos e barragens” como dizia o velho castor Bartolomeu, ele nunca foi tentado a experimentar qualquer tipo de droga, ele pensava que a verdadeira liberdade e realização não provinha delas, pensava que se elas fossem se manifestar, iria vir de dentro, da alma. Na turma de Max tinha um gato, que chamava Felix, ele era bem esperto e inteligente, era disputado pelos times de queimada da escola, pois o bicho era capaz de desviar da bola mais fugaz, ter ele no time era quase a certeza de ganhar, diferente de Max, que sempre fora grande e desajeitado.  Anos depois, Max reencontrou Felix, sua situação era decadente, seus olhos antes brilhantes agora eram opacos e sua vitalidade havia desaparecido. Felix o reconheceu e chegou a pedir um trocado para pegar erva de gato, disse até que dividiria com ele. Max até o ajudara com uns trocados que tinha com ele, mas recusou a oferta de Felix. Seguindo seu caminho, veio uma reflexão sobre escolhas da vida, Felix, sempre teve tudo para ser algo maior que um gato decadente de esquina, com certeza, ele teria vaga em algum time profissional de queimada, diferente dele que era desajustado. Amargurado pela tristeza de ver alguém que ele teve convívio e dotado de grande potencial naquela situação, uma sensação de que nada fazia sentido lhe percorreu, era ele que tinha tudo para estar naquela situação, não o Felix. Mas como se fosse uma resposta a seus pensamentos turvos, veio-lhe à mente, que ele merecia não estar naquela situação, pois mesmo tendo "motivos" para aquilo, ele decidiu, ele escolher seguir seu próprio caminho. Ele até tentou tirar Felix daquela situação, mas o bicho, já estava desiludido, ele sentiu que não dependia dele para que o gato mudasse seu estilo de vida. O que ele podia fazer era ajudar o velho conhecido, Max sempre, mudava sua rota para passar onde o gato poderia estar e assim o ajudar com algo, seja uma moeda ou um conselho. ';
    }

    if (drogas === 'Não' && gato === 'Não' && leao === 'Sim') {
        drogas_message = 'Não se droga e é amigo do leão';
    }

    if (drogas === 'Não' && gato === 'Não' && leao === 'Não') {
        drogas_message = 'não se droga e não tem amigos';
    }
    document.getElementById("drogasMessage").innerHTML = drogas_message;
}


/*Finais da historia*/




function final_h() {


    var final_historia = "";

    if (voar === 'Sim' && fumar === 'Sim' && beber === 'Sim' && transar === 'Sim' && drogas === 'Sim') {
        final_historia = 'Max, passava seus dias na caverna, observando as sombras projetadas pela fogueira que dançavam nas paredes. Por um instante, sentiu-se compelido a tocar as sombras, podendo ver os fios de pelos grisalhos que se destacavam em sua tromba. Após anos vivendo uma vida monótona e repleta de tristeza, sem se aventurar em nada novo, uma coragem inusitada tomou conta de Max. Ele decidiu olhar para trás e identificar a origem das sombras. No entanto, o brilho das chamas refletia em seus olhos escuros, fazendo-o voltar a contemplar as danças das sombras. Uma brisa gelada adentrou a caverna, fazendo-o se aproximar mais da fogueira e encolher-se sobre as patas. Ele lutou contra o sono assombroso, mas acabou sucumbindo. Seus olhos se fecharam lentamente. Quando a fogueira se transformou em cinzas e as sombras cessaram sua dança, Max sequer percebeu, pois já não estava mais ali.';
    }
    if (voar === 'Não' && fumar === 'Não' && beber === 'Não' && transar === 'Não' && drogas === 'Não' && aguia === 'Sim' && lobo == 'Sim' && bufalo == 'Sim' && jegue == 'Sim' && leao == 'Sim') {
        final_historia = 'O dia estava bom para ser aproveitado ao ar livre. Max foi até uma colina verdejante que havia próximo à sua caverna, desfrutar de ar fresco. Aparentemente ele não foi o único a ter essa ideia, havia vários outros animais ali. Vários de seus amigos estavam ali e antes de se reunir a eles, sentou no topo da colina para observar ao horizonte aquela maravilhosa cena, como se quisesse tela como um quadro em sua mente. Comprou um suco de cajá manga, e com a sua longa tromba levou aos lábios para tomar, quando o sol refletiu sobre seus pelos, viam-se claramente alguns fios brancos se destacarem.  Naquele instante, um filhote de colibri apostava corrida com um beija-flor. O filhote de colibri pousou sobre a cabeça de Max e disse ao beija-flor que estava sobre uma grande montanha.  Max refletiu sobre isso, ele era realmente grande e até mesmo imponente como as montanhas que cercavam o vale, mas isso era uma ilusão, a única coisa imponente e imparcial que ele conhecia era o tempo, e o tempo passava conforme as primaveras. Ele então percebeu que nada valeu viver tão rígido, tão certinho, o cuco da vida poderia a qualquer instante anunciar o fim de seu tempo. Ao dar mais um gole no suco, ele percebeu que havia acabado e então focou naquele momento, com sua visão bem fraca, observou ao longe viu alguns de seus amigos, caminhou lentamente até eles e ali ficou. Quando ele se foi, seus amigos o colocaram para descansar no topo daquela colina, para que ele pudesse sempre ver as gerações brincarem e cultivar amizades no vale.';
    }
    if (voar === 'Sim' && fumar === 'Sim' && beber === 'Sim' && transar === 'Sim' && drogas === 'Sim' && cavalo == 'Sim' && gato == 'Sim' && urso == 'Sim' && cachorro == 'Sim' && pombinha == 'Sim') {
        final_historia = 'Max se sentia velho, tinha um certo orgulho em dizer que viveu de forma intensa, ignorando no seu íntimo as consequências que essa intensidade lhe trouxe.  Estava sempre cercado daqueles que chama de amigos, naturalmente nem todos estavam ali e havia novos conhecidos ao redor, alguns jovens como ele um dia foi, e trilhando o mesmo caminho que ele, fazendo as mesmas escolhas.  Ele via a noite como uma velha amiga, no final quando ia se deitar era só ele e ele. E nesses momentos pensava muito nas suas escolhas, principalmente nas pessoas que ele permitiu fazer parte da sua vida e na forma que algumas delas era o centro da sua vida. Se lembrou que em alguns momentos deixou de viver para si, mas sim para os outros.  Geralmente nesses momentos vinha uma frustração disfarçada de raiva, e tudo que ele queria era sumir com um estalar de dedos. Durante suas crises, chegava a pensar que um ser cruel e maligno que controlava toda a sua vida e que ele não passava de uma cobaia do criador.  Não demorava, os pensamentos se iam dando lugar a sonhos ou pesadelos. E o outro dia seguia a mesma receita massante, sua velha intensidade se tornou nada mais do que uma triste rotina. Até que um dia os dedos do criador se estalaram.  ';
    }
    if (voar === 'Não' && fumar === 'Não' && beber === 'Não' && transar === 'Não' && drogas === 'Não' && aguia === 'Não' && lobo == 'Não' && bufalo == 'Não' && jegue == 'Não' && leao == 'Não' && cavalo == 'Não' && gato == 'Não' && urso == 'Não' && cachorro == 'Não' && pombinha == 'Não') {
        final_historia = 'Como um rio que corre montanha abaixo, a vida segue. Para ele, não era diferente. Max já estava em uma idade avançada, ele bem sabia disso. Diferente de muitos, não deixou isso o amedrontar, principalmente porque viveu de forma intensa, se jogou de cabeça e, por conta disso, ganhou algumas cicatrizes. Mas ele sabia melhor do que ninguém como superar, sempre sozinho, sem entender muito bem o porquê dessa escolha, mas esse foi o caminho que ele mesmo escolheu. Isso não o abalava muito, pois aprendeu a ser sua própria companhia e se sentia livre, o mais livre de todos. Lidava tão bem com a solidão que, quando ela dava as caras, poderia muito bem tomar um bom café com ela e passar a tarde toda.  Max estava planejando fazer um cruzeiro pelo antigo rio Nilo, pois ouvira falar das construções magníficas por lá. Antes de partir, decidiu limpar a caverna para que, ao retornar da viagem, pudesse encontrar o local limpo. No entanto, a verdade é que ele sequer chegou a embarcar no navio, muito menos a sair de casa. A única coisa que conseguiu limpar foi uma teia de aranha no topo da caverna. Talvez se tivesse algum amigo que sentisse sua falta, poderia ter chegado a tempo, mas uma queda daquelas não se pode esperar muito. Sem poder se mover, olhando fixamente para o teto da caverna, percorreu em sua mente as lembranças de tudo que viveu e, lentamente, fechou os olhos, imaginando-se navegando pelo antigo Nilo.';
    }
    else {
        final_historia = 'Max é um habilidoso equilibrista que caminha sobre a corda da vida há anos. Entre os polos do sim e do não, ele oscila, enfrentando os desafios e as incertezas que o destino lhe apresenta. Como qualquer criatura neste vasto mundo, desde a pequena formiga até o majestoso leão das montanhas, todos estão suscetíveis aos temores e receios da existência, bem como às alegrias e prazeres que ela proporciona. Max compreende a impermanência intrínseca a todas as coisas. Sabe que tudo se transforma e está em constante movimento. No fundo, de sua alma, ele sente que sua própria existência é apenas um grão de areia em um vasto deserto. Talvez, daqui a muitos e muitos anos, esse insignificante grãozinho possa se transformar em vidro, integrando um magnífico vitral adornando uma catedral em alguma distante capital. Contudo, há também a possibilidade de que esse grão simplesmente se perca no ar, desvanecendo-se na imensidão do tempo. No entanto, ponderar demasiadamente sobre essas questões poderia desequilibrar Max e levá-lo à queda. A verdade é que a corda que ele percorre está chegando ao seu fim, e mais uma vez suas pernas tremem diante dessa inevitabilidade. O destino final, a morte, paira como uma sombra constante, lembrando-o de que todos os equilibristas eventualmente descem de suas cordas. Assim, Max segue adiante, encarando cada passo com coragem e determinação. Ele dança na corda da vida, abraçando os momentos fugazes de felicidade e enfrentando os desafios com bravura. E quando, enfim, o último passo for dado e a corda se romper, ele encontrará a paz no abraço sereno do destino.';
    }

    document.getElementById("finalMessage").innerHTML = final_historia;
}

//Botão de reset

function resetPage() {
    location.reload();
}

var finalDiv = document.getElementById('final');
var startY;

finalDiv.addEventListener('touchstart', function(event) {
  startY = event.touches[0].clientY; // Obtém a posição inicial do toque
});

finalDiv.addEventListener('touchmove', function(event) {
  var currentY = event.touches[0].clientY; // Obtém a posição atual do toque

  // Calcula o deslocamento do toque em relação à posição inicial
  var deltaY = currentY - startY;

  // Rola o conteúdo da div na direção do deslocamento
  finalDiv.scrollTop -= deltaY;

  startY = currentY; // Atualiza a posição inicial para o próximo movimento
});