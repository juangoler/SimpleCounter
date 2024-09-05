document.addEventListener('DOMContentLoaded', (event) => {
    let valor = 0;

    const contador = document.getElementById('contador');
    const btnIncrementar = document.getElementById('incrementar');
    const btnDecrementar = document.getElementById('decrementar');

    btnIncrementar.addEventListener('click', () => {
        valor++;
        contador.textContent = valor;
    });

    btnDecrementar.addEventListener('click', () => {
        valor--;
        contador.textContent = valor;
    });
});
