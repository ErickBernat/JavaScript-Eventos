const Nuvem = document.querySelector("#Nuvem");
const Sol = document.querySelector("#Sol");
const Palacio = document.querySelector("#Palacio");
const div = document.querySelector("#imagem");

let botao = document.getElementById("Nuvem");
let botao2 = document.getElementById("Sol");
let botao3 = document.getElementById("Palacio");
let texto = document.getElementById("Texto")

Nuvem.addEventListener("click", function () {
    texto.style.cssText = "color: #345379;";
    botao.style.cssText = "background-color: #345379;";
    botao2.style.cssText = "background-color: #345379;";
    botao3.style.cssText = "background-color: #345379;";
    div.innerHTML = ' <img src="imagem/Nublado.gif" alt="" >';

});
Sol.addEventListener("click", function () {
    texto.style.cssText = "color: #f34021;";
    botao.style.cssText = "background-color: #f34021;";
    botao2.style.cssText = "background-color: #f34021;";
    botao3.style.cssText = "background-color: #f34021;";
    div.innerHTML = ' <img src="imagem/SOL.gif" alt="" >';
});

Palacio.addEventListener("click", function () {
    texto.style.cssText = "color: #a78882;";
    botao.style.cssText = "background-color: #a78882;";
    botao2.style.cssText = "background-color: #a78882;";
    botao3.style.cssText = "background-color: #a78882;";
    div.innerHTML = ' <img src="imagem/Chale.gif" alt="" >';
});

