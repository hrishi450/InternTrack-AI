document.querySelector("#home-back")
    .addEventListener("click", function () {
        window.location.href = "index.html";
    })


const nav = performance.getEntriesByType("navigation")[0];

if (
    nav &&
    nav.type === "reload" &&
    window.location.pathname.endsWith("getstarted.html")
) {
    window.location.replace("index.html");
}

const cursor = document.querySelector(".cursor");
const cursorBlur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove", function (e) {
    cursor.style.left = e.clientX - 10 + "px";
    cursor.style.top = e.clientY - 10 + "px";
    cursorBlur.style.left = e.clientX + "px";
    cursorBlur.style.top = e.clientY + "px";
});