document.addEventListener('DOMContentLoaded', function () {
    const navbarNav = document.querySelector('.navbar-nav');
    const navbarToggle = document.createElement('button');
    
    navbarToggle.textContent = '☰'; // Hamburger Icon
    navbarToggle.style.background = 'transparent';
    navbarToggle.style.border = 'none';
    navbarToggle.style.color = '#fff';
    navbarToggle.style.fontSize = '1.5rem';
    navbarToggle.style.cursor = 'pointer';
    navbarToggle.style.display = 'none';

    document.querySelector('.navbar').appendChild(navbarToggle);

    navbarToggle.addEventListener('click', function () {
        navbarNav.classList.toggle('active');
    });

    // Show toggle button on small screens
    function handleResize() {
        if (window.innerWidth <= 768) {
            navbarToggle.style.display = 'block';
        } else {
            navbarToggle.style.display = 'none';
            navbarNav.classList.remove('active');
        }
    }

    handleResize();
    window.addEventListener('resize', handleResize);
});
