//toggle movement
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks.style.display === 'block') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'block';
    }
}


document.getElementById('menu-icon').onclick = toggleMenu;


// Rocket Launcher JS Code 
document.addEventListener('DOMContentLoaded', function() {
    // Create the icon element
    const icon = document.createElement('div');
    icon.textContent = '🚀'; // Icon display
    icon.style.position = 'fixed';
    icon.style.left = '10px';
    icon.style.bottom = '10px';
    icon.style.fontSize = '48px';
    icon.style.transition = 'left 2s ease, bottom 2s ease'; // Smooth transitions
    document.body.appendChild(icon);

    // Create start button
    const startButton = document.createElement('button');
    startButton.textContent = 'Start';
    startButton.style.position = 'fixed';
    startButton.style.left = '60px'; // Center horizontally
    startButton.style.bottom = '70px'; // Position from the bottom
    startButton.style.transform = 'translateX(-50%)'; // Center align
    startButton.style.fontSize = '24px'; // Larger font size
    startButton.style.padding = '10px 20px'; // Padding for a bigger button
    startButton.style.backgroundColor = 'red'; // Green background color
    startButton.style.color = 'white'; // White text color
    startButton.style.border = 'none'; // No border
    startButton.style.borderRadius = '5px'; // Rounded corners
    startButton.style.cursor = 'pointer'; // Cursor as pointer
    document.body.appendChild(startButton);

    // Event listener for the start button
    startButton.addEventListener('click', function() {
        startRandomMovement(icon);
        startButton.style.display = 'none'; // Hide button after click
    });
});

function startRandomMovement(icon) {
    let lastTime = null;

    function moveIcon(timestamp) {
        if (!lastTime) lastTime = timestamp; // Initialize lastTime
        const elapsed = timestamp - lastTime;
        
        if (elapsed > 1000) { // Move every 2 seconds
            const maxX = window.innerWidth - 50;
            const maxY = window.innerHeight - 50;
            const randomX = Math.random() * maxX;
            const randomY = Math.random() * maxY;

            icon.style.left = `${randomX}px`;
            icon.style.bottom = `${randomY}px`;
            lastTime = timestamp; // Reset last time
        }

        requestAnimationFrame(moveIcon);
    }

    requestAnimationFrame(moveIcon);
};






