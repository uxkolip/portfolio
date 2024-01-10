const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
const lenis = new Lenis();

lenis.stop();

function checkiftooltip() {
    $(window).width() > 768 ? ($('[data-toggle="tooltip"]').tooltip(), 
    $("[data-toggle='tooltip']").tooltip(),
    $('[data-toggle="tooltip"]').tooltip("enable")) : $('[data-toggle="tooltip"]').tooltip("disable");
}

function checkifLenis() {
  var isMobile = $(window).width() < 768;
  if (isMobile == false) {
    lenis.start();
  } else {
    lenis.destroy();
  }
}

$(document).ready(function() {

    checkiftooltip();
    lenis.start();
    $("body").removeClass("opacity-0");
    $("html").css("opacity", 1);

    //typeform
    (function() { 
      var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/";
      if(!gi.call(d,id)) { 
          js=ce.call(d,"script"); 
          js.id=id; 
          js.src=b+"embed.js"; 
          q=gt.call(d,"script")[0]; 
          q.parentNode.insertBefore(js,q) 
        }
    })();
    //typeform end
}); 

$(window).resize(function() {
    checkiftooltip();
});

//smooth scroll
lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    lenis.scrollTo(this.getAttribute('href'));
    bootstrap.Tooltip.getInstance('.close-button').dispose();
    setTimeout(function() {
      [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    }, 3050);
  });
})

document.querySelectorAll('[data-target^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    lenis.scrollTo(this.getAttribute('data-target'));
    bootstrap.Tooltip.getInstance('.close-button').dispose();        
    setTimeout(function() {
      [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    }, 3050);
  });
})

//scroll toTop
$(window).scroll(function() {
  $(this).scrollTop() > 800 ? $("#toTop").fadeIn("fast", function() {}) : $("#toTop").fadeOut("fast")
});
//scroll toTop end

//smooth scroll end


//navbar show on scroll up
/*const showAnim = gsap.from('.main-navbar', { 
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
});*/
//navbar show on scroll up end

// page progress
gsap.registerPlugin(ScrollTrigger);
gsap.to('.progress-circle', {
  strokeDashoffset: 0,
  ease: 'none',
  scrollTrigger: { scrub: 0.3 },
  onComplete: self => {
      $('.icon-wrap').addClass('bg-secondary');
      $('.icon--close path').css({ fill: '#3A2D52' })
  },
  onUpdate: self => {
      if ($('.progress-circle').css('stroke-dashoffset') !== "0px" ) {
          $('.icon-wrap').removeClass('bg-secondary');
          $('.icon--close path').css({ fill: '#3A2D52' })
      } 
  }
});
// page progress end






//drag to scroll
var isDragging = false;
var startX, scrollLeft;

$("#userJourneyScroll").mousedown(function(e) {
    e.preventDefault();
    isDragging = true;
    startX = e.pageX - $("#userJourneyScroll").offset().left;
    scrollLeft = $("#userJourneyScroll").scrollLeft();
    //$(this).css("cursor", "grabbing"); // Change cursor to grabbing during drag
    $(this).removeClass("grab");
    $(this).addClass("grabbing");
}).mouseup(function() {
    isDraggingImprovements = false;
    //$(this).css("cursor", "grab"); // Restore cursor to grab after drag
    $(this).addClass("grab");
    $(this).removeClass("grabbing");
});

$(document).mousemove(function(e) {
    e.preventDefault();
    if (!isDragging) return;
    var mouseX = e.pageX - $("#userJourneyScroll").offset().left;
    var distance = mouseX - startX;
    $("#userJourneyScroll").scrollLeft(scrollLeft - distance);
}).mouseup(function() {
    isDragging = false;
});




var isDraggingWireframes = false;
var startXWireframes, scrollLeftWireframes;

$("#wireframesScroll").mousedown(function(e) {
    e.preventDefault();
    isDraggingWireframes = true;
    startXWireframes = e.pageX - $("#wireframesScroll").offset().left;
    scrollLeftWireframes = $("#wireframesScroll").scrollLeft();
    //$(this).css("cursor", "grabbing"); // Change cursor to grabbing during drag
    $(this).removeClass("grab");
    $(this).addClass("grabbing");
}).mouseup(function() {
    isDraggingImprovements = false;
    //$(this).css("cursor", "grab"); // Restore cursor to grab after drag
    $(this).addClass("grab");
    $(this).removeClass("grabbing");
});

$(document).mousemove(function(e) {
    e.preventDefault();
    if (!isDraggingWireframes) return;
    var mouseX = e.pageX - $("#wireframesScroll").offset().left;
    var distance = mouseX - startXWireframes;
    $("#wireframesScroll").scrollLeft(scrollLeftWireframes - distance);
}).mouseup(function() {
    isDraggingWireframes = false;
});
//drag to scroll end



var isDragginginitMockups = false;
var startXinitMockups, scrollLeftinitMockups;

$("#initialMockupsScroll").mousedown(function(e) {
    e.preventDefault();
    isDragginginitMockups = true;
    startXinitMockups = e.pageX - $("#initialMockupsScroll").offset().left;
    scrollLeftinitMockups = $("#initialMockupsScroll").scrollLeft();
    //$(this).css("cursor", "grabbing"); // Change cursor to grabbing during drag
    $(this).removeClass("grab");
    $(this).addClass("grabbing");
}).mouseup(function() {
    isDraggingImprovements = false;
    //$(this).css("cursor", "grab"); // Restore cursor to grab after drag
    $(this).addClass("grab");
    $(this).removeClass("grabbing");
});

