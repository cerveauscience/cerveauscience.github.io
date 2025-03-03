document.addEventListener('DOMContentLoaded', function() {
    const navbarContainer = document.getElementById('navbar-container');

    // Calcul automatique de la profondeur (utile pour les sous-dossiers)
    const depth = window.location.pathname.split('/').length - 2;
    const prefix = '../'.repeat(depth < 0 ? 0 : depth);

    // Charger la navbar
    fetch(prefix + 'navbar.html')
        .then(response => response.text())
        .then(html => {
            navbarContainer.innerHTML = html;

            // Charger aussi langSwitch.js après l'insertion de la navbar
            const langScript = document.createElement('script');
            langScript.src = prefix + 'js/langSwitch.js';
            document.body.appendChild(langScript);
        })
        .catch(error => {
            console.error('Erreur lors du chargement de la navbar:', error);
        });
});
