// Wait until page fully loads
document.addEventListener("DOMContentLoaded", () => {

    // Select buttons
    const primaryBtn = document.querySelector(".primary-btn");
    const secondaryBtn = document.querySelector(".secondary-btn");

    // Primary button click
    primaryBtn.addEventListener("click", () => {
        alert("Gift Recommendation Coming Soon ❤️");
    });

    // Secondary button click
    secondaryBtn.addEventListener("click", () => {
        alert("Explore Amazing Gifts 🎁");
    });

    // Cards animation on hover
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {

        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-10px) scale(1.02)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0px) scale(1)";
        });

    });

    // Navbar shadow on scroll
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 50){
            navbar.style.background =
            "rgba(10,10,10,0.85)";

            navbar.style.backdropFilter =
            "blur(10px)";

            navbar.style.position = "fixed";
            navbar.style.width = "100%";
            navbar.style.top = "0";
            navbar.style.zIndex = "999";
        }
        else{
            navbar.style.background =
            "transparent";
        }

    });

});
