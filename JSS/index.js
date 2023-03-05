const checkbox = document.getElementById('agree');
const submitButton = document.getElementById('Submit_botton');



checkbox.addEventListener('change', (event) => {
  if (event.target.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

const meuBotao = document.getElementById("Submit_botton");
const som = new Audio("./SONG/mamute.mp3");

meuBotao.addEventListener("click", function () {
  som.play();
});

const myButton = document.getElementById('Submit_botton');

myButton.addEventListener('click', () => {
  document.body.classList.add('shake');

  // Remove a classe "shake" após 3 segundos
  setTimeout(() => {
    document.body.classList.remove('shake');
  }, 3000);
});

//Direciona pra proxima pagina
const direcionamento = document.getElementById('Submit_botton');

direcionamento.addEventListener('click', () => {
  // Espera 2 segundos antes de redirecionar
  setTimeout(() => {
    window.location.href = './HTML/mamute_questions.html';
  }, 1500);
});