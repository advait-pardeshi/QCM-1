AOS.init({
  offset: 140,
  duration: 600,
});

let e = document.querySelectorAll(".hover-effect");

e.forEach((el) => {
  const height = el.clientHeight;
  const width = el.clientWidth;

  el.addEventListener("mousemove", handleMove);

  function handleMove(e) {
    const xVal = e.layerX;
    const yVal = e.layerY;

    const yRotation = 20 * ((xVal - width / 2) / width);

    const xRotation = -20 * ((yVal - height / 2) / height);

    const string =
      "perspective(500px) scale(1.1) rotateX(" +
      xRotation +
      "deg) rotateY(" +
      yRotation +
      "deg)";

    el.style.transform = string;
  }

  el.addEventListener("mouseout", function () {
    el.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
  });

  el.addEventListener("mousedown", function () {
    el.style.transform = "perspective(500px) scale(0.9) rotateX(0) rotateY(0)";
  });

  el.addEventListener("mouseup", function () {
    el.style.transform = "perspective(500px) scale(1.1) rotateX(0) rotateY(0)";
  });
});



//! SLIDE Effect

const imgs = document.querySelectorAll(".img");
const event1 = document.querySelector('.event-1')
const event2 = document.querySelector('.event-2')
const event3 = document.querySelector('.event-3')
const event4 = document.querySelector('.event-4')
const event5 = document.querySelector('.event-5')




const btn0 = document.querySelector(".btn-0");
btn0.addEventListener('click', () => {
  tlr0.to('.btn-0', 0.2, {
      x: '-100%',
      opacity: 0,
    })
    .to('.slide-content', 0.3, {
      x: '200vw',
      opacity: 0,
    })
    .to('.slide-img', 0.3, {
      x: '-100%',
      opacity: 0,
    })
    .to('.slider-container-0', 0.4, {
      x: '-100%',
      ease: Power2.easeOut,
    })

  tl0.reverse()
  tlr0.play()
})


const btn1 = document.querySelector(".btn-1");
btn1.addEventListener('click', () => {
  tlr1.to('.btn-1', 0.2, {
      x: '-100%',
      opacity: 0,
    })
    .to('.slide-content-1', 0.3, {
      x: '200vw',
      opacity: 0,
      ease: Power2.easeOut
    })
    .to('.slide-img-1', 0.3, {
      x: '-100%',
      opacity: 0,
    })
    .to('.slider-container-1', 0.4, {
      x: '-100%',
      ease: Power2.easeOut,
    })

  tl1.reverse()
  tlr1.play()
})

const btn2 = document.querySelector(".btn-2");
btn2.addEventListener('click', () => {
  tlr2.to('.btn-2', 0.2, {
      x: '-100%',
      opacity: 0,
    })
    .to('.slide-content-2', 0.3, {
      x: '200vw',
      opacity: 0,
      ease: Power2.easeOut
    })
    .to('.slide-img-2', 0.3, {
      x: '-100%',
      opacity: 0,
    })
    .to('.slider-container-2', 0.4, {
      x: '-100%',
      ease: Power2.easeOut,
    })

  tl2.reverse()
  tlr2.play()
})

const btn3 = document.querySelector(".btn-3");
btn3.addEventListener('click', () => {
  tlr3.to('.btn-3', 0.2, {
      x: '-100%',
      opacity: 0,
    })
    .to('.slide-content-3', 0.3, {
      x: '200vw',
      opacity: 0,
      ease: Power2.easeOut
    })
    .to('.slide-img-3', 0.3, {
      x: '-100%',
      opacity: 0,
    })
    .to('.slider-container-3', 0.4, {
      x: '-100%',
      ease: Power2.easeOut,
    })

  tl3.reverse()
  tlr3.play()
})

const btn4 = document.querySelector(".btn-4");
btn4.addEventListener('click', () => {
  tlr4.to('.btn-4', 0.2, {
      x: '-100%',
      opacity: 0,
    })
    .to('.slide-content-4', 0.3, {
      x: '200vw',
      opacity: 0,
      ease: Power2.easeOut
    })
    .to('.slide-img-4', 0.3, {
      x: '-100%',
      opacity: 0,
    })
    .to('.slider-container-4', 0.4, {
      x: '-100%',
      ease: Power2.easeOut,
    })

  tl4.reverse()
  tlr4.play()
})

