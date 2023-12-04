function inserirPacote() {
    const destino = document.getElementById('destino').value;
    const imagem = document.getElementById('imagem').value;
    const incluso = document.getElementById('incluso').value;
    const preco = document.getElementById('preco').value;
    const obs = document.getElementById('obs').value;

    const novoPacote = document.createElement('div');
    novoPacote.className = 'roteiros-viagens';
    novoPacote.innerHTML = `
        <img src="${imagem}" class="postal">
        <div class="roteiro-destino">${destino}</div>
        <ul class="roteiro-incluso">${formatarItensInclusos(incluso)}</ul>
        <div class="roteiro-preco">${preco}</div>
        <div class="roteiro-obs">${obs}</div>
        <div class="roteiro-parcelamento">Em até 10x sem Juros</div>
    `;

    const containerDestinos = document.getElementById('container-destinos');
    containerDestinos.appendChild(novoPacote);
}

function formatarItensInclusos(itens) {
    const itensArray = itens.split('\n');
    return itensArray.map(item => `<li>${item}</li>`).join('');
}