$(document).mousemove(function(e) {
    e.preventDefault();
    if (!isDragginginitMockups) return;
    var mouseX = e.pageX - $("#initialMockupsScroll").offset().left;
    var distance = mouseX - startXinitMockups;
    $("#initialMockupsScroll").scrollLeft(scrollLeftinitMockups - distance);
}).mouseup(function() {
    isDragginginitMockups = false;
});
//drag to scroll end

var isDraggingFinalMockups = false;
var startXFinalMockups, scrollLeftFinalMockups;

$("#finalMockupsScroll").mousedown(function(e) {
    e.preventDefault();
    isDraggingFinalMockups = true;
    startXFinalMockups = e.pageX - $("#finalMockupsScroll").offset().left;
    scrollLeftFinalMockups = $("#finalMockupsScroll").scrollLeft();
    //$(this).css("cursor", "grabbing"); // Change cursor to grabbing during drag
    $(this).removeClass("grab");
    $(this).addClass("grabbing");
}).mouseup(function() {
    isDraggingImprovements = false;
    //$(this).css("cursor", "grab"); // Restore cursor to grab after drag
    $(this).addClass("grab");
    $(this).removeClass("grabbing");
});

$(document).mousemove(function(e) {
    e.preventDefault();
    if (!isDraggingFinalMockups) return;
    var mouseX = e.pageX - $("#finalMockupsScroll").offset().left;
    var distance = mouseX - startXFinalMockups;
    $("#finalMockupsScroll").scrollLeft(scrollLeftFinalMockups - distance);
}).mouseup(function() {
    isDraggingFinalMockups = false;
});
//drag to scroll end


// horizontal scroll buttons scrollableDivImprovements
function checkScrollableLeftSpace($scrollableDiv) {
  const $btnLeft = $scrollableDiv.parent().find('.btn-left');

  if ($scrollableDiv.scrollLeft() <= 0) {
    $btnLeft.addClass('d-none');
  } else {
    $btnLeft.removeClass('d-none');
  }
}

function checkScrollableRightSpace($scrollableDiv) {
  const $btnRight = $scrollableDiv.parent().find('.btn-right');
  const maxScrollLeft = $scrollableDiv.get(0).scrollWidth - $scrollableDiv.width();

  if ($scrollableDiv.scrollLeft() >= maxScrollLeft) {
    $btnRight.addClass('d-none');
  } else {
    $btnRight.removeClass('d-none');
  }
}

// Function to handle manual scrolling
function handleManualScroll() {
  const $scrollableDiv = $(this);
  checkScrollableLeftSpace($scrollableDiv);
  checkScrollableRightSpace($scrollableDiv);
}

// Event listener for manual scrolling
$('.scrollableArea').on('scroll', handleManualScroll);

// Event handler for left button click
$('.btn-left').click(function() {
  const $scrollableDiv = $(this).parent().find('.scrollableArea');
  $scrollableDiv.animate({
    scrollLeft: '-=300px'
  }, 'fast');
  checkScrollableLeftSpace($scrollableDiv);
  checkScrollableRightSpace($scrollableDiv);
});

// Event handler for right button click
$('.btn-right').click(function() {
  const $scrollableDiv = $(this).parent().find('.scrollableArea');
  $scrollableDiv.animate({
    scrollLeft: '+=300px'
  }, 'fast');
  checkScrollableLeftSpace($scrollableDiv);
  checkScrollableRightSpace($scrollableDiv);
});

// Call these functions once to initialize the button visibility for all .scrollableArea elements
$('.scrollableArea').each(function() {
  checkScrollableLeftSpace($(this));
  checkScrollableRightSpace($(this));
});
// horizontal scroll buttons scrollableDivImprovements end


//page animations
/*if ($(window).scrollTop() === 0) {
  gsap.set(".anim01, .anim02, .anim03, .anim04, .anim05, .anim06", { opacity: "0" });
} else {
  gsap.set(".anim01, .anim02, .anim03, .anim04, .anim05, .anim06", { opacity: "1" });
}

const timeline = gsap.timeline();

timeline
  .add(gsap.to(".anim01", { delay: 1, duration: 1, opacity: 1 }))
  .add(gsap.to(".anim02", { duration: 1, opacity: 1 }), "-=0.3")
  .add(gsap.to(".anim03", { duration: 1, opacity: 1 }), "-=0.3")
  .add(gsap.to(".anim04", { duration: 1, opacity: 1 }), "-=0.3")
  .add(gsap.to(".anim05", { duration: 1, opacity: 1 }), "-=0.3")
  .add(gsap.to(".anim06", { duration: 1, opacity: 1 }), "-=0.3");*/
//page animations end

//sidemenu accordionWorks
$('.workAccordion').click(function() {
  if ($(this).attr('aria-expanded') === 'true') {
    $(this).find('svg').css('transform', 'rotate(90deg)');
  } else {
    $(this).find('svg').css('transform', 'none');
  }
});
//sidemenu accordionWorks end

//sidemenu show more removal
$(document).on('click', '#collapseAdditionalWork', function(){
  $('.thisGoes').remove();
  $('#collapseAdditionalWork').removeClass('d-none');
});
//sidemenu show more removal end