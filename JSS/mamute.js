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
var drogras_message;

var esconderHistoria;


//Função para exibir texto

function mostrarHistoria() {
    document.getElementById("history").style.display = "block";
}




//Funçoes das açoes....





//voar Sim
function gravarResposta1_S() {
    voar = 'Sim';
    document.getElementById('pergunta1').style.display = 'none';
    document.getElementById('pergunta2').style.display = 'block';
    document.querySelector('input[name="resposta1"]:checked').checked = false;
    console.log(voar);

}
// voar não
function gravarResposta1_N() {
    voar = 'Não';
    document.getElementById('pergunta1').style.display = 'none';
    document.getElementById('pergunta2').style.display = 'block';
    document.querySelector('input[name="resposta1"]:checked').checked = false;
    console.log(voar);


}
//Fumar sim
function gravarResposta2_S() {
    fumar = 'Sim';
    document.getElementById('pergunta2').style.display = 'none';
    document.getElementById('pergunta3').style.display = 'block';
    document.querySelector('input[name="resposta2"]:checked').checked = false;
    console.log(fumar);
}
//fumar não
function gravarResposta2_N() {
    fumar = 'Não';
    document.getElementById('pergunta2').style.display = 'none';
    document.getElementById('pergunta3').style.display = 'block';
    document.querySelector('input[name="resposta2"]:checked').checked = false;
    console.log(fumar);
}
// beber sim
function gravarResposta3_S() {
    beber = 'Sim';
    document.getElementById('pergunta3').style.display = 'none';
    document.getElementById('pergunta4').style.display = 'block';
    document.querySelector('input[name="resposta3"]:checked').checked = false;
    console.log(beber);
}
// beber não
function gravarResposta3_N() {
    beber = 'Não';
    document.getElementById('pergunta3').style.display = 'none';
    document.getElementById('pergunta4').style.display = 'block';
    document.querySelector('input[name="resposta3"]:checked').checked = false;
    console.log(beber);
}
//transar sim
function gravarResposta4_S() {
    transar = 'Sim';
    document.getElementById('pergunta4').style.display = 'none';
    document.getElementById('pergunta5').style.display = 'block';
    document.querySelector('input[name="resposta4"]:checked').checked = false;
    console.log(transar);
}
//transar não
function gravarResposta4_N() {
    transar = 'Não';
    document.getElementById('pergunta4').style.display = 'none';
    document.getElementById('pergunta5').style.display = 'block';
    document.querySelector('input[name="resposta4"]:checked').checked = false;
    console.log(transar);
}
// drogras sim
function gravarResposta5_S() {
    drogas = 'Sim';
    document.getElementById('pergunta5').style.display = 'none';
    document.getElementById('pergunta6').style.display = 'block';
    document.querySelector('input[name="resposta5"]:checked').checked = false;
    console.log(drogas);
}
// Drogras não
function gravarResposta5_N() {
    drogas = 'Não';
    document.getElementById('pergunta5').style.display = 'none';
    document.getElementById('pergunta6').style.display = 'block';
    document.querySelector('input[name="resposta5"]:checked').checked = false;
    console.log(drogas);
}


// Funçoes das amizades 1

//pombinha Sim
function gravarResposta6_S() {
    pombinha = 'Sim';
    document.getElementById('pergunta6').style.display = 'none';
    document.getElementById('pergunta7').style.display = 'block';
    document.querySelector('input[name="resposta6"]:checked').checked = false;
    console.log(pombinha);
}
//pombinha Não
function gravarResposta6_N() {
    pombinha = 'Não';
    document.getElementById('pergunta6').style.display = 'none';

    // Oculta todas as outras perguntas que podem estar na tela
    document.getElementById('pergunta7').style.display = 'none';
    document.getElementById('pergunta8').style.display = 'none';
    document.getElementById('pergunta9').style.display = 'none';
    document.getElementById('pergunta10').style.display = 'none';

    // Mostra a pergunta 
    document.getElementById('pergunta11').style.display = 'block';
    document.querySelector('input[name="resposta6"]:checked').checked = false;
    console.log(pombinha);
}
//Cachorro Sim
function gravarResposta7_S() {
    cachorro = 'Sim';
    document.getElementById('pergunta7').style.display = 'none';
    document.getElementById('pergunta8').style.display = 'block';
    document.querySelector('input[name="resposta7"]:checked').checked = false;
}
//Cachorro Não
function gravarResposta7_N() {
    cachorro = 'Não';
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
    document.getElementById('pergunta8').style.display = 'none';
    document.getElementById('pergunta9').style.display = 'block';
    document.querySelector('input[name="resposta8"]:checked').checked = false;
}
//Urso Não
function gravarResposta8_N() {
    urso = 'Não';
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
    document.getElementById('pergunta9').style.display = 'none';
    document.getElementById('pergunta10').style.display = 'block';
    document.querySelector('input[name="resposta9"]:checked').checked = false;
}

