// Exemple de message de bienvenue
window.onload = () => {
    console.log("Bienvenue sur la boutique en ligne !");
};

// Fonction pour traiter le formulaire de contact
function traiterContact(event) {
    event.preventDefault();

    const nom = document.getElementById('contact-nom').value;
    const email = document.getElementById('contact-email').value;
    const sujet = document.getElementById('contact-sujet').value;
    const message = document.getElementById('contact-message').value;

    if (nom && email && sujet && message) {
        alert(`Merci ${nom} pour votre message ! Nous vous répondrons rapidement.`);
        document.getElementById('form-contact').reset();
    } else {
        alert("Veuillez remplir tous les champs !");
    }
}

// Quand la page est sur contact.html, activer le traitement
if (document.getElementById('form-contact')) {
    document.getElementById('form-contact').addEventListener('submit', traiterContact);
}

// Fonction pour traiter la commande
function traiterCommande(event) {
    event.preventDefault();

    const nom = document.getElementById('nom').value;
    const adresse = document.getElementById('adresse').value;
    const email = document.getElementById('email').value;
    const telephone = document.getElementById('telephone').value;

    if (nom && adresse && email && telephone) {
        alert(`Merci ${nom} ! Votre commande a été enregistrée.`);
     
        // Vider le panier après la commande
        localStorage.removeItem('panier');

        // Rediriger vers la page d'accueil
        window.location.href = "index.html";
    } else {
        alert("Veuillez remplir tous les champs !");
    }
}

// Quand la page est sur commande.html, activer le traitement
if (document.getElementById('form-commande')) {
    document.getElementById('form-commande').addEventListener('submit', traiterCommande);
}

// Fonction pour afficher les produits dans le panier
function afficherPanier() {
    const panier = JSON.parse(localStorage.getItem('panier')) || [];
    const contenu = document.getElementById('contenu-panier');

    if (panier.length === 0) {
        contenu.innerHTML = "<p>Votre panier est vide.</p>";
        return;
    }

    let html = "<ul>";
    let total = 0;

    panier.forEach(produit => {
        html += `<li>${produit.nom} - ${produit.prix} €</li>`;
        total += produit.prix;
    });

    html += "</ul>";
    html += `<h3>Total : ${total.toFixed(2)} €</h3>`;
    html += `<button onclick="viderPanier()">Vider le panier</button>`;

    contenu.innerHTML = html;
}

// Fonction pour vider le panier
function viderPanier() {
    localStorage.removeItem('panier');
    afficherPanier();
}

// Quand la page est chargée sur panier.html
if (document.getElementById('contenu-panier')) {
    window.onload = afficherPanier;
}

// Liste de produits
const produits = [
    { id: 1, nom: "Airpod pro", prix: 19.99, image: "images/airpod.jpg" },
    { id: 2, nom: "Casque", prix: 24.99, image: "images/casque.jpg" },
    { id: 3, nom: "Laptop hp17", prix: 300.00, image: "images/hp17.jpg" },
    { id: 4, nom: "Lenovo Tablette", prix: 600.00, image: "images/lenovo.jpg" },
    { id: 5, nom: "Desktop", prix: 470.00, image: "images/desk.jpg" },
    { id: 6, nom: "Appareil Photo", prix: 152.99, image: "images/photo.jpg" },
    { id: 7, nom: "Samsung Galaxy S25", prix: 959.99, image: "images/sam.jpg" },
    { id: 8, nom: "Samsung Galaxy S23", prix: 269.99, image: "images/s23.jpg" },
];

// Fonction pour afficher les produits
function afficherProduits() {
    const liste = document.getElementById('liste-produits');

    produits.forEach(produit => {
        const divProduit = document.createElement('div');
        divProduit.className = 'produit';

        divProduit.innerHTML = `
  <img src="${produit.image}" alt="${produit.nom}" width="150" />
  <h3>${produit.nom}</h3>
  <p>Prix : ${produit.prix} $</p>
  <button onclick="ajouterAuPanier(${produit.id})">Ajouter au panier</button>
`;


        liste.appendChild(divProduit);
    });
}

// Fonction pour ajouter un produit au panier
function ajouterAuPanier(idProduit) {
    let panier = JSON.parse(localStorage.getItem('panier')) || [];
    const produit = produits.find(p => p.id === idProduit);

    panier.push(produit);
    localStorage.setItem('panier', JSON.stringify(panier));
    alert(`${produit.nom} a été ajouté au panier !`);
}

// Quand la page est chargée, on affiche les produits
window.onload = afficherProduits;




// Fonction pour traiter le formulaire de contact
function traiterContact(event) {
    event.preventDefault();

    const nom = document.getElementById('contact-nom').value;
    const email = document.getElementById('contact-email').value;
    const sujet = document.getElementById('contact-sujet').value;
    const message = document.getElementById('contact-message').value;

    if (nom && email && sujet && message) {
        alert(`Merci ${nom} pour votre message ! Nous vous répondrons rapidement.`);
        document.getElementById('form-contact').reset();
    } else {
        alert("Veuillez remplir tous les champs !");
    }
}

// Quand la page est sur contact.html, activer le traitement
if (document.getElementById('form-contact')) {
    document.getElementById('form-contact').addEventListener('submit', traiterContact);
}

