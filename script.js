// حركه الانميشن اللي بتحصل في اول قسم بعد الهيدر 
let isDragging = false;
let offsetX, offsetY;
const transitionDuration = 0.3; // Adjust this value for the desired transition duration in seconds

const movableContainer = document.getElementById('main');

movableContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - movableContainer.getBoundingClientRect().left;
    // offsetY = e.clientY - movableContainer.getBoundingClientRect().top;
    movableContainer.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const x = e.clientX - offsetX;

    movableContainer.style.left = `${x}px`;
});

document.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        movableContainer.style.cursor = 'grab';
        movableContainer.style.transition = `left ${transitionDuration}s ease-out, top ${transitionDuration}s ease-out`;

        setTimeout(() => {
            movableContainer.style.transition = '';
        }, transitionDuration * 1000);

        movableContainer.style.left = '0';
        movableContainer.style.top = '0';
    }
});


// test 


document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('nav');

    menuBtn.addEventListener('click', function () {
        nav.style.display = (nav.style.display === 'block') ? 'none' : 'block';
    });
});