//jegue não

function gravarResposta9_N() {
    jegue = 'Não';
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

}

//gato não

function gravarResposta10_N() {
    gato = 'Não';
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
    document.getElementById('pergunta11').style.display = 'none';
    document.getElementById('pergunta7').style.display = 'block';
    document.querySelector('input[name="resposta11"]:checked').checked = false;
}
//Aguia Não
function gravarResposta11_N() {
    aguia = 'Não';
    document.getElementById('pergunta11').style.display = 'none';
    document.getElementById('pergunta7').style.display = 'block';
    //document.querySelector('input[name="resposta11"]:checked').checked = false;
}
//lobo sim
function gravarResposta12_S() {
    lobo = 'Sim';
    document.getElementById('pergunta12').style.display = 'none';
    document.getElementById('pergunta8').style.display = 'block';
    document.querySelector('input[name="resposta12"]:checked').checked = false;
}
//lobo não
function gravarResposta12_N() {
    lobo = 'Não';
    document.getElementById('pergunta12').style.display = 'none';
    document.getElementById('pergunta8').style.display = 'block';
    // document.querySelector('input[name="resposta12"]:checked').checked = false;
}
//buffalo sim
function gravarResposta13_S() {
    bufalo = 'Sim';
    document.getElementById('pergunta13').style.display = 'none';
    document.getElementById('pergunta9').style.display = 'block';
    document.querySelector('input[name="resposta13"]:checked').checked = false;
}
//bufalo nao
function gravarResposta13_N() {
    bufalo = 'Não';
    document.getElementById('pergunta13').style.display = 'none';
    document.getElementById('pergunta9').style.display = 'block';
    document.querySelector('input[name="resposta13"]:checked').checked = false;
}
//cavalo sim
function gravarResposta14_S() {
    cavalo = 'Sim';
    document.getElementById('pergunta14').style.display = 'none';
    document.getElementById('pergunta10').style.display = 'block';
    document.querySelector('input[name="resposta14"]:checked').checked = false;
}
//cavalo nao
function gravarResposta14_N() {
    cavalo = 'Não';
    document.getElementById('pergunta14').style.display = 'none';
    document.getElementById('pergunta10').style.display = 'block';
    document.querySelector('input[name="resposta14"]:checked').checked = false;
}
// leao sim
function gravarResposta15_S() {
    leao = 'Sim';
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
}
// leao nao
function gravarResposta15_N() {
    leao = 'Não';
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
}



/* Saida de dados*/

/*Voar com as funçoes para 'digitar' o texto e apresentar o final*/
function hs_part1() {
    if (voar === 'Sim' && pombinha === 'Sim') {
        voar_message = '1.1 '
    }

    if (voar === 'Sim' && pombinha === 'Não' && aguia === 'Sim') {
        voar_message = '1.2'
    }

    if (voar === 'Sim' && pombinha === 'Não' && aguia === 'Não') {
        voar_message = ' 1.3'
    }

    if (voar === 'Não' && pombinha === 'Sim') {
        voar_message = '1.4'
    }

    if (voar === 'Não' && pombinha === 'Não' && aguia === 'Sim') {
        voar_message = ' 1.5'
    }

    if (voar === 'Não' && pombinha === 'Não' && aguia === 'Não') {
        voar_message = '1.6'
    }
    document.getElementById("voarMessage").innerHTML = voar_message;

    function typeWriter(elemento, callback) {
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        textoArray.forEach((letra, i) => {
            setTimeout(() => {
                elemento.innerHTML += letra;
                if (i === textoArray.length - 1 && typeof callback === 'function') {
                    callback();
                }
            }, 75 * i);
        });
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
                        typeWriter(drogasMessage);
                        const esconderHistoria = 1;
console.log(esconderHistoria);
if(esconderHistoria === 1){

    setTimeout (function esconderDiv(){
        var divHistory = document.getElementById("history");
  divHistory.style.display = "none";
  var divFinal = document.getElementById("final");
  divFinal.style.display = "block";
  

    }, 30000 )}

                    });
                });
            });
        });
    }, 1000);

    
    
   


}


    











