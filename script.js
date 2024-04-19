document.addEventListener('DOMContentLoaded', function() {
    // Simular dados de barbeiros (pode ser substituído pela chamada da API)
    const barbeiros = [
        { id: 1, nome: 'João', foto: 'barbeiro1.jpg', avaliacao: 4.5 },
        { id: 2, nome: 'Pedro', foto: 'barbeiro2.jpg', avaliacao: 4.8 },
        { id: 3, nome: 'Lucas', foto: 'barbeiro3.jpg', avaliacao: 4.2 }
    ];

    const listaBarbeiros = document.getElementById('lista-barbeiros');

    // Exibir cada barbeiro na lista
    barbeiros.forEach(barbeiro => {
        const cardBarbeiro = document.createElement('div');
        cardBarbeiro.classList.add('barbeiro');
        cardBarbeiro.innerHTML = `
            <img src="${barbeiro.foto}" alt="${barbeiro.nome}">
            <h3>${barbeiro.nome}</h3>
            <p>Avaliação: ${barbeiro.avaliacao}</p>
            <button onclick="agendar(${barbeiro.id})">Agendar</button>
        `;
        listaBarbeiros.appendChild(cardBarbeiro);
    });
});

// Função para redirecionar para a página de agendamento com o ID do barbeiro
function agendar(barbeiroId) {
    window.location.href = `agendar.html?id=${barbeiroId}`;
}
