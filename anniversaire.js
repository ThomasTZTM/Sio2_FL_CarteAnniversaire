// Générateur de cartes d'anniversaires
// console.log("test !")

// Récupérer le formulaire
const formulaire = document.querySelector("#formulaire")

// Récupérer le bouton qui génère la carte
const genererBtn = document.querySelector("#generer-btn")

// Détecter le click sur le bouton
// Associer au bouton un "eventListener" : écouteur d'évènement
genererBtn.addEventListener("click", () => {
    // Récupérer les valeurs saisies dans le formulaire
    const prenom = formulaire.prenom.value.trim() // Extraire la valeur du formulaire // trim permet d'enlever les espaces avant et après la chaine
    const couleur = formulaire.couleur.value
    const message = formulaire.message.value.trimEnd()

    // Vérifier le formulaire
    if (!formulaire.checkValidity()){
        // Ajouter dynamiquement la classe "was-validated" de bootstrap
        formulaire.classList.add("was-validated") // Si formulaire pas valide alors on met les cases en vert ou en rouge
        return
    }
})