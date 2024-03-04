
const btn = document.getElementById('menu-btn')


btn.addEventListener('click' , navToggle)

function navToggle() {
   
    btn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')

}


// Fermez le menu après la sélection d'un élément
const menuItems = menu.querySelectorAll('.menuItem');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        
        menu.classList.remove('flex');
        menu.classList.add('hidden');
        btn.classList.remove('open');
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const scroll = new SmoothScroll('a[href*="#"]', {
        speed: 800, // Ajustez la vitesse selon vos préférences
        easing: 'easeInOutCubic' // Ajustez la fonction d'accélération selon vos préférences
    });
});




