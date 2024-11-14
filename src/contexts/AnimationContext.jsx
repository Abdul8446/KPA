// AnimationContext.js
import React, { createContext, useContext, useEffect } from 'react';
import { gsap } from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';

// Create the Animation Context
const AnimationContext = createContext();

// Custom hook to use the Animation Context
export const useAnimations = () => {
  return useContext(AnimationContext);
};

// Animation Provider
export const AnimationProvider = ({ children }) => {
  useEffect(() => {
    // Call the functions when the provider mounts
    revealToSpan();
    valueSetters();
    animateSvg();
    // locoInitialize();
    // cardHoverEffect();
  }, []);

  function valueSetters() {
    gsap.set(".your-path>span,.your-path>strong>span", { y: "100%",position:'relative',top:'120px',opacity:0 });
  }

  function revealToSpan() {
    document.querySelectorAll(".reveal").forEach(elem => {
      const parent = document.createElement("span");
      const child = document.createElement("span");
      parent.classList.add("parent");
      child.classList.add("child");
      child.innerHTML = elem.innerHTML;
      parent.appendChild(child);
      elem.innerHTML = "";
      elem.appendChild(parent);
    });
  }

  function animateSvg() {
    document.querySelectorAll("#kingpinsLoader path").forEach(function (e) {
      e.style.strokeDasharray = e.getTotalLength() + 'px';
      e.style.strokeDashoffset = e.getTotalLength() + 'px';
    });
    gsap.to("#kingpinsLoader path,#kingpinsLoader mask path", {
      strokeDashoffset: 0,
      duration: 2,
      ease: "expo.inOut"
    });
    gsap.to("#kingpinsLoader>path", {
      fill:'#B68C49'  ,
      duration: 1.5,
      delay:1, 
      ease: "power2.out",
      onComplete: loaderAnimation,
    });
  }

  function loaderAnimation() {
    gsap.to("#loader .parent .child", {
        y: "-100%",
        autoAlpha: 0,
        ease: "power4.out",
        duration: 1,
    })
    gsap.to("#kingpinsLoader>path",{
        y:'-200%',
        duration:1,
        ease:'power4.out',
        autoAlpha:0,
        stagger: 0.02
      })
      gsap.to("#loader, #green", {
        height: 0,
        duration: 1,
        ease: "Circ.easeInOut",
        delay: (index, target) => (target.id === "green" ? ".7" : ".3"),
        onStart: () => {
          setTimeout(animateHomepage, 800);
        },
      });
  }

  function animateHomepage() {
    const tl = gsap.timeline();
    tl.to(".your-path>span", {
      top: 0,
      opacity:1,
      duration: .6,
      stagger: 0.05,
      ease: 'Power4.easeOut',
    //   delay:.2,
      onStart: () => {
          tl.to(".your-path>strong>span",{
            top: 0,
            opacity:1,
            duration: .6,
            stagger: 0.05,
            ease: 'Power4.easeOut',
            delay:-1,
          })
      }
    });
  }

  function locoInitialize() {
    // new LocomotiveScroll({
    //   el: document.querySelector('.hero-section'), // Adjust based on your structure
    //   smooth: true
    // });
    new LocomotiveScroll({
        el: document.querySelector('.course-section'), // Adjust based on your structure
        smooth: true
      });
  }

  function cardHoverEffect() {
    document.querySelectorAll(".cnt").forEach(function (cnt) {
      let showImage;
      cnt.addEventListener("mousemove", function (dets) {
        const offsetX = 20;
        const offsetY = 20;

        document.querySelector('#cursor').children[dets.target.dataset.index].style.opacity = 1;
        document.querySelector('#cursor').children[dets.target.dataset.index].style.transform = `translate(${dets.clientX + offsetX}px, ${dets.clientY + offsetY}px)`;
        showImage = dets.target;
        showImage.style.filter = 'grayscale(1)';
        document.querySelector('#work').style.backgroundColor = dets.target.dataset.color;
      });
      cnt.addEventListener("mouseleave", function () {
        document.querySelector('#cursor').children[showImage.dataset.index].style.opacity = 0;
        showImage.style.filter = 'grayscale(0)';
        document.querySelector('#work').style.backgroundColor = '#F2F2F2';
      });
    });
  }

  return (
    <AnimationContext.Provider value={{ /* Optionally add functions here to be used in components */ }}>
      {children}
    </AnimationContext.Provider>
  );
};
