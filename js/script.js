// ===== Navbar Active Link Auto Detect =====
const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});


// ===== Contact Form Validation =====
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const inputs = contactForm.querySelectorAll("input, textarea");
        let isValid = true;

        inputs.forEach(input => {
            if (input.hasAttribute("required") && input.value.trim() === "") {
                isValid = false;
                input.style.borderColor = "red";
            } else {
                input.style.borderColor = "#ccc";
            }
        });

        if (isValid) {
            alert("Thank you! Your message has been sent.");
            contactForm.reset();
        } else {
            alert("Please fill all required fields.");
        }
    });
}
// ===== Mobile Menu Toggle =====
const menuToggle = document.getElementById("menu-toggle");
const navLinksContainer = document.querySelector(".nav-links");

if (menuToggle && navLinksContainer) {
    menuToggle.addEventListener("click", () => {
        navLinksContainer.classList.toggle("show");
    });
}
