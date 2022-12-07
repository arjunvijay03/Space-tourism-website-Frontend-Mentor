

import data from './data.json' assert {type: 'json'};
console.log(data.destinations[2]);

// --------------------NAV BAR-------------
const header = document.querySelector('header');
const hamBurger = document.getElementById("ham-burger");
const close = document.getElementById("close");

hamBurger.addEventListener("click", () =>{
    header.classList.add("active");
})
close.addEventListener("click", () =>{
    header.classList.remove("active");
    
})



// ---------------DESTINATION--------------------

const destBtn = document.querySelectorAll(".destination-btn")
const destImg = document.getElementById("destination-image")
const destTitle = document.querySelector("#destination-des-title")
const destPara = document.querySelector("#destination-des-para");
const destDistamce = document.querySelector("#destination-distance")
const destTime = document.querySelector("#destination-time")

destBtn.forEach((x, y)=> {
    x.addEventListener("click", () =>{
        console.log("hiii");
        
        destImg.innerHTML = `<img id="destination-img" src=${data.destinations[y].images.png} alt="">`
        destTitle.innerHTML = data.destinations[y].name.toUpperCase();
        destPara.innerHTML = data.destinations[y].description
        destDistamce.innerHTML = data.destinations[y].distance.toUpperCase();
        destTime.innerHTML = data.destinations[y].travel.toUpperCase()
        document.querySelector(".destination-btn-active").classList.remove("destination-btn-active");
        x.classList.add("destination-btn-active")
    })
});




// ---------------CREW-------------------



const crewButtons = document.querySelectorAll(".crew-btn");
const crewRole = document.querySelector("#crew-role");
const crewName = document.querySelector("#crew-name");
const crewBio = document.querySelector("#crew-bio");
const crewImage = document.querySelector("#crew-image");



crewButtons.forEach((x, y) =>{
    x.addEventListener("click", () =>{
        crewName.innerHTML = data.crew[y].name.toUpperCase();
        crewRole.innerHTML = data.crew[y].role.toUpperCase();
        crewBio.innerHTML = data.crew[y].bio;
        crewImage.innerHTML = ` <img id="crew-img" src="${data.crew[y].images.png}" alt="">`
        document.querySelector(".crew-btn-active").classList.remove("crew-btn-active");
        x.classList.add("crew-btn-active")
    })


})

// ----------------TECH--------------

const techBtn = document.querySelectorAll(".tech-btn");
const techName = document.querySelector("#tech-name");
const techDescri = document.querySelector("#tech-description-para")
const techImageLandscape = document.querySelector("#tech-img-landscape");
const techImagePortraite = document.querySelector("#tech-img-portraite");

techBtn.forEach((x, y) =>{
    x.addEventListener("click", ()=>{
        techName.innerHTML = data.technology[y].name.toUpperCase();
        techDescri.innerHTML = data.technology[y].description;
        techImageLandscape.srcset = data.technology[y].images.landscape;
        techImagePortraite.srcset = data.technology[y].images.portrait;
        document.querySelector(".tech-btn-active").classList.remove("tech-btn-active");
        x.classList.add("tech-btn-active");
    })
})



