"use strict";

const items = document.querySelectorAll('.inbox input[type = checkbox]');
items.forEach(a => a.addEventListener('click', checkMissingOnes));

let lastChecked;

function checkMissingOnes(event) {
    
    let between = false;
    
    if (event.shiftKey && this.checked) {
        items.forEach(item => {
            if (item === lastChecked || item === this) {
                between = !between;
            }
            if (between) {
                item.checked = true;
            }
        });
        
    }
    
    lastChecked = this;    
}