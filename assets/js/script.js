// -------------------------------------------------------------------- Global variables

const introPage = document.getElementById("js-intro-page");
const agreePage = document.getElementById("js-agree-page");
const cardPage = document.getElementById("js-card-page");
const helpPage = document.getElementById("js-help-page");

// -------------------------------------------------------------------- Navigation functions

function navigation(id) {
    var pages = document.getElementsByClassName("pages");
    for (var i = 0; i < pages.length; i++) {
        pages[i].classList.add("hide");
    }
    switch (id) {
        case "home":
            homePage.classList.remove("hide");
            break;
        case "agree":
            homePage.classList.remove("hide");
            break;
        case "card":
            aboutPage.classList.remove("hide");
            break;
        case "help":
            helpPage.classList.remove("hide");
            break;
        default:
            homePage.classList.remove("hide");
            break;
    }
}

// -------------------------------------------------------------------- Copyright
function copyrightYear() {
   var d = new Date();
   var y = d.getFullYear();
   document.getElementById("copyright").innerHTML = y;
}

copyrightYear();