// apply active class to current section
const sections = document.querySelectorAll("div[id]");

function scrollTracker() {
  const currentYScroll = window.scrollY;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const id = section.getAttribute("id");
    const currentNavLink = document.querySelector(`nav .links li a[href*="#${id}"]`);
    if (
      currentYScroll > sectionTop &&
      currentYScroll <= sectionTop + sectionHeight
    ) {
      currentNavLink.classList.add("active");
    } else {
      currentNavLink.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", scrollTracker);

// navbar responsive
let links = document.querySelector(".links");
let navbarBtn = document.querySelector("img.navbar-menu");
let languageBtn = document.querySelector("div.language-btn-div")
function navbarToggler(){

    links.classList.toggle('open');
    languageBtn.classList.toggle("open");
    languageBtn.children[0].classList.toggle("open");
};
navbarBtn.addEventListener("click", navbarToggler);
document.querySelector("body").addEventListener("click", function(e){
    if(!e.target.classList.contains("navbar-menu") && !e.target.classList.contains("links") && !e.target.classList.contains("language-btn-div")) {
        if (links.classList.value == "links open"){
            links.classList.remove('open');
            languageBtn.classList.remove("open");
            languageBtn.children[0].classList.remove("open");
        }}
})
