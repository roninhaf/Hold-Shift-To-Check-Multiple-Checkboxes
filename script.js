const items = document.querySelectorAll('.inbox input[type = checkbox]');
items.forEach(a => a.addEventListener('click', checkMissingOnes));

let lastChecked;

function checkMissingOnes(a) {
    
    let between = false;
    
    if (a.shiftKey && this.checked) {
        items.forEach(a => {
            if (a === lastChecked || a === this) {
                between = !between;
            }
            if (between) {
                a.checked = true;
            }
        });
        
    }
    
    lastChecked = this;    
}