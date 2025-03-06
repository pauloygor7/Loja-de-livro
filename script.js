function mudarValor() {
    let div = document.getElementById('mudar');
    div.style.display = 'none';

    div.addEventListener('mouseover', function() {
        let h4 = document.createElement('p');
        h4.innerHTML = 'Você passou o mouse por cima!';
        div.appendChild(h4);
    });
}