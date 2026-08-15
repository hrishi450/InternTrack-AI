const features = document.querySelector(".features");

const featureObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                features.classList.add("show");
            }

        });

    },
    {
        threshold: 0.50
    }
);

featureObserver.observe(features);


const roleSection = document.querySelector('.role');

const roleObserver = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                roleSection.classList.add('show');

                roleObserver.unobserve(roleSection);

            }

        });

    },
    {
        threshold: 0.20
    }
);

roleObserver.observe(roleSection);


const dashboard = document.querySelector(".Dashboard");
const glow = document.querySelector(".mouse-glow");

dashboard.addEventListener("mousemove", function(e) {

    const rect = dashboard.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    glow.style.left = x + "px";
    glow.style.top = y + "px";

});


  const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');
    const navLogin = document.getElementById('navLogin');
    const icon = menuBtn.querySelector('i');

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navLogin.classList.toggle('active');
        const isOpen = navLinks.classList.contains('active');
        icon.classList.toggle('fa-bars', !isOpen);
        icon.classList.toggle('fa-xmark', isOpen);
    });



const video = document.getElementById('myVideo');
const playBtn = document.getElementById('playBtn');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const muteBtn = document.getElementById('muteBtn');
const volIcon = document.getElementById('volIcon');
const muteIcon = document.getElementById('muteIcon');
const fullscreenBtn = document.getElementById('fullscreenBtn');

playBtn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'block';
    playBtn.style.height = "20px";
    playBtn.style.width = "20px";
    muteBtn.style.display = "none";
    fullscreenBtn.style.display = "none";

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