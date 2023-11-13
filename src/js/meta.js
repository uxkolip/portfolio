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

    var opporunityHeight = $('.opportunityHeight').outerHeight();
    var dottedBGHeight = $('.dotted-bg').outerHeight();
    setTimeout(function() {
      $('body').append("<style> .opporunityAfter:after { height: "+ opporunityHeight +"px; } .dotted-bg:after { height: "+ dottedBGHeight +"px; } </style>");
    }, 700);

    checkiftooltip();
    //checkifLenis();
    lenis.start();
    $("body").removeClass("opacity-0");
    $("html").css("opacity", 1);
}); 

$(window).resize(function() {
    checkiftooltip();

    var opporunityHeight = $('.opportunityHeight').outerHeight();
    var dottedBGHeight = $('.dotted-bg').outerHeight();
    $('body').append("<style> .opporunityAfter:after { height: "+ opporunityHeight +"px; } .dotted-bg:after { height: "+ dottedBGHeight +"px; } </style>");

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

// checks if elem is in view
function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
// checks if elem is in view end


//lottie
/*$(document).on('scroll', function() {
    if (isScrolledIntoView($('.lottieRow'))) {
        if (!$('#lottiePlaya').length) {
            $('.lottieRow').html('<dotlottie-player id="lottiePlaya" autoplay="false" loop mode="normal" src="js/lottie-files/meta-hero-lottie-2.lottie" style="max-height: 650px" class="w-100"></dotlottie-player>');    
        }        
        setTimeout(function() {
            const player = document.getElementById("lottiePlaya");
            player.play();
        }, 500);
    }
});*/
//lottie end


//voiceflow
(function(d, t) {
  var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
  v.onload = function() {
    window.voiceflow.chat.load({
      verify: { projectID: '64f776b3d0a6dd00073f976a' },
      url: 'https://general-runtime.voiceflow.com',
      versionID: 'production'
    });
  }
  v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; 
  v.type = "text/javascript"; 
  s.parentNode.insertBefore(v, s);
})(document, 'script');
//voiceflow end


//figma iframe loader
function loadIframe() {
    const iframeContainer = document.getElementById('iframeContainer');
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fe44ChloeUsy3j33N2e2Fv3%2FEnnely%252C-user-journey%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DHltnsOoRKN7jZkYN-1'; // Replace with your iframe source URL
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.style.border = 'none';
    iframe.setAttribute('allowfullscreen', 'true');

    // Append the iframe to the container
    iframeContainer.appendChild(iframe);
    setTimeout(function() {
        $('.figmaLoader').remove();
    }, 3300);
}

// Intersection Observer configuration
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Adjust the threshold as needed
};

// Create the Intersection Observer
const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            // Load the iframe when it becomes visible
            loadIframe();

            // Disconnect the observer after loading
            observer.disconnect();
        }
    });
}, options);

// Start observing the iframe container
observer.observe(document.getElementById('iframeContainer'));
//figma iframe loader end


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
if ($(window).scrollTop() === 0) {
  gsap.set(".anim01, .anim02, .anim03, .anim04, .anim05", { opacity: "0" });
} else {
  gsap.set(".anim01, .anim02, .anim03, .anim04, .anim05", { opacity: "1" });
}

const timeline = gsap.timeline();

timeline
  .add(gsap.to(".anim01", { delay: 1, duration: 1, opacity: 1 }))
  .add(gsap.to(".anim02", { duration: 1, opacity: 1 }), "-=0.3")
  .add(gsap.to(".anim03", { duration: 1, opacity: 1 }), "-=0.3")
  .add(gsap.to(".anim04", { duration: 1, opacity: 1 }), "-=0.3")
  .add(gsap.to(".anim05", { duration: 1, opacity: 1 }), "-=0.3");
//page animations end


//navbar dropdown show on hover
let trigger = document.getElementById('worksDropdown');

document.getElementById('worksDropdown').addEventListener("mouseover", ()=>{
    if (!$(trigger).hasClass('show')) {
      bootstrap.Dropdown.getOrCreateInstance(trigger).toggle()
    }
});

document.getElementById('dropdown-menu').addEventListener("mouseleave", ()=>{
    bootstrap.Dropdown.getOrCreateInstance(trigger).toggle()
    if (!$(trigger).hasClass('show')) {
      $("#ddImgContainer").attr("src", "img/misc/illustrations/spying.svg");
      $("#ddImgContainer").attr("alt", "Spying illustration");
    }
});

$(".ddLink").on("mouseover", function () {
  var className = $(this).attr("class").split(" ")[1]; // Get the second class name
  switch (className) {
    case "voicemodDD":
      $("#ddImgContainer").attr("src", "img/misc/logos/voicemod-logo-card.svg");
      $("#ddImgContainer").attr("alt", "Voicemod logo");
      break;
    case "metaDD":
      $("#ddImgContainer").attr("src", "img/misc/logos/meta-logo-card.svg");
      $("#ddImgContainer").attr("alt", "Meta logo");
      break;
    case "msftDD":
      $("#ddImgContainer").attr("src", "img/misc/logos/msft-logo-card.svg");
      $("#ddImgContainer").attr("alt", "Microsoft logo");
      break;
    case "accusonusDD":
      $("#ddImgContainer").attr("src", "img/misc/logos/accusonus-logo.svg");
      $("#ddImgContainer").attr("alt", "accusonus logo");
      break;
    default:
      break;
  }
});
//navbar dropdown show on hover end