const dossier = document.getElementById("dossier");

const openButtons = document.querySelectorAll(".mission-actions .btn-primary");

const closeButton = document.getElementById("closeDossier");

openButtons.forEach(button=>{

button.addEventListener("click",(e)=>{

e.preventDefault();

dossier.classList.add("active");

});

});

closeButton.addEventListener("click",()=>{

dossier.classList.remove("active");

});