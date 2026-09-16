const params = new URLSearchParams(window.location.search);
const role = params.get("role") || "student";

const dashboardTitle = document.querySelector("#dashboardTitle");
const dashboardSubtitle = document.querySelector("#dashboardSubtitle");
const roleLabel = document.querySelector("#roleLabel");
const welcomeText = document.querySelector("#welcomeText");
const sidebarMenu = document.querySelector("#sidebarMenu");
const stats = document.querySelector("#stats");
const mainContent = document.querySelector("#mainContent");
const tasks = document.querySelector("#tasks");
const rightContent = document.querySelector("#rightContent");
const userEmail = document.querySelector("#userEmail");
const logoutBtn = document.querySelector("#logoutBtn");
const data = {
    student: {
        name: "Student",
        title: "Student Dashboard",
        subtitle: "Track your internship journey",
        menu: [["Overview", "fa-house"], ["My Internship", "fa-briefcase"], ["Daily Logbook", "fa-book"], ["Attendance", "fa-calendar-check"], ["Resume & AI Score", "fa-file-lines"], ["Certificates", "fa-certificate"], ["Placement Predictor", "fa-chart-line"]],
        stats: [["ATTENDANCE", "94%", "+2% this week"], ["LOGBOOK STREAK", "12 days", "Active streak"], ["AI RESUME SCORE", "82/100", "Strong"], ["PLACEMENT CHANCE", "76%", "AI-predicted"]],
        mainTitle: "CURRENT INTERNSHIP",
        mainName: "Frontend Developer Intern",
        mainInfo: "Acme Cloud • Remote • 12 weeks",
        progress: 50,
        tasks: ["Complete landing page redesign", "Submit weekly logbook", "Peer review sprint tasks", "Mentor sync — Friday"],
        side: [["AI RESUME SCORE", "82", "Add 2 projects to reach 90+"], ["CERTIFICATES", "Web Dev Bootcamp|Cloud Fundamentals", ""], ["PLACEMENT PREDICTOR", "76% chance of placement", ""]]
    },
    company: {
        name: "Company",
        title: "Company Dashboard",
        subtitle: "Manage internships and applicants",
        menu: [["Overview", "fa-house"], ["Post Internship", "fa-plus"], ["My Internships", "fa-briefcase"], ["Applicants", "fa-users"], ["Students", "fa-user-graduate"], ["Certificates", "fa-certificate"], ["Analytics", "fa-chart-line"]],
        stats: [["ACTIVE INTERNSHIPS", "12", "3 new this month"], ["APPLICATIONS", "248", "+18% this week"], ["SHORTLISTED", "64", "Active candidates"], ["CERTIFICATES", "37", "Issued this month"]],
        mainTitle: "CURRENT INTERNSHIPS",
        mainName: "Frontend Developer Internship",
        mainInfo: "Remote • 12 weeks • 4 positions",
        progress: 70,
        tasks: ["Review new applications", "Schedule student interviews", "Verify internship documents", "Issue pending certificates"],
        side: [["APPLICATIONS", "248", "18 new applications"], ["ACTIVE POSTS", "12", "3 closing this week"], ["HIRING STATUS", "64 shortlisted", "Review candidates"]]
    },
    college: {
        name: "College Admin",
        title: "College Admin Dashboard",
        subtitle: "Manage students and internship outcomes",
        menu: [["Overview", "fa-house"], ["Students", "fa-user-graduate"], ["Internships", "fa-briefcase"], ["Verification", "fa-circle-check"], ["Attendance", "fa-calendar-check"], ["Analytics", "fa-chart-line"], ["Reports", "fa-file-lines"]],
        stats: [["TOTAL STUDENTS", "1,248", "+42 this semester"], ["ACTIVE INTERNSHIPS", "386", "Across departments"], ["VERIFIED", "91%", "+4% this month"], ["PLACEMENT RATE", "78%", "Current batch"]],
        mainTitle: "INTERNSHIP OVERVIEW",
        mainName: "Student Internship Program",
        mainInfo: "386 active students • 42 companies",
        progress: 78,
        tasks: ["Verify pending internships", "Review attendance reports", "Approve student certificates", "Generate placement report"],
        side: [["STUDENTS", "1,248", "42 new registrations"], ["VERIFICATION", "91% verified", "27 pending"], ["PLACEMENT", "78%", "Current batch"]]
    },
    mentor: {
        name: "Mentor",
        title: "Mentor Dashboard",
        subtitle: "Guide students and review progress",
        menu: [["Overview", "fa-house"], ["My Students", "fa-users"], ["Daily Logbook", "fa-book"], ["Attendance", "fa-calendar-check"], ["Reviews", "fa-star"], ["Progress", "fa-chart-line"], ["Messages", "fa-message"]],
        stats: [["MY STUDENTS", "28", "+4 this month"], ["ATTENDANCE", "93%", "+3% this week"], ["REVIEWS", "42", "8 pending"], ["PROGRESS", "86%", "Average progress"]],
        mainTitle: "STUDENT PROGRESS",
        mainName: "Frontend Development Group",
        mainInfo: "28 students • 12 week program",
        progress: 86,
        tasks: ["Review student logbooks", "Complete weekly reviews", "Verify attendance", "Schedule mentor meetings"],
        side: [["STUDENTS", "28", "4 new students"], ["REVIEWS", "42", "8 pending reviews"], ["PROGRESS", "86%", "Average progress"]]
    },
    superadmin: {
        name: "Super Admin",
        title: "Super Admin Dashboard",
        subtitle: "Manage the global InternTrack AI system",
        menu: [["Overview", "fa-house"], ["Users", "fa-users"], ["Companies", "fa-building"], ["Colleges", "fa-school"], ["AI Models", "fa-robot"], ["Audit Logs", "fa-list-check"], ["Analytics", "fa-chart-line"]],
        stats: [["TOTAL USERS", "18,420", "+8.4% this month"], ["COMPANIES", "486", "12 new"], ["COLLEGES", "94", "3 new"], ["SYSTEM HEALTH", "99.9%", "Operational"]],
        mainTitle: "SYSTEM OVERVIEW",
        mainName: "InternTrack AI Platform",
        mainInfo: "18,420 users • 486 companies • 94 colleges",
        progress: 99,
        tasks: ["Review system activity", "Approve new organizations", "Monitor AI models", "Check audit logs"],
        side: [["TOTAL USERS", "18,420", "8.4% growth"], ["AI MODELS", "12", "All operational"], ["SYSTEM HEALTH", "99.9%", "Operational"]]
    }
};

