const html = document.querySelector("html");
const scrollTopButton = document.getElementById("scroll-top-button");
const aboutButton = document.getElementById("about-button");
const portfolioButton = document.getElementById("portfolio-button");
const contactButton = document.getElementById("contact-button");
const logo = document.getElementById("logo");
const modeButton = document.getElementById("mode-button");
const rootElement = document.querySelector(':root');
const loadingScreen = document.getElementById('loading-screen');

window.addEventListener('load', () => {
    loadingScreen.style.opacity = 0;
    loadingScreen.style.transition = '.5s';
    setTimeout(() => {
        loadingScreen.remove();
    }, 500);
});

let isDark = false;

const setDarkTheme = () => {
    rootElement.style.setProperty('--background-color', '#282828');
    rootElement.style.setProperty('--text-color', '#cfcfcf');
}

const setLightTheme = () => {
    rootElement.style.setProperty('--background-color', '#fafafa');
    rootElement.style.setProperty('--text-color', '#000');
}

const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
if (darkThemeMq.matches) {
    console.log("prefers dark theme");
    isDark = true;
    setDarkTheme();
} else {
    console.log("prefers light theme");
    setLightTheme();
}

modeButton.addEventListener("click", (event) => {
    event.preventDefault();
    isDark = !isDark;

    if (isDark) {
        setDarkTheme();
    } else {
        setLightTheme();
    }
});

addEventListener('scroll', () => {
    // toggle scroll top button visibility
    if (html.scrollTop === 0) {
        scrollTopButton.style = "display: none;"
    } else {
        scrollTopButton.style = "display: flex;"
    }

    // toggle logo visibility
    if (html.scrollTop < 200) {
        logo.style = "opacity: 0;"
    } else {
        console.log(html.scrollTop)
        logo.style = "opacity: 1; transition: 1s ease-in opacity;"
    }

    // toggle about button boldness
    if (html.scrollTop > 676 && html.scrollTop < 1428) {
        aboutButton.style = "font-weight: bold;"
        console.log("window.location.href: ", window.location.href);
        // if (!window.location.href.includes("#about")) {
        //     window.location.replace("#about");
        // }
    } else {
        aboutButton.style = "font-weight: initial;"
    }

    // toggle portfolio button boldness
    if (html.scrollTop > 1428 && html.scrollTop < 2160) {
        portfolioButton.style = "font-weight: bold;"
        // if (!window.location.href.includes("#portfolio")) {
        //     window.location.replace("#portfolio");
        // }
    } else {
        portfolioButton.style = "font-weight: initial;"
    }

    // toggle contact button boldness
    if (html.scrollTop > 2160) {
        contactButton.style = "font-weight: bold;"
        // if (!window.location.href.includes("#contact")) {
        //     window.location.replace("#contact");
        // }
    } else {
        contactButton.style = "font-weight: initial;"
    }
});

