function tocarAudio(idAudio) {
    const elemento = document.querySelector(idAudio);


    if (elemento && elemento.LocalName === 'audio') {
        elemento.play();
    }else {
        alert('elemento ou seletor não encontrado');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idSomAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocarAudio(idSomAudio);
    }

    tecla.onkeydown = function (event) {
        if (event.code === 'Space' || event.code === "Enter") {
            tecla.classList.add('ativa');
        }
    }


    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
