const button = document.getElementById('openModalBtn');
const modal = document.getElementById('myModal');
const span = document.getElementsByClassName('close')[0];

button.addEventListener('click', function() {
    modal.style.display = 'block';
    const modalTextElement = document.getElementById('modal-text');
    modalTextElement.innerHTML = '<img src="./kotik.jpg" alt="тут должен быть котик">';
});


span.onclick = function() {
    modal.style.display = 'none';
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}