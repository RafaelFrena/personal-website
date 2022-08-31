const scrollTopButton = document.getElementById("scroll-top-button");
const html = document.querySelector("html");

addEventListener('scroll', (event) => {
    if (html.scrollTop === 0) {
        scrollTopButton.style = "display: none;"
    } else {
        scrollTopButton.style = "display: flex;"
    }
});
