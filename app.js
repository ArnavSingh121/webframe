document.addEventListener("DOMContentLoaded", () => {
    console.log("Webframe is ready!");

    // Example: Dynamic content switching (optional)
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));

            sections.forEach(section => section.style.display = 'none');
            target.style.display = 'block';
        });
    });

    // Default: show home section only
    sections.forEach(section => section.style.display = 'none');
    document.querySelector('#home').style.display = 'block';
});
