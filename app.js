
const dashboard = document.querySelector(".Dashboard");
const glow = document.querySelector(".mouse-glow");

dashboard.addEventListener("mousemove", function(e) {

    const rect = dashboard.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    glow.style.left = x + "px";
    glow.style.top = y + "px";

});

//NAVBAR RESPOSIVE
//   const menuBtn = document.getElementById('menuBtn');
//     const navLinks = document.getElementById('navLinks');
//     const navLogin = document.getElementById('navLogin');
//     const icon = menuBtn.querySelector('i');

//     menuBtn.addEventListener('click', () => {
//         navLinks.classList.toggle('active');
//         navLogin.classList.toggle('active');
//         const isOpen = navLinks.classList.contains('active');
//         icon.classList.toggle('fa-bars', !isOpen);
//         icon.classList.toggle('fa-xmark', isOpen);
//     });


// MENU  btn 


let menuBtn = document.querySelector('#menuBtn');
let nav = document.getElementById('nav');
let logo = document.querySelector('#logo');
let login = document.querySelector('#navlogin');
let xBar = document.querySelector('#xBar');
let logoText = document.querySelector('.text');
let content = document.querySelector('#navLinks');



     menuBtn.addEventListener('click',(det) => {
        nav.classList.add('active');
      if((det.target.parentElement)){
        logo.style.display = 'none';
        logoText.style.display = 'none';
        menuBtn.style.display = 'none';
        xBar.style.display = 'flex';
        content.style.display ='flex';
        login.style.width = '35px';
      } 

    } );
      xBar.addEventListener('click',()=>{
         nav.classList.remove('active');
            menuBtn.style.display ='flex'; 
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

      demo.addEventListener('click', (dets)=>{
          video.play();
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