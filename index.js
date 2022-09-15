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
        console.log("window.location.href: ", window.location.href);
        if (!window.location.href.includes("#about")) {
            window.location.replace("#about");
        }
    } else {
        aboutButton.style = "font-weight: initial;"
    }

    // toggle portfolio button boldness
    if (html.scrollTop > 1428 && html.scrollTop < 2160) {
        portfolioButton.style = "font-weight: bold;"
        if (!window.location.href.includes("#portfolio")) {
            window.location.replace("#portfolio");
        }
    } else {
        portfolioButton.style = "font-weight: initial;"
    }

    // toggle contact button boldness
    if (html.scrollTop > 2160) {
        contactButton.style = "font-weight: bold;"
        if (!window.location.href.includes("#contact")) {
            window.location.replace("#contact");
        }
    } else {
        contactButton.style = "font-weight: initial;"
    }
});
