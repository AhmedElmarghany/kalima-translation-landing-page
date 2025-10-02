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
