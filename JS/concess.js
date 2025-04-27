// Sélectionner tous les points et le conteneur pour le nom de la ville
const points = document.querySelectorAll('.point');
const villeName = document.querySelector('.ville-name');

// Ajouter un événement pour chaque point
points.forEach(point => {
    point.addEventListener('mouseover', function() {
        // Obtenir le nom de la ville depuis l'attribut 'data-ville'
        const ville = point.getAttribute('data-ville');
        
        // Afficher le nom de la ville dans le conteneur
        villeName.textContent = ville;
        villeName.style.display = 'block';
        
        // Positionner le conteneur du nom au-dessus du point
        const rect = point.getBoundingClientRect();
        villeName.style.top = `${rect.top - 30}px`; // Positionner au-dessus du point
        villeName.style.left = `${rect.left + rect.width / 2 - villeName.offsetWidth / 2}px`; // Centrer horizontalement
    });

    point.addEventListener('mouseout', function() {
        // Cacher le nom de la ville lorsque le curseur sort du point
        villeName.style.display = 'none';
    });
});