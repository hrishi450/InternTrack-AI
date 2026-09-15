document.querySelector("#home-back")
    .addEventListener("click", function () {
        window.location.href = "index.html";
    })

document.querySelector("#cont")
    .addEventListener("click", function () {

    })

const nav = performance.getEntriesByType("navigation")[0];

if (
    nav &&
    nav.type === "reload" &&
    window.location.pathname.endsWith("getstarted.html")
) {
    window.location.replace("index.html");
}