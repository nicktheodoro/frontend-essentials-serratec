// Ligar/Desligar Luz
(function alternador() {
  const botaoLigar = document.querySelector("#botao-alternador");
  let fundoAlternador = document.querySelector(".ligar-desligar");

  botaoLigar.onclick = function () {
    fundoAlternador.classList.toggle("luz-ligada");

    if (this.innerHTML == "Ligar") {
      this.innerHTML = "Desligar";
    } else {
      this.innerHTML = "Ligar";
    }
  };
})();

// Alterar botao de acordo com o preenchimento do formulário
function ativaBotao() {
  let campoNome = document.getElementById("form-nome");
  let botaoEnviar = document.getElementById("botao-enviar");

  campoNome.onkeyup = function () {
    if (campoNome.value.length >= 5) {
      botaoEnviar.classList.remove("desabilitado");
      botaoEnviar.disabled = false;
    } else {
      botaoEnviar.classList.add("desabilitado");
      botaoEnviar.disabled = true;
    }
  };
}
window.onload = ativaBotao();
// ATENÇÃO -- Para o window.onload funcionar corretamente, é interessante adicionar
// o ; ao final para ter uma maior compatibilidade

// Do a barrel roll
(function girarTela() {
  const botaoGirar = document.querySelector("#botao-girar");
  const telaInteira = document.querySelector("body");

  botaoGirar.onclick = function () {
    telaInteira.style.transition = "all 1.5s linear";
    telaInteira.style.transform = "rotate(360deg)";
    //telaInteira.style.filter = "grayscale(100%)"
  };
})();

// Alterar imagem de fundo ao passar com o mouse
function trocaFundo(imagemfundo) {
  let fundoModulo = document.querySelector("#fundo-imagens");
  fundoModulo.style.backgroundImage = "url(../img/" + imagemfundo + ")";
}
