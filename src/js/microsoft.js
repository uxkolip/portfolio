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
    lenis.scrollTo(this.getAttribute('href'))
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
    lenis.scrollTo(this.getAttribute('data-target'))
    bootstrap.Tooltip.getInstance('.close-button').dispose();
    setTimeout(function() {
      [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    }, 3050);
  });
})

//scroll toTop
$(window).scroll(function() {
  $(this).scrollTop() > 800 ? $("#toTop").fadeIn("fast") : $("#toTop").fadeOut("fast")
});
//scroll toTop end
 

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

//old - new switch
 $(document).on("click", "#oldNewSwitch", function() {
    // Check if the switch is checked or not
    if ($(this).prop("checked")) {
        // If checked, change the image source to image2.jpg
        $("#oldNewImageContainer").attr("src", "img/misc/elements/power-automate-desktop.png");
        $("#oldNewImageContainer").attr("alt", "Screenshot from Power Automate Desktop");
    } else {
        // If not checked, change the image source back to image1.png
        $("#oldNewImageContainer").attr("src", "img/misc/elements/winautomation-old.png");
        $("#oldNewImageContainer").attr("alt", "Screenshot from WinAutomation");
    }
});
//old - new switch end


 //accessibility switch
 $(document).on("click", "#accessibilitySwitch", function() {
    // Check if the switch is checked or not
    if ($(this).prop("checked")) {
        // If checked, change the image source to image2.jpg
        $("#accessibilityImgContainer").attr("src", "img/misc/elements/pad-high-contrast.png");
        $("#accessibilityImgContainer").attr("alt", "High contrast version");
    } else {
        // If not checked, change the image source back to image1.jpg
        $("#accessibilityImgContainer").attr("src", "img/misc/elements/pad-no-high-contrast.png");
        $("#accessibilityImgContainer").attr("alt", "Regular version");
    }
});
//accessibility switch end

//before and after hori scroll
var $scrollableDiv1 = $("#scrollableDiv1");
var $scrollableDiv2 = $("#scrollableDiv2");

$("#scrollableDiv2").on('scroll', function() {
    var scrollPositionLeft = $scrollableDiv2.scrollLeft();
    $scrollableDiv1.scrollLeft(scrollPositionLeft);
});
//before and after hori scroll end


//drag scroll thingy
var isDragging = false;
var startX, scrollLeft;

$("#scrollableDiv2, #scrollableDiv1").mousedown(function(e) {
    e.preventDefault();
    isDragging = true;
    startX = e.pageX - $("#scrollableDiv2").offset().left;
    scrollLeft = $("#scrollableDiv2").scrollLeft();
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
    var mouseX = e.pageX - $("#scrollableDiv2").offset().left;
    var distance = mouseX - startX;
    $("#scrollableDiv2").scrollLeft(scrollLeft - distance);
}).mouseup(function() {
    isDragging = false;
});






var isDraggingImprovements = false;
var startXImprovements, scrollLeftImprovements;

$("#scrollableDivImprovements").mousedown(function(e) {
    e.preventDefault();
    isDraggingImprovements = true;
    startXImprovements = e.pageX - $("#scrollableDivImprovements").offset().left;
    scrollLeftImprovements = $("#scrollableDivImprovements").scrollLeft();
    
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
    if (!isDraggingImprovements) return;
    var mouseX = e.pageX - $("#scrollableDivImprovements").offset().left;
    var distanceImprovements = mouseX - startXImprovements;
    $("#scrollableDivImprovements").scrollLeft(scrollLeftImprovements - distanceImprovements);
}).mouseup(function() {
    isDraggingImprovements = false;
});






var isDraggingImages = false;
var startXImages, scrollLeftImages;

$("#scrollableDivImages").mousedown(function(e) {
    e.preventDefault();
    isDraggingImages = true;
    startXImages = e.pageX - $("#scrollableDivImages").offset().left;
    scrollLeftImages = $("#scrollableDivImages").scrollLeft();
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
    if (!isDraggingImages) return;
    var mouseX = e.pageX - $("#scrollableDivImages").offset().left;
    var distanceImages = mouseX - startXImages;
    $("#scrollableDivImages").scrollLeft(scrollLeftImages - distanceImages);
}).mouseup(function() {
    isDraggingImages = false;
});
//drag scroll thingy end



//show before and after
function showBeforeAfter() {
  $('#beforeAfter').removeClass('d-none');
  $('.beforeAfterBtn').addClass('d-none');
  lenis.scrollTo('#beforeAfter');
  $('.scrollableArea').scroll();
  setTimeout(function() {
    var dottedBGHeight = $('.dotted-bg').outerHeight();
    $('body').append("<style> .dotted-bg:after { height: "+ dottedBGHeight +"px; } </style>");    
  }, 100);
}
//show before and after end


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
  gsap.set(".anim01, .anim02, .anim03, .anim04, .anim05", { opacity: "0" });
} else {
  gsap.set(".anim01, .anim02, .anim03, .anim04, .anim05", { opacity: "1" });
} 

const timeline = gsap.timeline();

timeline
  .add(gsap.to(".anim01", { duration: 1, opacity: 1 }), "-=0.3")
  .add(gsap.to(".anim02", { duration: 1, opacity: 1 }), "-=0.3")
  .add(gsap.to(".anim03", { duration: 1, opacity: 1 }), "-=0.3")
  .add(gsap.to(".anim04", { duration: 1, opacity: 1 }), "-=0.3")
  .add(gsap.to(".anim05", { duration: 1, opacity: 1 }), "-=0.3");*/
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