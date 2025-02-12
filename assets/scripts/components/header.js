const siteHeader = document.querySelector(".site-header");

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        siteHeader.classList.add('scrolled');
    } else {
        siteHeader.classList.remove('scrolled');
    }
});


// document.addEventListener("DOMContentLoaded", function () {
//     const headerDropdownToggles = document.querySelectorAll(".dropdown");

//     headerDropdownToggles.forEach(function (dropdown) {
//         const toggle = dropdown.querySelector(".dropdown-toggle");
//         const menu = dropdown.querySelector(".dropdown-menu");

//         // Add class on hover
//         dropdown.addEventListener("mouseover", function () {
//             toggle.classList.add("show");
//             menu.classList.add("show");
//         });

//         // Add class on click
//         toggle.addEventListener("click", function (event) {
//             event.stopPropagation(); // Prevent click from bubbling up to parent
//             toggle.classList.toggle("show");
//             menu.classList.toggle("show");
//         });

//         // Remove class on mouseout
//         dropdown.addEventListener("mouseout", function () {
//             if (!menu.matches(":hover") && !toggle.matches(":hover")) {
//                 toggle.classList.remove("show");
//                 menu.classList.remove("show");
//             }
//         });

//         // Close dropdown if clicked outside
//         document.addEventListener("click", function (e) {
//             if (!dropdown.contains(e.target)) {
//                 toggle.classList.remove("show");
//                 menu.classList.remove("show");
//             }
//         });
//     });
// });