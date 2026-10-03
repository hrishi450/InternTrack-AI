
const dashboard = document.querySelector(".Dashboard");
const glow = document.querySelector(".mouse-glow");

dashboard.addEventListener("mousemove", function (e) {

  const rect = dashboard.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  glow.style.left = x + "px";
  glow.style.top = y + "px";

});
const cursor = document.querySelector(".cursor");
const cursorBlur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove", function (e) {

  cursor.style.left = e.clientX - 10 + "px";
  cursor.style.top = e.clientY - 10 + "px";
  cursorBlur.style.left = e.clientX + "px";
  cursorBlur.style.top = e.clientY + "px";
});

// MENU  BUTTON 

let menuBtn = document.querySelector('#menuBtn');
let nav = document.getElementById('nav');
let logo = document.querySelector('#logo');
let login = document.querySelector('#navlogin');
let xBar = document.querySelector('#xBar');
let logoText = document.querySelector('.text');
let content = document.querySelector('#navLinks');



menuBtn.addEventListener('click', (det) => {
  nav.classList.add('active');
  if ((det.target.parentElement)) {
    logo.style.display = 'none';
    logoText.style.display = 'none';
    menuBtn.style.display = 'none';
    xBar.style.display = 'flex';
    content.style.display = 'flex';
    login.style.width = '35px';
  }


});
xBar.addEventListener('click', () => {
  nav.classList.remove('active');
  menuBtn.style.display = 'flex';
  xBar.style.display = 'none';
  logo.style.display = 'flex';
  logoText.style.display = 'flex';
  content.style.display = 'none';
  login.style.display = 'none';
});



// VIDEO SECTION

const video = document.getElementById('myVideo');
const playBtn = document.getElementById('playBtn');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const muteBtn = document.getElementById('muteBtn');
const volIcon = document.getElementById('volIcon');
const muteIcon = document.getElementById('muteIcon');
const fullscreenBtn = document.getElementById('fullscreenBtn');

let demo = document.querySelector('.btn2');

demo.addEventListener('click', (dets) => {
  video.play();
  video.scrollIntoView({
    behavior: "smooth"
  });
  if (video.play) {
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'block';
    playBtn.style.height = "20px";
    playBtn.style.width = "20px";
    muteBtn.style.height = "20px";
    muteBtn.style.width = "20px";
    fullscreenBtn.style.height = "20px";
    fullscreenBtn.style.width = "20px";
  }

});
playBtn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'block';
    playBtn.style.height = "20px";
    playBtn.style.width = "20px";
    muteBtn.style.height = "20px";
    muteBtn.style.width = "20px";
    fullscreenBtn.style.height = "20px";
    fullscreenBtn.style.width = "20px";


  } else {
    video.pause();
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
  }
});

muteBtn.addEventListener('click', () => {
  video.muted = !video.muted;
  volIcon.style.display = video.muted ? 'none' : 'block';
  muteIcon.style.display = video.muted ? 'block' : 'none';
});

fullscreenBtn.addEventListener('click', () => {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  }
});



// PAGE SECTION


let feature = document.getElementById("feature");
feature.addEventListener("click", function () {
  document.querySelector(".features").scrollIntoView({
    behavior: "smooth"
  });
});

let Role = document.getElementById("role");
Role.addEventListener('click', function () {
  document.querySelector(".role").scrollIntoView({
    behavior: "smooth"
  });
});

let Ai = document.getElementById("ai");
Ai.addEventListener('click', function () {
  document.querySelector(".Dashboard").scrollIntoView({
    behavior: "smooth"
  });
});

let impact = document.getElementById("impact");
impact.addEventListener('click', function () {
  document.querySelector(".testimonials").scrollIntoView({
    behavior: "smooth"
  });
});


gsap.from(".heading h1,.heading h2,.heading2", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.3
})

gsap.from(".fea-1 h5,.fea-2 h4,.fea-2 i,.fea-2 h5", {
  y: 60,
  duration: 1,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".features",
    scroller: "body",
    start: "top 80%",
    end: "top 50%",
    scrub: 3
  }
})
const tl = gsap.timeline()

tl.from('.fea-3 .box1,.fea-3 .box2,.fea-3 .box3,.fea-3 .box4', {
  y: 50,
  duration: 1,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".fea-3",
    start: "top 80%",
    end: "top 40%",
    scrub: 3
  }
})

tl.from('.role1 h5,.role1 h2,.role1 h4', {
  y: 50,
  duration: 1,
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".role",
    scroller: "body",
    start: "top 80%",
    end: "top 40%",
    scrub: 3
  }
})
tl.from('.role2 .box1, .role2 .box2, .role2 .box3,.role2 .box4', {
  y: 55,
  duration: 0.5,
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".role2",
    scroller: "body",
    start: "top 80%",
    end: "top 40%",
    scrub: 3
  }
})

gsap.from('.Dashboard', {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".Dashboard",
    scroller: "body",
    start: "top 80%",
    end: "top 50%",
    scrub: 3
  }
})

gsap.from('.testimonials h5,.test-heading', {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".testimonials",
    scroller: "body",
    start: "top 70%",
    end: "top 50%",
    scrub: 3
  }
})

tl.from('.test-card', {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".test-cards",
    scroller: "body",
    start: "top 80%",
    end: "top 50%",
    scrub: 3
  }
})

gsap.from('.lastbox', {
  y: 30,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".lastbox",
    scroller: "body",
    start: "top 80%",
    end: "top 50%",
    scrub: 3
  }
})

gsap.from('.footer', {
  y: 30,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".footer",
    scroller: "body",
    start: "top 80%",
    end: "top 50%",
    scrub: 3
  }
})
