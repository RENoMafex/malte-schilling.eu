//@ts-ignore
function openNav() {
    const nav = document.getElementById('navbar');
    if (nav == null)
        return;
    window.scrollTo(0, 0);
    if (!nav.classList.contains('responsive')) {
        nav.classList.add('responsive');
    }
    else {
        nav.classList.remove('responsive');
    }
}
