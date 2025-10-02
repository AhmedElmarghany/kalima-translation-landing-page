import { translations } from "./translations.js";

// Current language state
let currentLanguage = localStorage.getItem("preffered-language") || "ar";

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function(){
  setLanguage(currentLanguage)
})

// Language switching function
function toggleLanguage(){
  currentLanguage = currentLanguage === "ar" ? "en" : "ar";
  setLanguage(currentLanguage);

  localStorage.setItem("preffered-language", currentLanguage)
}


// Favicon switching function
function switchFavicon(){
  const favicon = document.querySelector("link[rel~='icon']");
  favicon.href = (currentLanguage === "ar"? "assets/ar-favicon.svg" : "assets/en-favicon.svg")
}

// Logo switching function
function switchLogo(){
  const logos = document.querySelectorAll(".logo");

  logos.forEach(logo => {
    const logo_lang = logo.getAttribute("data-lang");
    if (logo_lang === currentLanguage){
      logo.classList.remove("inactive");
    }else{
      logo.classList.add("inactive");
    }
  })
}
// Image switching function
function switchImage(){
  const images = document.querySelectorAll(".about-img");

  images.forEach(img => {
    const image_lang = img.getAttribute("data-lang");
    if (image_lang === currentLanguage){
      img.classList.remove("inactive");
    }else{
      img.classList.add("inactive");
    }
  })
}
// White logo switching function (in Footer)
function switchWhiteLogo(){
  const logos = document.querySelectorAll(".white-logo");

  logos.forEach(logo => {
    const logo_lang = logo.getAttribute("data-lang");
    if (logo_lang === currentLanguage){
      logo.classList.remove("inactive");
    }else{
      logo.classList.add("inactive");
    }
  })
}

// Language Button switching function
function switchLanguageButton(){
  const langBtns = document.querySelectorAll(".language-btn");
  langBtns.forEach(btn => {
    const btn_lang = btn.getAttribute("data-lang");
    if (btn_lang === currentLanguage){
      btn.classList.remove("inactive");
    }else{
      btn.classList.add("inactive");
    }
  })
}


function setLanguage(lang){
  switchLogo()
  switchLanguageButton()
  switchImage()
  switchWhiteLogo()
  switchFavicon()
  updateURL(lang)

  const htmlRoot = document.querySelector('.html-root');
  
  htmlRoot.setAttribute("lang", lang)
  htmlRoot.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

  // Update all translatable elements
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(element=>{
    const key = element.getAttribute("data-translate");
    if(translations[lang] && translations[lang][key] ){
      element.textContent = translations[lang][key];
      if(element.tagName === "TITLE"){
        document.title = translations[lang][key];
      }
      if(key === "home_welcome" || key === "home_slogan" || key === "about_us_text"){
        element.innerHTML = translations[lang][key];
      }
    }
  })

  // Translate Placeholders for contact form
  document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
      const key = element.getAttribute('data-translate-placeholder');
      if (translations[lang] && translations[lang][key]) {
          element.placeholder = translations[lang][key];
      }
  });

}
// Update URL for SEO
function updateURL(lang){
  const url = new URL(window.location);
  if(lang === "en"){
    url.searchParams.set("lang", "en");
  }else{
    url.searchParams.delete("lang");
  }
  window.history.replaceState({}, "", url);
}
// Language switcher Event Listener
languageBtn.addEventListener("click", toggleLanguage);
