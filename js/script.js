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


// Translations data
const translations = {
  ar: {
    page_title: "كلمة للترجمة المعتمدة",
    nav_home: "الرئيسية",
    nav_about_us: "من نحن",
    nav_our_services: "خدماتنا",
    nav_why_us: "لماذا نحن",
    nav_contact_us: "تواصل معنا",
    home_welcome: 'مرحباً بكم في <span>كلمة!</span>👋',
    home_slogan: 'دقة  في <span>الترجمة</span>،<br>وضوح في التواصل',
    home_about: '"كلمة" هي بوابتك إلى عالم اللغات والثقافات. نقدم خدمات ترجمة احترافية بدقة عالية، نضمن لك نقل المعاني بأمانة ووضوح. كلمة ليست مجرد ترجمة، بل جسر للتواصل بين الحضارات.',
    home_services: "خدماتنا",
    home_know_more: "المزيد عنّا",
    about_us_heading: "من نحن؟",
    about_us_text: ' <span>"كلمة"</span>هي شركة رائدة في مجال <span>الترجمة المعتمدة</span>، تقدم حلولًا لغوية عالية الجودة لمختلف المستندات القانونية، الطبية، الأكاديمية، والتجارية. بفريق من المترجمين المعتمدين ذوي الخبرة الواسعة، نضمن لكم ترجمات دقيقة ومعتمدة تلبي أعلى المعايير الدولية. مع سنوات من الخبرة واستخدام أحدث الأدوات، نلتزم بتقديم خدمات سريعة وموثوقة، لنساعدك على تجاوز الحدود اللغوية والثقافية بكل ثقة.',
    about_us_button: "خدماتنا",
    our_services_heading: "خدماتنا",
    our_services_heading_2: "حلول لغوية دقيقة ومعتمدة تلبي جميع احتياجاتك",
    our_services_1_heading: "الترجمة القانونية",
    our_services_1_text: "نقدم ترجمة دقيقة ومعتمدة للمستندات القانونية مثل العقود، الشهادات، واللوائح القانونية، مع الحفاظ على المصطلحات القانونية الدقيقة.",
    our_services_2_heading: "الترجمة الطبية",
    our_services_2_text: "نترجم التقارير الطبية، الأبحاث العلمية، والأدلة الدوائية بدقة عالية، مع مراعاة المصطلحات الطبية المتخصصة.",
    our_services_3_heading: "الترجمة الأكاديمية",
    our_services_3_text: "نساعدك في ترجمة الأوراق البحثية، الرسائل العلمية، والكتب الأكاديمية مع ضمان الجودة العلمية واللغوية.",
    our_services_4_heading: "الترجمة الفورية",
    our_services_4_text: "نوفر خدمات ترجمة فورية للمؤتمرات، الاجتماعات، والمكالمات عبر الفيديو، مع ضمان دقة وسرعة في نقل الكلام.",
    our_services_5_heading: "ترجمة أوراق الهجرة",
    our_services_5_text: "نترجم المستندات المطلوبة لإجراءات الهجرة مثل الشهادات، السجلات الجنائية، ووثائق الهوية بدقة ومعتمدة رسميًا.",
    our_services_know_more: "تعرّف على المزيد من الخدمات التي نقدمها من هنا",
    why_us_heading: 'لماذا "كلمة"؟',
    why_us_feature_1_heading: "فريق مترجمين معتمدين",
    why_us_feature_1_text: "فريقنا من المترجمين المحترفين والمعتمدين يضمن لك نتائج ترجمة تلبي احتياجاتك بدقة.",
    why_us_feature_2_heading: "دقة وجودة عالية",
    why_us_feature_2_text: "نلتزم بأعلى معايير الجودة في كل مشروع، مع ضمان دقة الترجمة وسلامة المحتوى.",
    why_us_feature_3_heading: "سرعة في الإنجاز",
    why_us_feature_3_text: "نقدم خدمات سريعة دون المساس بالجودة، لنساعدك في تلبية مواعيدك بكل ثقة.",
    contact_us_heading: "معلومات التواصل",
    contact_us_phone: "رقم الهاتف والواتس آب",
    contact_us_email: "البريد الإلكتروني",
    contact_us_location_heading: "مقر الشركة",
    contact_us_location: "المحلة الكبرى، الغربية، مصر",
    contact_us_working_hours_heading: "مواعيد العمل",
    contact_us_working_hours: "من 9:00 صباحاً حتى 5:00 مساءاً",
    contact_us_form_heading: "إذا كان لديك أي استفسارات أو طلبات مخصصة قم بترك بياناتك وسوف يتم التواصل معك في أقرب وقت. ",
    contact_us_form_name: "اسمك أو اسم المؤسسة",
    placeholder_name: "ادخل الاسم",
    contact_us_form_email: "البريد الإلكتروني",
    contact_us_form_phone: "رقم الهاتف",
    placeholder_phone: "ادخل رقم الهاتف",
    contact_us_form_message: "رسالتك",
    placeholder_message: "ادخل رسالتك...",
    contact_us_form_send: "إرسال",
    contact_us_form_success_message: "✅تم إرسال الرسالة بنجاح",
    contact_us_form_fail_message: "⛔فشل إرسال الرسالة",
    footer_about: '"كلمة"هي شركة رائدة في مجال الترجمة المعتمدة، تقدم حلولًا لغوية عالية الجودة لمختلف المستندات القانونية، الطبية، الأكاديمية، والتجارية. بفريق من المترجمين المعتمدين ذوي الخبرة الواسعة.',
    footer_follow_us: "تابعنا على",
    footer_copy_rights: "جميع الحقوق محفوظة لشركة كلمة ٢٠٢٥ ©"
  },
  en: {
    page_title: "Kalima Translation Agency",
    nav_home: "Home",
    nav_about_us: "About us",
    nav_our_services: "Services",
    nav_why_us: "Why us",
    nav_contact_us: "Contact us",
    home_welcome: 'Welcome to <span>Kalima!</span>👋',
    home_slogan: 'Precision in <span>Translation</span>,<br>Clarity in Communication',
    home_about: '“Kalima” is your gateway to the world of languages and cultures. We provide professional translation services with high accuracy, ensuring faithful and clear delivery of meaning. Kalima is not just translation, but a bridge for communication between civilizations.',
    home_services: "Our services",
    home_know_more: "Know more",
    about_us_heading: "About us",
    about_us_text: '<span>“Kalima”</span> is a leading provider of <span>certified translation</span> services, offering high-quality linguistic solutions for legal, medical, academic, and business documents. With a team of certified translators and extensive expertise, we guarantee accurate and certified translations that meet the highest international standards. Leveraging years of experience and the latest tools, we are committed to delivering fast and reliable services to help you confidently navigate linguistic and cultural boundaries.',
    about_us_button: "Our services",
    our_services_heading: "Our services",
    our_services_heading_2: "Accurate and certified language solutions tailored to your needs",
    our_services_1_heading: "Legal Translation",
    our_services_1_text: "We provide accurate and certified translations for legal documents such as contracts, certificates, and legal regulations, ensuring precise legal terminology.",
    our_services_2_heading: "Medical Translation",
    our_services_2_text: "We translate medical reports, scientific research, and pharmaceutical guidelines with high precision, adhering to specialized medical terminology.",
    our_services_3_heading: "Academic Translation",
    our_services_3_text: "We assist in translating research papers, theses, and academic books while maintaining scientific and linguistic quality.",
    our_services_4_heading: "Simultaneous Interpretation",
    our_services_4_text: "We provide real-time interpretation services for conferences, meetings, and video calls, ensuring accuracy and speed in communication.",
    our_services_5_heading: "Immigration Document Translation",
    our_services_5_text: "We translate documents required for immigration procedures, such as certificates, criminal records, and identification documents, with official certification.",
    our_services_know_more: "Learn more about the services we provide here.",
    why_us_heading: 'Why "Kalima"?',
    why_us_feature_1_heading: "Certified Professional Translators",
    why_us_feature_1_text: "Our team of certified and professional translators guarantees results that meet your needs with precision.",
    why_us_feature_2_heading: "High Accuracy & Quality",
    why_us_feature_2_text: "We adhere to the highest quality standards in every project, ensuring translation accuracy and content integrity.",
    why_us_feature_3_heading: "Fast Turnaround",
    why_us_feature_3_text: "We deliver fast services without compromising quality, helping you meet your deadlines confidently.",
    contact_us_heading: "Contact Info",
    contact_us_phone: "Phone number & WhatsApp",
    contact_us_email: "Email",
    contact_us_location_heading: "Location",
    contact_us_location: "El mehallah, Gharbia, Egypt",
    contact_us_working_hours_heading: "Working hours",
    contact_us_working_hours: "From 9:00 AM to 5:00 PM",
    contact_us_form_heading: "If you have any questions or custom requests, please leave your details and we will contact you as soon as possible.",
    contact_us_form_name: "Your name or organization name",
    placeholder_name: "Enter name",
    contact_us_form_email: "Email",
    contact_us_form_phone: "Phone number",
    placeholder_phone: "Enter phone number",
    contact_us_form_message: "Your message",
    placeholder_message: "Enter your message...",
    contact_us_form_send: "Send",
    contact_us_form_success_message: "✅Message sent successfully",
    contact_us_form_fail_message: "⛔Failed to send message",
    footer_about: 'Kalima is a leading certified translation company, providing high-quality language solutions for various legal, medical, academic, and commercial documents. It employs a team of highly experienced certified translators.',
    footer_follow_us: "Follow us",
    footer_copy_rights: "All rights reserved to Kalima Agency 2025 ©"
  }
};

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


// Contact form

const form = document.getElementById("contact_form");
const submitButton = document.getElementById("form_button");
const formMessageSuccess = document.querySelector(".alert-message-success");
const formMessageFailed = document.querySelector(".alert-message-failed");
const successTone = new Audio("./assets/successed.mp3");

// initializing the Emailjs library

(function() {
    emailjs.init({
      publicKey: "5pYQt3u5z5lhEMQwp",
    });
})();

form.addEventListener("submit", function (event) {
  event.preventDefault();

  emailjs.sendForm("service_thi3z9s", "contact_form", form).then(
    () => {
      formMessageSuccess.style.display = "block";
      successTone.play();
      setTimeout(() => {
        formMessageSuccess.style.display = "none";
      }, 3000);
    },
    (error) => {
      console.log("FAILED...", error);
      formMessageFailed.style.display = "block";
      setTimeout(() => {
        formMessageFailed.style.display = "none";
      }, 3000);
    }
  );
});
