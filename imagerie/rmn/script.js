const canvas = document.getElementById("rmnCanvas");
const ctx = canvas.getContext("2d");

let angle = 0;
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 100;
const B0Height = 150;

// Fonction de dessin
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dessin du champ B0 (axe bleu)
    ctx.beginPath();
    ctx.moveTo(centerX, centerY - B0Height);
    ctx.lineTo(centerX, centerY + B0Height);
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 4;
    ctx.stroke();

    // Calcul des coordonnées du moment magnétique en précession
    let x = centerX + radius * Math.cos(angle);
    let y = centerY + radius * Math.sin(angle);

    // Dessin de la trajectoire circulaire de précession
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = "gray";
    ctx.lineWidth = 1;
    ctx.stroke();

    // Dessin du vecteur μ (rouge)
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(x, y);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 4;
    ctx.stroke();

    // Dessin de la tête de flèche pour μ
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();

    angle += 0.03; // Vitesse de précession

    requestAnimationFrame(draw);
}

// Lancer l'animation
draw();