// GSAP
//! Timeline for slide animation over evemt img
var tl0 = gsap.timeline({
  paused: true

});
var tl1 = gsap.timeline({
  paused: true

});
var tl2 = gsap.timeline({
  paused: true

});
var tl3 = gsap.timeline({
  paused: true

});
var tl4 = gsap.timeline({
  paused: true

});

//! timeline for lide section over 

var tls0 = gsap.timeline({
  paused: true
});
var tls1 = gsap.timeline({
  paused: true
});
var tls2 = gsap.timeline({
  paused: true
});
var tls3 = gsap.timeline({
  paused: true
});
var tls4 = gsap.timeline({
  paused: true
});

var tlr0 = gsap.timeline({
  paused: true
});
var tlr1 = gsap.timeline({
  paused: true
});
var tlr2 = gsap.timeline({
  paused: true
});
var tlr3 = gsap.timeline({
  paused: true
});
var tlr4 = gsap.timeline({
  paused: true
});


event1.addEventListener('click', () => {
  tl0.to('.slide-effect-0', 0.3, {
      width: '100%'
    })
    .to('.slider-event-name-0', 0.3, {
      width: '100%'
    }, '-=0.3')
    .to('.slide-effectNumber-0', 0.3, {
      width: '100%'
    }, '-=0.3')

  tls0.to('.slider-container-0', 0.5, {
      x: '0',
      ease: Power2.easeOut,
    }, '+=0.3')
    .to('.slide-img', 0.3, {
      x: '0',
      opacity: 1,
     
    })
    .to('.slide-content', 0.3, {
      x: '0',
      opacity: 1,
    })
    .to('.btn-0', 0.2, {
      x: '0',
      opacity: 1,
    })


  tl0.play()
  tls0.play()
})


event2.addEventListener('click', () => {
  tl1.to('.slide-effect-1', 0.3, {
      width: '100%'
    })
    .to('.slider-event-name-1', 0.3, {
      width: '100%'
    }, '-=0.3')
    .to('.slide-effectNumber-1', 0.3, {
      width: '100%'
    }, '-=0.3')
  tls1.to('.slider-container-1', 0.5, {
      x: '0',
      ease: Power2.easeOut,
    }, '+=0.3')
    .to('.slide-img-1', 0.3, {
      x: '0',
      opacity: 1,
    })
    .to('.slide-content-1', 0.3, {
      x: '0',
      opacity: 1,
    })
    .to('.btn-1', 0.2, {
      x: '0',
      opacity: 1,
    })


  tl1.play()
  tls1.play()

  setTimeout(() => {
    document.querySelector('.our-events').scrollIntoView(true)
  }, 300)
})



event3.addEventListener('click', () => {
  tl2.to('.slide-effect-2', 0.3, {
      width: '100%'
    })
    .to('.slider-event-name-2', 0.3, {
      width: '100%'
    }, '-=0.3')
    .to('.slide-effectNumber-2', 0.3, {
      width: '100%'
    }, '-=0.3')
  tls2.to('.slider-container-2', 0.5, {
      x: '0',
      ease: Power2.easeOut,
    }, '+=0.3')
    .to('.slide-img-2', 0.3, {
      x: '0',
      opacity: 1,
    })
    .to('.slide-content-2', 0.3, {
      x: '0',
      opacity: 1,
    })
    .to('.btn-2', 0.2, {
      x: '0',
      opacity: 1,
    })
  tl2.play()
  tls2.play()

  setTimeout(() => {
    document.querySelector('.our-events').scrollIntoView(true)
  }, 300)
})

event4.addEventListener('click', () => {
  tl3.to('.slide-effect-3', 0.3, {
      width: '100%'
    })
    .to('.slider-event-name-3', 0.3, {
      width: '100%'
    }, '-=0.3')
    .to('.slide-effectNumber-3', 0.3, {
      width: '100%'
    }, '-=0.3')
  tls3.to('.slider-container-3', 0.5, {
      x: '0',
      ease: Power2.easeOut,
    }, '+=0.3')
    .to('.slide-img-3', 0.3, {
      x: '0',
      opacity: 1,
    })
    .to('.slide-content-3', 0.3, {
      x: '0',
      opacity: 1,
    })
    .to('.btn-3', 0.2, {
      x: '0',
      opacity: 1,
    })
  tl3.play()
  tls3.play()

  setTimeout(() => {
    document.querySelector('.our-events').scrollIntoView(true)
  }, 300)
})

