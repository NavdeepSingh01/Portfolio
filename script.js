const body= document.querySelector("body"),
    toggleSwitch=document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", ()=>{
    body.classList.toggle("dark");
})

var typingEffect= new Typed(".typedText",{
    strings: ["Designer","Programmer","Web Developer"],

    loop:true,
    typedSpeed: 100,
    backSpeed:100,
    backDelay:2000,

});
