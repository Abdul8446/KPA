function valueSetters(){
    gsap.set(".hero-inner span .child", {y:"100%"})
}


function revealToSpan(){
    document.querySelectorAll(".reveal")
    .forEach(elem => {
        // create two spans
        var parent = document.createElement("span")
        var child = document.createElement("span")
    
        // parent and child both sets their respective classes
        parent.classList.add("parent")
        child.classList.add("child")
    
        // span parent gets child and child gets elem details
        child.innerHTML = elem.innerHTML
        parent.appendChild(child)
    
        // elem replaces its value with parent span
        elem.innerHTML = ""
        elem.appendChild(parent)
    })
}


function loaderAnimation() {
    var tl = gsap.timeline();
    tl
    .from("#loader .child span", {
        x: 100,
        stagger: 0.2,
        duration: 0.5,
        ease: Power3.easeInOut
    })
    .to("#loader .parent .child", {
        y: "-110%",
        duration: 0,
        ease: Circ.easeInOut
    })
    .to("#loader, #green", {
        height: 0,
        duration: 1,
        ease: Circ.easeInOut,
        delay: function(index, target){
            return target.id === "green" ? ".2" : "0";
        },
        onStart: function() {
            // animateHomepage(); // Call animateHomepage immediately when the animation starts
            setTimeout(animateHomepage, 200);
        },
    })
}






function animateHomepage(){
    var tl = gsap.timeline()

    tl
    .to(".hero-inner .parent .child", {
        y:0,
        // stagger: .1,
        duration: 1,
        ease: Expo.easeInOut
    })
    // .to(".hero-inner .row img", {
    //     opacity: 1,
    //     ease: Expo.easeInOut,
    //     onComplete: function(){
    //         animateSvg()
    //     }
    // })
}

function animateSvg() {
    document.querySelectorAll("#kingpinsLoader path").forEach(function (e) {
        console.log(e.getTotalLength())
        // var character = e.childNodes[0].childNodes[0]
        e.style.strokeDasharray = e.getTotalLength() + 'px';
        e.style.strokeDashoffset = e.getTotalLength() + 'px';
    }) 
    gsap.to("#kingpinsLoader path,#kingpinsLoader mask>path", {
        strokeDashoffset: 0,
        // fill:'#EBE5D5',
        duration: 3,
        ease: "expo.inOut"
    })
    gsap.to("#kingpinsLoader path,#kingpinsLoader mask>path", {
        fill:'#EBE5D5',
        duration: 1,
        ease: "power2.out",
        onComplete: function() {
            loaderAnimation(); // Call animateHomepage after green animation completes
        }
    }, "-=1"); // Overlap the fill animation with the end of the stroke animation
    
}

function locoInitialize(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}

function cardHoverEffect(){
    document.querySelectorAll(".cnt")
    .forEach(function(cnt){
        var showImage;
        cnt.addEventListener("mousemove",function(dets){
            // Calculate the position for the follower
            const offsetX = 20 // 1vw in pixels
            const offsetY = 20// 1vh in pixels

            document.querySelector('#cursor').children[dets.target.dataset.index].style.opacity = 1;
            document.querySelector('#cursor').children[dets.target.dataset.index].style.transform = `translate(${dets.clientX + offsetX}px, ${dets.clientY + offsetY}px)`;
            // document.querySelector('#cursor').children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
            showImage = dets.target
            showImage.style.filter = 'grayscale(1)'
            document.querySelector('#work').style.backgroundColor = dets.target.dataset.color
        })
        cnt.addEventListener("mouseleave",function(dets){
            document.querySelector('#cursor').children[showImage.dataset.index].style.opacity = 0;
            showImage.style.filter = 'grayscale(0)'
            document.querySelector('#work').style.backgroundColor = '#F2F2F2'
        })
    })
}


revealToSpan()

valueSetters()

animateSvg()



