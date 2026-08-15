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
