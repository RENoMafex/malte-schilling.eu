document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('#navbar a');
    const currentPath = window.location.pathname;
    const nav = document.getElementById('navbar');
    links.forEach(link => {
        if (link instanceof HTMLAnchorElement) {
            const linkPath = new URL(link.href).pathname;
            if (currentPath === linkPath || currentPath.endsWith(linkPath)) {
                link.classList.add('active');
            }
        }
    });
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        const isActive = dropdown.querySelector('.dropdown-content a.active');
        if (isActive) {
            const dropbutton = dropdown.querySelector('.dropbutton');
            if (dropbutton) {
                dropbutton.classList.add('active');
            }
        }
    });
    document.querySelectorAll('.dropbutton').forEach(button => {
        button.addEventListener('click', (event) => {
            if (nav == null)
                return;
            if (!nav.classList.contains('responsive')) {
                return;
            }
            event.preventDefault();
            const dropdown = button.closest('.dropdown');
            if (!dropdown)
                return;
            const content = dropdown.querySelector('.dropdown-content');
            if (!content)
                return;
            content.classList.toggle('show');
        });
    });
});
export {};
