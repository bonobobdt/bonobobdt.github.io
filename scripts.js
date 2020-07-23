const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('img');

for (let card of cards){
    card.addEventListener('click', function(){
        const imgId = card.getAttribute("src"); 
        modalOverlay.classList.add('active');
        modalOverlay.querySelector("img").src = imgId;
    })
}

document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active');
    modalOverlay.querySelector('img').src = "";
})

