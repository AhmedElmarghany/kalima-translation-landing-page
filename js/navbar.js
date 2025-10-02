// navbar responsive
let links = document.querySelector(".links");
let navbarBtn = document.querySelector("img.navbar-menu");
let languageBtn = document.querySelector("div.language-btn-div")
function navbarToggler(){

    links.classList.toggle('open');
    // languageBtn.classList.toggle("open");
    // languageBtn.children[0].classList.toggle("open");
};
navbarBtn.addEventListener("click", navbarToggler);
document.querySelector("body").addEventListener("click", function(e){
    if(!e.target.classList.contains("navbar-menu") && !e.target.classList.contains("links") && !e.target.classList.contains("language-btn-div")) {
        if (links.classList.value == "links open"){
            links.classList.remove('open');
            // languageBtn.classList.remove("open");
            // languageBtn.children[0].classList.remove("open");
        }}
})
