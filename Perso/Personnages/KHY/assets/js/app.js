const puces = document.querySelectorAll('.puce');


window.addEventListener("load", () =>{

    const TL = gsap.timeline({paused: true});
  
    TL
    .staggerFrom(puces, 0.8, {opacity: 0, ease: "power2.out"}, 0.3)

    TL.play();
});
