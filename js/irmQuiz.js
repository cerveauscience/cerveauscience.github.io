const animals = [
    "babouin", "rhinoceros", "antilope", "dauphin", "chat", "guepard",
    "chimpanse", "macaque", "furet", "pandas"
];

const descriptions = {
    "babouin": "Le babouin vit en Afrique. Très social, il vit en groupe.",
    "dauphin": "Le dauphin est un mammifère marin très intelligent.",
    "humain": "L’humain possède le cerveau le plus complexe.",
    "chat": "Le chat est un carnivore domestique apprécié.",
    "lion": "Le lion est le roi de la savane.",
    // Ajoute les descriptions pour tous les animaux...
};

let correctAnimal = "";

function getRandomAnimal() {
    return animals[Math.floor(Math.random() * animals.length)];
}

function loadNewQuestion() {
    const irmImage = document.getElementById('irm-image');
    const choicesContainer = document.querySelector('.quiz-choices');
    const resultDiv = document.getElementById('quiz-result');
    const descriptionDiv = document.getElementById('quiz-description');
    const nextButton = document.getElementById('next-question');

    resultDiv.innerHTML = "";
    descriptionDiv.innerHTML = "";
    nextButton.style.display = "none";
    choicesContainer.innerHTML = "";

    // Choix aléatoire de l'animal correct
    correctAnimal = getRandomAnimal();
    irmImage.src = `../../assets/irm/${correctAnimal}.jpg`;

    // Sélection de 2 autres animaux différents
    const options = new Set([correctAnimal]);
    while (options.size < 3) {
        options.add(getRandomAnimal());
    }

    // Création des boutons (capsules) de réponse
    Array.from(options).forEach(animal => {
        const choice = document.createElement('div');
        choice.className = "quiz-choice";
        choice.innerHTML = `<img src="../../assets/animaux/${animal}.jpg" alt="${animal}">`;
        choice.onclick = () => checkAnswer(animal);
        choicesContainer.appendChild(choice);
    });
}

function checkAnswer(selectedAnimal) {
    const resultDiv = document.getElementById('quiz-result');
    const descriptionDiv = document.getElementById('quiz-description');
    const nextButton = document.getElementById('next-question');

    if (selectedAnimal === correctAnimal) {
        resultDiv.innerText = "✅ Bonne réponse !";
        resultDiv.style.color = "green";
    } else {
        resultDiv.innerText = `❌ Mauvaise réponse. C'était ${correctAnimal}.`;
        resultDiv.style.color = "red";
    }

    descriptionDiv.innerText = descriptions[correctAnimal] || "Pas de description disponible.";
    nextButton.style.display = "inline-block";
}

document.getElementById('next-question').addEventListener('click', loadNewQuestion);

// Charger la première question dès le chargement de la page
document.addEventListener('DOMContentLoaded', loadNewQuestion);
