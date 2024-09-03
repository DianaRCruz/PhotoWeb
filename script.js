const menuInside = document.getElementById("menuInside");
const btnMenu = document.getElementById("btnMenu")

btnMenu.addEventListener("click", ()=>{menuInside.classList.toggle("hidden")})


const wrapperArt = document.getElementById("wrapperArt")
const wrapperArchitecture = document.getElementById("wrapperArchitecture")
const wrapperPets= document.getElementById("wrapperPets")
const wrapperPortraits= document.getElementById("wrapperPortraits")
const wrapperRetouch= document.getElementById("wrapperRetouch")

const sectionArt = document.getElementById("sectionArt")
const sectionArchitecture = document.getElementById("sectionArchitecture")
const sectionPets= document.getElementById("sectionPets")
const sectionPortraits= document.getElementById("sectionPortraits")
const sectionRetouch= document.getElementById("sectionRetouch")

wrapperArt.addEventListener("mouseenter",()=>{
    sectionArt.style.width = "50vw";
    sectionArchitecture.style.width = "12.5vw";
    sectionPets.style.width="12.5vw";
    sectionPortraits.style.width="12.5vw";
    sectionRetouch.style.width="12.5vw";
    
})

wrapperArt.addEventListener("mouseleave",()=>{
    sectionArt.style.width = "20vw";
    sectionArchitecture.style.width = "20vw";
    sectionPets.style.width="20vw";
    sectionPortraits.style.width="20vw";
    sectionRetouch.style.width="20vw";
})



wrapperArchitecture.addEventListener("mouseenter",()=>{
    sectionArchitecture.style.width = "50vw";
    sectionArt.style.width = "12.5vw";
    sectionPets.style.width="12.5vw";
    sectionPortraits.style.width="12.5vw";
    sectionRetouch.style.width="12.5vw";
})

wrapperArchitecture.addEventListener("mouseleave",()=>{
    sectionArt.style.width = "20vw";
    sectionArchitecture.style.width = "20vw";
    sectionPets.style.width="20vw";
    sectionPortraits.style.width="20vw";
    sectionRetouch.style.width="20vw";})



wrapperPets.addEventListener("mouseover",()=>{
    sectionPets.style.width = "50vw";
    sectionArchitecture.style.width = "12.5vw";
    sectionArt.style.width="12.5vw";
    sectionPortraits.style.width="12.5vw";
    sectionRetouch.style.width="12.5vw";
    
    })
    
wrapperPets.addEventListener("mouseout",()=>{
    sectionArt.style.width = "20vw";
    sectionArchitecture.style.width = "20vw";
    sectionPets.style.width="20vw";
    sectionPortraits.style.width="20vw";
    sectionRetouch.style.width="20vw";})




 wrapperPortraits.addEventListener("mouseover",()=>{
        sectionPortraits.style.width = "50vw";
        sectionArchitecture.style.width = "12.5vw";
        sectionArt.style.width="12.5vw";
        sectionPets.style.width="12.5vw";
        sectionRetouch.style.width="12.5vw";
        
        })
        
wrapperPortraits.addEventListener("mouseout",()=>{
        sectionArt.style.width = "20vw";
        sectionArchitecture.style.width = "20vw";
        sectionPets.style.width="20vw";
        sectionPortraits.style.width="20vw";
        sectionRetouch.style.width="20vw";})

wrapperRetouch.addEventListener("mouseover",()=>{
            sectionRetouch.style.width = "50vw";
            sectionArchitecture.style.width = "12.5vw";
            sectionArt.style.width="12.5vw";
            sectionPortraits.style.width="12.5vw";
            sectionPets.style.width="12.5vw";
            
            })
            
wrapperRetouch.addEventListener("mouseout",()=>{
            sectionArt.style.width = "20vw";
            sectionArchitecture.style.width = "20vw";
            sectionPets.style.width="20vw";
            sectionPortraits.style.width="20vw";
            sectionRetouch.style.width="20vw";})