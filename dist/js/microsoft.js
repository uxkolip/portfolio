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
        lenis.scrollTo(this.getAttribute('href'))
        setTimeout(function() {
          showAnim.reverse();
        }, 3050);
      });
    })

    document.querySelectorAll('[data-target^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        lenis.scrollTo(this.getAttribute('data-target'))
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
    $(this).css("cursor", "grabbing"); // Change cursor to grabbing during drag
}).mouseup(function() {
    isDragging = false;
    $(this).css("cursor", "grab"); // Restore cursor to grab after drag
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
    $(this).css("cursor", "grabbing"); // Change cursor to grabbing during drag
}).mouseup(function() {
    isDraggingImprovements = false;
    $(this).css("cursor", "grab"); // Restore cursor to grab after drag
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
    $(this).css("cursor", "grabbing"); // Change cursor to grabbing during drag
}).mouseup(function() {
    isDraggingImages = false;
    $(this).css("cursor", "grab"); // Restore cursor to grab after drag
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
}
//show before and after end


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