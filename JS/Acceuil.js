// script.js
const carrousel = document.querySelector('.carrousel');
const cartes = document.querySelectorAll('.carte');
const btnGauche = document.querySelector('.left');
const btnDroite = document.querySelector('.right');

// Défilement vers la droite
btnDroite.addEventListener('click', () => {
    const firstCard = carrousel.firstElementChild;
    carrousel.style.transition = 'transform 0.5s ease-in-out';
    carrousel.style.transform = 'translateX(-320px)';
    
    setTimeout(() => {
        carrousel.appendChild(firstCard);
        carrousel.style.transition = 'none';
        carrousel.style.transform = 'translateX(0)';
    }, 500);
});

// Défilement vers la gauche
btnGauche.addEventListener('click', () => {
    const lastCard = carrousel.lastElementChild;
    carrousel.prepend(lastCard);
    carrousel.style.transition = 'none';
    carrousel.style.transform = 'translateX(-320px)';
    
    setTimeout(() => {
        carrousel.style.transition = 'transform 0.5s ease-in-out';
        carrousel.style.transform = 'translateX(0)';
    }, 50);
});

// Effet d'affichage du texte sur clic
cartes.forEach(carte => {
    carte.addEventListener('mouseenter', () => {
        carte.classList.add('active');  // Ajoute la classe active quand la souris entre
    });
    
    carte.addEventListener('mouseleave', () => {
        carte.classList.remove('active');  // Retire la classe active quand la souris sort
    });
});

function toggleMenu() {
    const navCenter = document.querySelector('.nav-center');
    navCenter.classList.toggle('nav-active');
}

function closeMenu() {
    const navCenter = document.querySelector('.nav-center');
    navCenter.classList.remove('nav-active');
}

// Fermer le menu après un clic sur un lien
document.querySelectorAll('.nav-center a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

