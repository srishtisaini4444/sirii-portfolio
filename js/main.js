const boot = document.getElementById("bootScreen");
const website = document.getElementById("website");
const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", () => {

    boot.classList.add("hidden");

    setTimeout(() => {

        website.classList.add("active");

    },500);

});