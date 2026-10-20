
document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to Deepika's Portfolio!");

    const sections = document.querySelectorAll("section");

    sections.forEach(function (section) {
        section.style.transition = "0.3s ease";
    });
});
