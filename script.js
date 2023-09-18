var crsr = document.querySelector(".cursor")
document,addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
})



gsap.to(".nav",{
    backgroundColor : "#000",
    height:"120px",
    duration:0.5,
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        // markers:true
        start:"top -10%",
        end:"top -11%",
        scrub:0.5
    }

})

gsap.to(".main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        start:"top -25%",
        end:"top -75%",
        scrub:1,



    }
})