const current = data[role] || data.student;
dashboardTitle.textContent = current.title;
dashboardSubtitle.textContent = current.subtitle;
roleLabel.textContent = current.name.toUpperCase();
welcomeText.textContent = `Welcome back, ${current.name}`;

function renderMenu() {
    sidebarMenu.innerHTML = "";
    current.menu.forEach((item, index) => {
        const a = document.createElement("a");
        a.href = "#";
        if (index === 0) a.classList.add("active");
        a.innerHTML = `<i class="fa-solid ${item[1]}">
        </i><span>${item[0]}</span>`;
        a.addEventListener("click", e => {
            e.preventDefault();
            document.querySelectorAll("#sidebarMenu a").forEach(x => x.classList.remove("active"));
            a.classList.add("active");
        });
        sidebarMenu.appendChild(a);
    });
}
function renderStats() {
    stats.innerHTML = "";
    current.stats.forEach(item => {
        const div = document.createElement("div");
        div.className = "stat-card";
        div.innerHTML = `<small>${item[0]}</small><div class="stat-value">${item[1]}</div><div class="stat-change">${item[2]}</div>`;
        stats.appendChild(div);
    });
}
function renderMain() {
    mainContent.innerHTML = `<div class="card-title">${current.mainTitle}</div><div class="internship-name">${current.mainName}</div><div class="internship-info">${current.mainInfo}</div><div class="progress-row"><span>Progress</span><span>${current.progress}%</span></div><div class="progress"><span style="width:${current.progress}%"></span></div>`;
    tasks.innerHTML = `<div class="card-title">WEEKLY TASKS</div>`;
    current.tasks.forEach(task => {
        const div = document.createElement("div");
        div.className = "task";
        div.innerHTML = `<span>${task}</span><button>Mark done</button>`;
        tasks.appendChild(div);
    });
}
function renderSide() {
    rightContent.innerHTML = "";
    current.side.forEach(item => {
        const div = document.createElement("div");
        div.className = "side-card";
        if (item[0] === "AI RESUME SCORE") {
            div.innerHTML = `<div class="side-title">${item[0]}</div><div class="score"><div class="score-icon"><i class="fa-solid fa-wand-magic-sparkles"></i></div><div><strong>${item[1]}</strong><p>${item[2]}</p></div></div><button class="upload-btn">Upload new resume</button>`;
        } else if (item[1].includes("|")) {
            const list = item[1].split("|").map(x => `<div class="list-item"><i class="fa-solid fa-circle-check"></i>${x}</div>`).join("");
            div.innerHTML = `<div class="side-title">${item[0]}</div>${list}`;
        } else {
            div.innerHTML = `<div class="side-title">${item[0]}</div><div class="predictor">${item[1]}</div>${item[2] ? `<p class="predictor">${item[2]}</p>` : ""}`;
        }
        rightContent.appendChild(div);
    });
}
renderMenu();
renderStats();
renderMain();
renderSide();
logoutBtn.addEventListener("click", () => {
    window.location.href = "index.html";
});



const cursor = document.querySelector(".cursor");
const cursorBlur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove", function (e) {
    cursor.style.left = e.clientX - 10 + "px";
    cursor.style.top = e.clientY - 10 + "px";
    cursorBlur.style.left = e.clientX + "px";
    cursorBlur.style.top = e.clientY + "px";
});