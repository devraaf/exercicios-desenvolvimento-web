function gerarCards(exercicios, stack) {
    const container = document.querySelector('.exercicios');
    container.innerHTML = '';

    exercicios.forEach(exercicio => {
        const card = document.createElement('article');
        card.classList.add('card');

        const date = document.createElement('time');
        const [dia, mes, ano] = exercicio.data.split('/');
        date.setAttribute('datetime', `${ano}-${mes}-${dia}`);
        date.textContent = exercicio.data;

        const infos = document.createElement('div');
        infos.classList.add('atividade');

        const title = document.createElement('h3');
        title.textContent = exercicio.nome;
        infos.appendChild(title);

        const stackDiv = document.createElement('div');
        stackDiv.classList.add('stack');
        infos.appendChild(stackDiv);

        if (Array.isArray(exercicio.stack)) {
            exercicio.stack.forEach(techId => {
                const iconUrl = stack[techId];
                if (!iconUrl) return;

                const img = document.createElement('img');
                img.classList.add('tech-icon');
                img.src = iconUrl;
                img.alt = `ícone ${techId}`;
                stackDiv.appendChild(img);
            });
        }

        const link = document.createElement('a');
        link.classList.add('button');
        link.href = exercicio.link;
        link.textContent = 'Abrir exercício';
        if (exercicio.link.startsWith('http')) {
            link.target = '_blank';
        }

        card.appendChild(date);
        card.appendChild(infos);
        card.appendChild(link);

        container.appendChild(card);
    });
}

function load() {
    fetch('main/src/data/exercicios.json')
        .then(response => response.json())
        .then(exercicios => {
            fetch('main/src/data/stack.json')
                .then(res => res.json())
                .then(stack => gerarCards(exercicios, stack))
                .catch(() => gerarCards(exercicios, {}));
        })
        .catch(error => console.error('Erro:', error));
}

document.addEventListener('DOMContentLoaded', load);