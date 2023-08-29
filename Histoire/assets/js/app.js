const puces = document.querySelectorAll('.puce');

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
        reveals[i].classList.remove("active");
      }
    }
}


window.addEventListener("scroll", reveal);

window.addEventListener("load", () =>{

    const TL = gsap.timeline({paused: true});
  
    TL
    .staggerFrom(puces, 0.8, {opacity: 0, ease: "power2.out"}, 0.3,'+=3')

    TL.play();
});

// La fonction permet la changement sur actualisation

function persoRand(){
    // Tableau multi dimensionelle pour stoquer les donner concernant chaque perso
    const total = [
        ['assets/img/Perso/P1.png', '#97BD4D','Huno','hiro_misakeregular'],
        ['assets/img/Perso/P2.png', '#68C4C4','Key\'s','the_soulmateregular'],
        ['assets/img/Perso/P3.png', '#AAAAAA','KHY','the_soulmateregular'],
        ['assets/img/Perso/P4.png', '#EE816B','Lyn','the_soulmateregular'],
        ['assets/img/Perso/P5.png', '#D4BDE6','Shin','the_soulmateregular'],
        ['assets/img/Perso/P6.png', '#F56469','N','the_soulmateregular'],
        ['assets/img/Perso/P7.png', '#B29663','M','the_soulmateregular'],
        ['assets/img/Perso/P8.png', '#350000','KH','the_soulmateregular'],
        ['assets/img/Perso/P9.png', '#FFFFFF','KY','the_soulmateregular'],
        ['assets/img/Perso/P10.png', '#FCD9C0','Shiro','the_soulmateregular']
    ];

    // Vas generer un tableau aleatoirement
    var randomImage = total[Math.floor(Math.random() * total.length)];
    // stoque le deuxieme element du tableau choisi
    var randomFond = randomImage[1];
    // le troisieme
    var randomTitre = randomImage[2];
    // var randomFont = randomImage[3];

    // On vas cibler les endroit au on veut placer les données dans le html ou le css
    document.getElementById('test').src = randomImage[0];
    document.getElementById('fond').style.background = randomFond;
    document.getElementById('name').innerHTML = randomTitre;
    // document.querySelector('.one').style.fontFamily = randomFont;
}


window.onload = persoRand;