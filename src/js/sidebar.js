const toggleBtn = document.getElementById('sidebarToggle');
const sidebar = document.querySelector('.sidebar');
const body = document.body;

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    body.classList.toggle('sidebar-open');
});

// Chiude sidebar se clicchi fuori da essa (solo su mobile)
document.addEventListener('click', (e) => {
    if (
        !sidebar.contains(e.target) &&
        !toggleBtn.contains(e.target) &&
        sidebar.classList.contains('open') &&
        window.innerWidth <= 768
    ) {
        sidebar.classList.remove('open');
        body.classList.remove('sidebar-open');
    }
});

// chiude la sidebar se si riduce la finestra sopra 768px
window.addEventListener('resize', () => {
    if(window.innerWidth > 768) {
        sidebar.classList.remove('open');
        body.classList.remove('sidebar-open');
    }
});