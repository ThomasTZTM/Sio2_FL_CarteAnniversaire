// Générateur de cartes d'anniversaires
// console.log("test !")

// Récupérer le formulaire
const formulaire = document.querySelector("#formulaire")

// Récupérer le bouton qui génère la carte
const genererBtn = document.querySelector("#generer-btn")

// Récupérer la carte
const carte = document.querySelector("#carte")

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
        return // Pas besoin d'aller plus loin grace à la fonction au dessus
    }

    // Générer la carte
    // Rendre visible la carte
    carte.style.display = "block" // Permet d'afficher la carte
    // Appliquer l'animation zoomIn
    carte.classList.add("anime-carte")

    // Paramètrer la carte avec les valeurs du formulaire
    const carteBoostrap = document.querySelector("#carte > .card") // ">" veut dire un enfant de
    carteBoostrap.style.backgroundColor = couleur // On applique la couleur
    carte.querySelector("#carte-prenom").textContent =
        `Joyeux anniversaire, ${prenom}`
    carte.querySelector("#carte-message").textContent =
        message || "Profite bien de ta journée !"
})

// Ajouter un écouteur sur le click du bouton "réinitialiser"
const resetBtn = document.querySelector("#reset-btn")
resetBtn.addEventListener("click", () => {
    carte.style.display = 'none'
    formulaire.reset()
    formulaire.classList.remove("was-validated")
    carte.classList.remove("anime-carte")
})