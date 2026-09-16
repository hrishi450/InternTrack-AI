const cursor = document.querySelector(".cursor");
const cursorBlur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove", function (e) {

    cursor.style.left = e.clientX - 10 + "px";
    cursor.style.top = e.clientY - 10 + "px";
    cursorBlur.style.left = e.clientX + "px";
    cursorBlur.style.top = e.clientY + "px";
});


// Get role from URL

const params = new URLSearchParams(window.location.search);


const role = params.get("role");
// Get HTML elements

const portalTitle = document.querySelector("#portalTitle");
const portalDescription = document.querySelector("#portalDescription");
const portalFeatures = document.querySelector("#portalFeatures");
const loginTitle = document.querySelector("#loginTitle");
const loginDescription = document.querySelector("#loginDescription");
const loginButton = document.querySelector("#loginButton");
const portalIcon = document.querySelector("#portalIcon");
const loginIcon = document.querySelector("#loginIcon");

const registerButton = document.querySelector("#registerButton");
const termsText = document.querySelector("#termsText");

const signInTab = document.querySelector("#signInTab");
const registerTab = document.querySelector("#registerTab");

const loginForm = document.querySelector("#loginForm");
const registerForm = document.querySelector("#registerForm");


// Role data
const roles = {
    student: {
        portalTitle: "Student Portal",
        portalDescription:
            "Track internships, logbook, resume score & placement",
        features: [
            "JWT-secured sessions",
            "Role-based dashboard access",
            "AI-assisted verification"
        ],
        loginTitle: "Student access",
        loginDescription:
            "Secure sign in to your dashboard",
        buttonText:
            "Sign in as Student",
        registerButton: "Create student account",

        icon:
            "fa-solid fa-graduation-cap"
    },
    company: {
        portalTitle: "Company Portal",
        portalDescription:
            "Post internships, manage applicants, issue certificates",
        features: [
            "Post internship opportunities",
            "Manage student applications",
            "Issue internship certificates"
        ],
        loginTitle: "Company access",
        loginDescription:
            "Secure sign in to your company dashboard",
        buttonText:
            "Sign in as Company",
        registerButton: "Create Company account",
        icon:
            "fa-regular fa-building"
    },
    college: {
        portalTitle: "College Admin Portal",

        portalDescription:
            "Approve, verify & analyze department outcomes",

        features: [
            "Verify student internships",
            "Manage department outcomes",
            "Analyze placement performance"
        ],

        loginTitle: "College Admin access",

        loginDescription:
            "Secure sign in to your college dashboard",

        buttonText:
            "Sign in as College Admin",
        registerButton: "Create College Admin account",

        icon:
            "fa-solid fa-school"
    },
    mentor: {
        portalTitle: "Mentor Portal",

        portalDescription:
            "Guide students, verify attendance & review progress",

        features: [
            "Guide assigned students",
            "Verify student attendance",
            "Review student progress"
        ],

        loginTitle: "Mentor access",

        loginDescription:
            "Secure sign in to your mentor dashboard",

        buttonText:
            "Sign in as Mentor",
        registerButton: "Create Mentor account",

        icon:
            "fa-solid fa-user-group"
    },


    superadmin: {
        portalTitle: "Super Admin Portal",

        portalDescription:
            "Global system, AI models, audit & analytics",

        features: [
            "Manage global system",
            "Manage AI models",
            "Audit & analytics"
        ],

        loginTitle: "Super Admin access",

        loginDescription:
            "Secure sign in to your administration dashboard",

        buttonText:
            "Sign in as Super Admin",
        registerButton: "Create Super Admin account",

        icon:
            "fa-solid fa-shield-halved"
    }

};
// Check selected role
if (roles[role]) {
    const currentRole = roles[role];

    registerButton.addEventListener("click", function () {
        document.querySelector("a").href = `dashboard.html`;
    })

    portalTitle.textContent =
        currentRole.portalTitle;

    portalDescription.textContent =
        currentRole.portalDescription;

    portalFeatures.innerHTML = "";

    currentRole.features.forEach(function (feature) {

        const li = document.createElement("li");
        li.textContent = feature;
        portalFeatures.appendChild(li);


    });


    loginTitle.textContent =
        currentRole.loginTitle;

    loginDescription.textContent =
        currentRole.loginDescription;

    loginButton.textContent =
        currentRole.buttonText;

    portalIcon.innerHTML =
        `<i class="${currentRole.icon}"></i>`;

    loginIcon.innerHTML =
        `<i class="${currentRole.icon}"></i>`;
    registerButton.textContent =
        currentRole.registerButton;

}


// Sign In

signInTab.addEventListener("click", function () {

    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");

    signInTab.classList.add("active");
    registerTab.classList.remove("active");

});


// Register

registerTab.addEventListener("click", function () {

    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");

    registerTab.classList.add("active");
    signInTab.classList.remove("active");

});


loginForm.addEventListener("submit", function (e) {

    e.preventDefault();
    Delay: 2

    const params = new URLSearchParams(window.location.search);
    const role = params.get("role");

    window.location.href = `dashboard.html?role=${role}`;

});

registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const params = new URLSearchParams(window.location.search);
    const role = params.get("role");
    window.location.href = `dashboard.html?role=${role}`;
})