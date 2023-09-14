function checkiftooltip() {

    $(window).width() > 768 ? ($('[data-toggle="tooltip"]').tooltip(), 
    $('[data-toggle="tooltip"]').tooltip("enable")) : $('[data-toggle="tooltip"]').tooltip("disable")

    $("[data-toggle='tooltip']").tooltip();

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

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
        lenis.scrollTo(this.getAttribute('href'));
        setTimeout(function() {
          showAnim.reverse();
        }, 3050);
      });
    })

    document.querySelectorAll('[data-target^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        lenis.scrollTo(this.getAttribute('data-target'));
        setTimeout(function() {
          showAnim.reverse();
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






//drag to scroll
var isDragging = false;
var startX, scrollLeft;

$("#userJourneyScroll").mousedown(function(e) {
    e.preventDefault();
    isDragging = true;
    startX = e.pageX - $("#userJourneyScroll").offset().left;
    scrollLeft = $("#userJourneyScroll").scrollLeft();
    $(this).css("cursor", "grabbing"); // Change cursor to grabbing during drag
}).mouseup(function() {
    isDragging = false;
    $(this).css("cursor", "grab"); // Restore cursor to grab after drag
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
    $(this).css("cursor", "grabbing"); // Change cursor to grabbing during drag
}).mouseup(function() {
    isDraggingWireframes = false;
    $(this).css("cursor", "grab"); // Restore cursor to grab after drag
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




//lottie
const player = document.getElementById("lottiePlaya");

// Play as soon as the animation is visible
player.playOnShow();

// Options:
player.playOnShow({
    threshold: [0.25],
    autoplay: false
});

// Stop playing on show
player.stopPlayOnShow();

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