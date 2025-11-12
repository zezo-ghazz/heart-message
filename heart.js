const heartContainer = document.getElementById('heart-container');
const textToRepeat = "KABHAB SOGOZO "; // <-- This line has been changed!
const numberOfTexts = 100; // How many "KABHAB SOGOZO" texts you want

// Function to generate points on a heart curve
function getHeartCurvePoints(t) {
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
    return { x, y };
}

for (let i = 0; i < numberOfTexts; i++) {
    const textElement = document.createElement('span');
    textElement.classList.add('love-text');
    textElement.textContent = textToRepeat;

    // Calculate a 't' value for each text to distribute them around the heart
    const t = (i / numberOfTexts) * (2 * Math.PI);
    const { x, y } = getHeartCurvePoints(t);

    // Scale and position the points to fit the container
    // Adjust these scaling factors and offsets as needed for your container size
    const scaleFactor = 15; // Makes the heart bigger or smaller
    const offsetX = heartContainer.clientWidth / 2;
    const offsetY = heartContainer.clientHeight / 2;

    textElement.style.left = `${offsetX + x * scaleFactor}px`;
    textElement.style.top = `${offsetY + y * scaleFactor}px`;

    // Add a slight delay to each text's animation for a wave effect
    textElement.style.animationDelay = `${i * 0.05}s`; // Adjust delay as needed

    heartContainer.appendChild(textElement);
}