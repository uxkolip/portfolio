function checkiftooltip() {
    $(window).width() > 768 ? ($('[data-toggle="tooltip"]').tooltip(), 
    $('[data-toggle="tooltip"]').tooltip("enable")) : $('[data-toggle="tooltip"]').tooltip("disable")

    $("[data-toggle='tooltip']").tooltip();

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

}

$(document).ready(function() {
    $(window).resize(function() {
        checkiftooltip()
    });

    $(".panel").css("opacity", "1");

}); 



const showAnim = gsap.from('.main-navbar', { 
    yPercent: -100,
    paused: true,
    duration: 0.2
}).progress(1);

ScrollTrigger.create({
    start: "top top",
    end: 99999,
    onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse()
    }
});

const panels = document.querySelectorAll('.panel');
panels.forEach((panel, index) => {
        gsap.set(panel, {
        y: index * panel.offsetHeight, 
    });
});

const panelTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.cardsContainer', 
    pin: true,
    start: 'top 20%', 
    end: '1000px', 
    scrub: true 
  },
});

panels.forEach((panel, index) => {
    var currentPanel = `${index + 1}`;
    panelTimeline.to(panel, {
    y: -(index * panel.offsetHeight - index * 75), 
    duration: 5.5, 
    stagger: 1,
    delay: index * 2, 
    ease: 'circ.out', 
    onComplete: () => {
        switch (currentPanel) {
          case "1":
            break;
          case "2":
            $("#voicemodPanel").css('scale', '.94');
            $("[data-target='#voicemodPanel']").addClass('btn-outline-primary').removeClass('btn-primary');
            $("[data-target='#metaPanel']").addClass('btn-primary').removeClass('btn-outline-primary');
            break;
          case "3":
            $("#voicemodPanel").css('scale', '.86');
            $("#metaPanel").css('scale', '.94').css('marginTop', "-55px");
            $("[data-target='#metaPanel']").addClass('btn-outline-primary').removeClass('btn-primary');
            $("[data-target='#msftPanel']").addClass('btn-primary').removeClass('btn-outline-primary');
            $(".pin-spacer").css('zIndex', 99999);
            break;
          default:
        }
    },
    onReverseComplete: () => {
        switch (currentPanel) {
          case "1":
            break;
          case "2":
            $("#voicemodPanel").css('scale', '1');
            $("[data-target='#voicemodPanel']").addClass('btn-primary').removeClass('btn-outline-primary');
            $("[data-target='#metaPanel']").addClass('btn-outline-primary').removeClass('btn-primary');
            break;
          case "3":
            $("#metaPanel").css('scale', '1').css('marginTop', "0px");
            $("[data-target='#metaPanel']").addClass('btn-primary').removeClass('btn-outline-primary');
            $("[data-target='#msftPanel']").addClass('btn-outline-primary').removeClass('btn-primary');
            $(".pin-spacer").css('zIndex', '-1');
            break;
          default:
        }
    },
  });
});

gsap.registerPlugin(ScrollTrigger);

const cards = document.querySelectorAll(".design-card");

gsap.set(cards, {position: 'absolute'})

gsap.to(".design-card", {
    yPercent: -180,
    rotation: 32,
    stagger: 3,
    duration: 3.5,
    scrollTrigger: {
        trigger: ".design-cards",
        pin: true,
        scrub: true,
        start: "-15%",
        end: "1000px",
    }
});


const horizontalSections = gsap.utils.toArray('section.horizontal')

horizontalSections.forEach(function (sec, i) {  

    var thisPinWrap = sec.querySelector('.pin-wrap');
    var thisAnimWrap = thisPinWrap.querySelector('.animation-wrap');
    var getToValue = () => -($('.testimonialCard').width() * 5.8);

    gsap.set(horizontalSections, {marginTop: '-350px'})

    gsap.fromTo(thisAnimWrap, 
        { x: () => thisAnimWrap.classList.contains('to-right') ? 0 : getToValue()  },
        { x: () => thisAnimWrap.classList.contains('to-right') ? getToValue()  : 0, 
    ease: "none",
    scrollTrigger: {
        trigger: sec,
        start: "-50%",
        end: "+=1500px",
        pin: true,
        invalidateOnRefresh: true,
        scrub: true
        }
    });

    gsap.registerPlugin(ScrollTrigger);

}); 



gsap.registerPlugin(ScrollTrigger);
gsap.to('progress', {
  value: 100,
  ease: 'none',
  scrollTrigger: { scrub: 0.3 }
});


$(window).scroll(function() {
    $(this).scrollTop() > 800 ? $("#toTop").fadeIn("fast", function() {}) : $("#toTop").fadeOut("fast", function() {})
    }), $("#toTop").click(function() {
        return $("html, body").animate({
            scrollTop: 0
        }, 800)

});