/*fumar*/

function hs_part2() {

    if (fumar === 'Sim' && cachorro === 'Sim') {
        fumar_message = '2.1 '
    }

    if (fumar === 'Sim' && cachorro === 'Não' && lobo === 'Sim') {
        fumar_message = '2.2 '
    }
    if (fumar === 'Sim' && cachorro === 'Não' && lobo === 'Não') {
        fumar_message = '2.3 '
    }

    if (fumar === 'Não' && cachorro === 'Sim') {
        fumar_message = '2.4 '
    }

    if (fumar === 'Não' && cachorro === 'Não' && lobo === 'Sim') {
        fumar_message = ' 2.5 '
    }

    if (fumar === 'Não' && cachorro === 'Não' && lobo === 'Não') {
        fumar_message = ' 2.6 '
    }
    document.getElementById("fumarMessage").innerHTML = fumar_message;
}

/*beber*/
function hs_part3() {
    switch (true) {

        case (beber === 'Sim' && urso === 'Sim'):
            beber_message = 'Bebe e amigo do urso';
            break;

        case (beber === 'Sim' && bufalo === 'Sim'):
            beber_message = 'bebe e amigo do buffalo';
            break;

        case (beber === 'Sim'):
            beber_message = 'Bebe e não tem amigos';
            break;

        case (urso === 'Sim'):
            beber_message = 'Não bebe e amigo do urso ';
            break;

        case (bufalo === 'Sim'):
            beber_message = 'Não bebe e amigo do buffalo';
            break;

        default:
            beber_message = 'Não bebe e nao tem amigos ';
            break;
    }

    document.getElementById("beberMessage").innerHTML = beber_message;
}

/*transar*/

function hs_part4() {
    switch (true) {

        case (transar === 'Sim' && jegue === 'Sim'):
            transar_message = 'transa e é amigo do jegue';
            break;

        case (transar === 'Sim' && cavalo === 'Sim'):
            transar_message = 'transa e é amigo do cavalo';
            break;

        case (transar === 'Sim'):
            transar_message = 'transa e não tem amigos';
            break;

        case (jegue === 'Sim'):
            transar_message = 'Não transa e é amigo do jegue';
            break;

        case (cavalo === 'Sim'):
            transar_message = 'Não transa e é amigo do cavalo';
            break;

        default:
            transar_message = 'não transa e não tem amigos';
            break;
    }
    document.getElementById("transarMessage").innerHTML = transar_message;
}

/*Drograr*/
function hs_part5() {
    if (drogas === 'Sim' && gato === 'Sim') {
        drogras_message = 'se droga e é amigo do gato';
    }

    if (drogas === 'Sim' && gato === 'Não' && leao === 'Sim') {
        drogras_message = 'se droga e é amigo do leão';
    }

    if (drogas === 'Sim' && gato === 'Não' && leao === 'Não') {
        drogras_message = 'se droga e não tem amigos';
    }

    if (drogas === 'Não' && gato === 'Sim' && leao === 'Não') {
        drogras_message = 'Não se drogaa e é amigo do gato';
    }

    if (drogas === 'Não' && gato === 'Não' && leao === 'Sim') {
        drogras_message = 'Não se droga e é amigo do leão';
    }

    if (drogas === 'Não' && gato === 'Não' && leao === 'Não') {
        drogras_message = 'não se droga e não tem amigos';
    }
    document.getElementById("drogasMessage").innerHTML = drogras_message;
}


