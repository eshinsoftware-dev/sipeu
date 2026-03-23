// assets/script.js - Main Application Scripts

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if(menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }

    // Basic Security: Disable Right Click
    document.addEventListener('contextmenu', event => event.preventDefault());

    // Basic Security: Disable Inspect elements (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U)
    document.onkeydown = function(e) {
        if(e.keyCode == 123) {
            return false;
        }
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
            return false;
        }
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
            return false;
        }
        if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
            return false;
        }
    }

    // Basic Security: Prevent Image Dragging
    const images = document.getElementsByTagName('img');
    for(let i = 0; i < images.length; i++) {
        images[i].setAttribute('draggable', false);
    }
});
