async function fetchNoticias() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao buscar notícias:', error);
        return [];
    }
}

async function fetchServicos() {
    const apiKey = 'BRXX0283';
    const cidade = 'Ilheus,BR';

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}`);
        const data = await response.json();
        return data.weather[0].description;
    } catch (error) {
        console.error('Erro ao buscar condições meteorológicas:', error);
        return '';
    }
}
async function preencherSecoes() {
    const noticiasSecao = document.querySelector('.noticias ul');
    const noticias = await fetchNoticias();

    noticias.forEach((noticia) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = noticia.title;
        a.href = 'index.html';
        li.appendChild(a);
        noticiasSecao.appendChild(li);
    });

    const servicosSecao = document.querySelector('.servicos ul');
    const condicoesMeteorologicas = await fetchServicos();

    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = `Condição Meteorológica: ${condicoesMeteorologicas}`;
    li.appendChild(span);
    servicosSecao.appendChild(li);
}

preencherSecoes();