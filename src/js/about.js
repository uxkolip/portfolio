const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

function checkiftooltip() {
    $(window).width() > 768 ? ($('[data-toggle="tooltip"]').tooltip(), 
    $("[data-toggle='tooltip']").tooltip(),
    $('[data-toggle="tooltip"]').tooltip("enable")) : $('[data-toggle="tooltip"]').tooltip("disable")
}

$(document).ready(function() {
    checkiftooltip();
}); 

$(window).resize(function() {
    checkiftooltip();
});

//smooth scroll
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      //console.log(e)
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        lenis.scrollTo(this.getAttribute('href'))
      });
    })

    document.querySelectorAll('[data-target^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        lenis.scrollTo(this.getAttribute('data-target'))
      });
    })

    //scroll toTop
    $(window).scroll(function() {
        $(this).scrollTop() > 800 ? $("#toTop").fadeIn("fast", function() {}) : $("#toTop").fadeOut("fast")
    });
    //scroll toTop end
    
//smooth scroll end


//navbar show on scroll up
const showAnim = gsap.from('.main-navbar', { 
    yPercent: -100,
    paused: true,
    duration: 0.3
}).progress(1);

ScrollTrigger.create({
    start: "top top",
    end: 99999,
    onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse()
    }
});
//navbar show on scroll up end

// page progress
gsap.registerPlugin(ScrollTrigger);
gsap.to('.progress-circle', {
  strokeDashoffset: 0,
  ease: 'none',
  scrollTrigger: { scrub: 0.3 },
  onComplete: self => {
      console.log('completed!')
      $('.icon-wrap').addClass('bg-accent');
      $('.icon--close path').css({ fill: '#fff' })
  },
  onUpdate: self => {
      if ($('.progress-circle').css('stroke-dashoffset') !== "0px" ) {
          $('.icon-wrap').removeClass('bg-accent');
          $('.icon--close path').css({ fill: '#3A2D52' })
      } 
  }
});
// page progress end


// workspaces scroller
gsap.registerPlugin(ScrollTrigger);

const cards = $(".design-card");

gsap.set(cards, {
    position: "absolute",
    opacity: 0,
    scale: .1,
    yPercent: 0,
    rotate: 0,
    filter: 'blur(10px)',
})

gsap.to(".design-card", {
    yPercent: -15,
    stagger: 5000,
    duration: 1400,
    opacity: 1,
    rotate: 0,
    scale: 1,
    filter: 'blur(0px)',
    //x: 100,
    //y: -50,
    scrollTrigger: {
        trigger: ".design-cards",
        pin: true,
        scrub: true,
        start: "-20%",
        end: "5900px"
    }
});
// workspaces scroller end