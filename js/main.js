const boot = document.getElementById("bootScreen");
const website = document.getElementById("website");
const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click",()=>{

    boot.classList.add("hidden");

    setTimeout(()=>{

        website.classList.add("active");

        document.querySelector(".hero-left").classList.add("show");

        document.querySelector(".hero-right").classList.add("show");

    },500);

});