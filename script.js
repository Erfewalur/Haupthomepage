// Jahr automatisch setzen
document.getElementById("year").textContent = new Date().getFullYear();

// Demo-Kontaktformular
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    msg.style.display = "block";
    form.reset();
});
