const tooltipTriggerList=document.querySelectorAll('[data-bs-toggle="tooltip"]'),tooltipList=[...tooltipTriggerList].map(e=>new bootstrap.Tooltip(e)),lenis=new Lenis;function checkiftooltip(){$(window).width()>768?($('[data-toggle="tooltip"]').tooltip(),$("[data-toggle='tooltip']").tooltip(),$('[data-toggle="tooltip"]').tooltip("enable")):$('[data-toggle="tooltip"]').tooltip("disable")}function checkifLenis(){0==$(window).width()<768?lenis.start():lenis.destroy()}function raf(e){lenis.raf(e),requestAnimationFrame(raf)}lenis.stop(),$(document).ready(function(){var e,t,o,r,s,l,i;checkiftooltip(),lenis.start(),$("body").removeClass("opacity-0"),$("html").css("opacity",1),o=document,r=o.getElementById,s=o.createElement,l=o.getElementsByTagName,i="typef_orm_share",r.call(o,i)||((e=s.call(o,"script")).id=i,e.src="https://embed.typeform.com/embed.js",(t=l.call(o,"script")[0]).parentNode.insertBefore(e,t))}),$(window).resize(function(){checkiftooltip()}),lenis.on("scroll",ScrollTrigger.update),gsap.ticker.add(e=>{lenis.raf(1e3*e)}),gsap.ticker.lagSmoothing(0),requestAnimationFrame(raf),document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation(),lenis.scrollTo(this.getAttribute("href")),bootstrap.Tooltip.getInstance(".close-button").dispose(),setTimeout(function(){[...tooltipTriggerList].map(e=>new bootstrap.Tooltip(e))},3050)})}),document.querySelectorAll('[data-target^="#"]').forEach(e=>{e.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation(),lenis.scrollTo(this.getAttribute("data-target")),bootstrap.Tooltip.getInstance(".close-button").dispose(),setTimeout(function(){[...tooltipTriggerList].map(e=>new bootstrap.Tooltip(e))},3050)})}),$(window).scroll(function(){$(this).scrollTop()>800?$("#toTop").fadeIn("fast",function(){}):$("#toTop").fadeOut("fast")}),gsap.registerPlugin(ScrollTrigger),gsap.to(".progress-circle",{strokeDashoffset:0,ease:"none",scrollTrigger:{scrub:.3},onComplete:e=>{$(".icon-wrap").addClass("bg-secondary"),$(".icon--close path").css({fill:"#3A2D52"})},onUpdate:e=>{"0px"!==$(".progress-circle").css("stroke-dashoffset")&&($(".icon-wrap").removeClass("bg-secondary"),$(".icon--close path").css({fill:"#3A2D52"}))}});var startX,scrollLeft,isDragging=!1;$("#userJourneyScroll").mousedown(function(e){e.preventDefault(),isDragging=!0,startX=e.pageX-$("#userJourneyScroll").offset().left,scrollLeft=$("#userJourneyScroll").scrollLeft(),$(this).removeClass("grab"),$(this).addClass("grabbing")}).mouseup(function(){isDraggingImprovements=!1,$(this).addClass("grab"),$(this).removeClass("grabbing")}),$(document).mousemove(function(e){if(e.preventDefault(),isDragging){var t=e.pageX-$("#userJourneyScroll").offset().left-startX;$("#userJourneyScroll").scrollLeft(scrollLeft-t)}}).mouseup(function(){isDragging=!1});var startXWireframes,scrollLeftWireframes,isDraggingWireframes=!1;function isScrolledIntoView(e){var t=$(window).scrollTop(),o=t+$(window).height(),r=$(e).offset().top;return r+$(e).height()<=o&&r>=t}function loadIframe(){const e=document.getElementById("iframeContainer"),t=document.createElement("iframe");t.src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fe44ChloeUsy3j33N2e2Fv3%2FEnnely%252C-user-journey%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DHltnsOoRKN7jZkYN-1",t.width="100%",t.height="100%",t.style.border="none",t.setAttribute("allowfullscreen","true"),e.appendChild(t),t.addEventListener("load",()=>{$(".figmaLoader").remove()})}$("#wireframesScroll").mousedown(function(e){e.preventDefault(),isDraggingWireframes=!0,startXWireframes=e.pageX-$("#wireframesScroll").offset().left,scrollLeftWireframes=$("#wireframesScroll").scrollLeft(),$(this).removeClass("grab"),$(this).addClass("grabbing")}).mouseup(function(){isDraggingImprovements=!1,$(this).addClass("grab"),$(this).removeClass("grabbing")}),$(document).mousemove(function(e){if(e.preventDefault(),isDraggingWireframes){var t=e.pageX-$("#wireframesScroll").offset().left-startXWireframes;$("#wireframesScroll").scrollLeft(scrollLeftWireframes-t)}}).mouseup(function(){isDraggingWireframes=!1});const options={root:null,rootMargin:"0px",threshold:.1},observer=new IntersectionObserver(function(e,t){e.forEach(function(e){e.isIntersecting&&(loadIframe(),t.disconnect())})},options);function checkScrollableLeftSpace(e){const t=e.parent().find(".btn-left");e.scrollLeft()<=0?t.addClass("d-none"):t.removeClass("d-none")}function checkScrollableRightSpace(e){const t=e.parent().find(".btn-right"),o=e.get(0).scrollWidth-e.width();e.scrollLeft()>=o?t.addClass("d-none"):t.removeClass("d-none")}function handleManualScroll(){const e=$(this);checkScrollableLeftSpace(e),checkScrollableRightSpace(e)}observer.observe(document.getElementById("iframeContainer")),$(".scrollableArea").on("scroll",handleManualScroll),$(".btn-left").click(function(){const e=$(this).parent().find(".scrollableArea");e.animate({scrollLeft:"-=300px"},"fast"),checkScrollableLeftSpace(e),checkScrollableRightSpace(e)}),$(".btn-right").click(function(){const e=$(this).parent().find(".scrollableArea");e.animate({scrollLeft:"+=300px"},"fast"),checkScrollableLeftSpace(e),checkScrollableRightSpace(e)}),$(".scrollableArea").each(function(){checkScrollableLeftSpace($(this)),checkScrollableRightSpace($(this))}),$(".workAccordion").click(function(){"true"===$(this).attr("aria-expanded")?$(this).find("svg").css("transform","rotate(90deg)"):$(this).find("svg").css("transform","none")});