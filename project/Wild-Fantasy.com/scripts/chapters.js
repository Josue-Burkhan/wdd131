document.getElementById("last-modified").textContent = document.lastModified;


//Nav mobil
const headers = document.querySelectorAll('.faq-header');
const navigation = document.querySelector('.navigation');
const menuBut = document.querySelector('#menu');
const main = document.querySelector('main');

menuBut.addEventListener('click', () => {
  navigation.style.display = navigation.style.display === 'flex' ? 'none' : 'flex';
  main.style.marginTop = main.style.marginTop === '130px' ? '0' : '130px';
});

function lines(){
    let sizeW = Math.random()*22;
    let duration = Math.random()*3;
    let e = document.createElement("div");
    e.setAttribute("class","circle");
    document.body.appendChild(e);
    e.style.width = 12 + sizeW + "px";
    e.style.left = Math.random() * +innerWidth + "px";
    e.style.animationDuration = 2 + duration + "s";

    setTimeout(function() {
        document.body.removeChild(e);
        
    }, 5000);
}

setInterval(function() {
    lines();
}, 200);

//volumen selection

function volumeSelection() {
    const volumen1 = document.getElementById("volume1");
    const volumen2 = document.getElementById("volume2");
    const volumen3 = document.getElementById("volume3");
    const volumen4 = document.getElementById("volume4");
    
    const chaptersVol1 = document.querySelector(".chapters-vol1");
    const chaptersVol2 = document.querySelector(".chapters-vol2");
    const chaptersVol3 = document.querySelector(".chapters-vol3");
    const chaptersVol4 = document.querySelector(".chapters-vol4");

    chaptersVol1.style.display = "grid";
    chaptersVol2.style.display = "none";
    chaptersVol3.style.display = "none";
    chaptersVol4.style.display = "none";

    volumen1.addEventListener("click", () => {
        chaptersVol1.style.display = "grid";
        chaptersVol2.style.display = "none";
        chaptersVol3.style.display = "none";
        chaptersVol4.style.display = "none";
    });
    volumen2.addEventListener("click", () => {
        chaptersVol1.style.display = "none";
        chaptersVol2.style.display = "grid";
        chaptersVol3.style.display = "none";
        chaptersVol4.style.display = "none";
    });
    volumen3.addEventListener("click", () => {
        chaptersVol1.style.display = "none";
        chaptersVol2.style.display = "none";
        chaptersVol3.style.display = "grid";
        chaptersVol4.style.display = "none";
    });
    volumen4.addEventListener("click", () => {
        chaptersVol1.style.display = "none";
        chaptersVol2.style.display = "none";
        chaptersVol3.style.display = "none";
        chaptersVol4.style.display = "grid";
    });
}

volumeSelection();



