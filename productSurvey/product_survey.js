function submitFeedback() {
    // Récupérer les valeurs des champs du formulaire
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;

    // Afficher un message de remerciement
    alert('Thank you for your valuable feedback');

    // Mettre à jour les informations utilisateur
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    // Afficher la section des informations utilisateur
    document.getElementById('userInfo').style.display = 'block';
}

// Ajouter un écouteur d'événement au bouton de soumission
const submitButton = document.getElementById('submitBtn');
submitButton.onclick = submitFeedback;

// Soumettre les commentaires lorsqu'on appuie sur la touche "Entrée"
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});
