gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

tl.to(".text-section", {
  x: "translateX(0%)",
  duration: 0.7,
})
  .to(".page1-h1", {
    y: "15%",
    duration: 0.6,
    delay: 0.2,
    ease: "back.out",
  })
  .to(".text-section", {
    borderBottom: "1",
    duration: 0.2,
  });
gsap.to(".alp-1", {
  y: "10%",
  scrollTrigger: {
    trigger: ".alp-1",
    start: "top 20%",
    end: "bottom 80%",
    // markers: true,
    scrub: true,
  },
});
gsap.to(".alp-2", {
  y: "20%",
  scrollTrigger: {
    trigger: ".alp-2",
    start: "top 20%",
    end: "bottom 80%",
    // markers: true,
    scrub: true,
  },
});
gsap.to(".alp-3", {
  y: "30%",
  scrollTrigger: {
    trigger: ".alp-3",
    start: "top 20%",
    end: "bottom 80%",
    // markers: true,
    scrub: true,
  },
});
gsap.to(".alp-4", {
  y: "40%",
  scrollTrigger: {
    trigger: ".alp-4",
    start: "top 20%",
    end: "bottom 80%",
    // markers: true,
    scrub: true,
  },
});
gsap.to(".alp-5", {
  y: "50%",
  scrollTrigger: {
    trigger: ".alp-5",
    start: "top 20%",
    end: "bottom 80%",
    // markers: true,
    scrub: true,
  },
});
