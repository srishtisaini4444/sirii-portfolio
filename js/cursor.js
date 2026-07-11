console.log("Cursor JS Loaded");

const root=document.documentElement;

window.addEventListener("mousemove",(e)=>{

root.style.setProperty("--cursorX",`${e.clientX}px`);

root.style.setProperty("--cursorY",`${e.clientY}px`);

});