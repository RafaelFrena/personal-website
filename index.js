const html = document.querySelector("html");
const scrollTopButton = document.getElementById("scroll-top-button");
const aboutButton = document.getElementById("about-button");
const portfolioButton = document.getElementById("portfolio-button");
const contactButton = document.getElementById("contact-button");

addEventListener('scroll', (event) => {
    // toggle scroll top button visibility
    if (html.scrollTop === 0) {
        scrollTopButton.style = "display: none;"
    } else {
        scrollTopButton.style = "display: flex;"
    }

    // toggle about button boldness
    if (html.scrollTop > 676 && html.scrollTop < 1428) {
        aboutButton.style = "font-weight: bold;"
    } else {
        aboutButton.style = "font-weight: initial;"
    }

    // toggle portfolio button boldness
    if (html.scrollTop > 1428 && html.scrollTop < 2160) {
        portfolioButton.style = "font-weight: bold;"
    } else {
        portfolioButton.style = "font-weight: initial;"
    }

    // toggle contact button boldness
    if (html.scrollTop > 2160) {
        contactButton.style = "font-weight: bold;"
    } else {
        contactButton.style = "font-weight: initial;"
    }
});
