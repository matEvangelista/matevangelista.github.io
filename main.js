function clickable() {
    if (menuOpen) {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
    else {
        menuBtn.classList.add('open');
        menuOpen = true;
    }
}

function removeClicavel() {
    if (screen.width > 700) {
        menuOpen = false;
    }
}