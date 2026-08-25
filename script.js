const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
    let curtiu = false;
    botao.addEventListener("click", botaoClicado);

    function botaoClicado() {
        let texto = botao.querySelector("span");
        let contador = parseInt(texto.textContent);

        if (curtiu === false) {
            texto.textContent = contador + 1;
            curtiu = true;
            botao.style.opacity = "0.8";
        } else {
            texto.textContent = contador - 1;
            curtiu = false;
            botao.style.opacity = "1";
        }
    }
});
