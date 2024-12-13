document.addEventListener("DOMContentLoaded", () => {
    // Menu Toggle Logic
    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar ul");

    if (menuToggle && navbar) {
        menuToggle.addEventListener("click", () => {
            navbar.classList.toggle("active");
        });
    }

    // Tawk.to Script Integration
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
        var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/675cad4149e2fd8dfef78d47/1if109ihb';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
    })();
});
