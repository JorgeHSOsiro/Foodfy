const modal = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const closeBtn = document.querySelector('.close-modal');
const content = document.querySelector('.modal-content')

for (let card of cards) {
    card.addEventListener('click', () => {
        const cardId = card.getAttribute('id')
        const title = card.querySelector('h3').innerText;
        const autor = card.querySelector('p').innerText;
        modal.classList.add('active');
        content.querySelector('img').src = `../assets/${cardId}.png`;
        content.querySelector('img').alt = `${cardId}`;
        content.querySelector('h3').innerText = title
        content.querySelector('p').innerText = autor
    });
}

closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

