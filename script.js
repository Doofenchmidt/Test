
function openModal(src) {
  
    document.getElementById('modalImg').src = src;
   
    document.getElementById('modal').style.display = 'flex';
    
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    
    document.getElementById('modal').style.display = 'none';
    
    document.body.style.overflow = 'auto';
}


document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});


document.addEventListener('click', function (e) {
    if (e.target.id === 'modal') {
        closeModal();
    }
});