// Get the HTML body element
const body = document.body;

// Create a custom cursor element
const customCursor = document.createElement('div');
customCursor.classList.add('custom-cursor');
body.appendChild(customCursor);

// Listen for mousemove events and move the custom cursor accordingly
body.addEventListener('mousemove', (e) => {
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;
});
