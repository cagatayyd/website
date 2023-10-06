var navLinkContainer = document.getElementById("myNav");
var navLinks = navLinkContainer.getElementsByClassName("nav-link");

for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
// E-mail contact

/*function sendEmail() {
  var nameInput = document.getElementById("contact-name");
  var emailInput = document.getElementById("contact-email");
  var phoneInput = document.getElementById("contact-phone");
  var messageInput = document.getElementById("contact-message");

  if (nameInput && emailInput && phoneInput && messageInput) {
    var params = {
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      message: messageInput.value,
    };

    const serviceID = "service_13qr418";
    const templateID = "template_nh793rc";

    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        // Gönderim başarılı olduğunda formu temizle
        nameInput.value = "";
        emailInput.value = "";
        phoneInput.value = "";
        messageInput.value = "";
        console.log(res);
        alert("Message sent");
      })
      .catch((err) => console.log(err));
  } else {
    alert("Please fill in all fields.");
  }
}
document.getElementById("contact-form").addEventListener("submit", sendEmail);*/

const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector(".submit-btn");
const nameInput = document.querySelector("#contact-name");
const phoneInput = document.querySelector("#contact-phone");
const emailInput = document.querySelector("#contact-email");
const messageInput = document.querySelector("#contact-message");

const publicKey = "zKVk7OlXiFu9FiAnK";
const serviceID = "service_13qr418"
const templateID = "template_eln9afr"

emailjs.init(publicKey);
contactForm.addEventListener("submit", e => {
  e.preventDefault();

  submitBtn.innerText = "Just a moment...";
  const inputFields = {
    name:nameInput.value,
    phone:phoneInput.value,
    email:emailInput.value,
    message:messageInput.value
  }
  emailjs.send(serviceID,templateID,inputFields).then(() => {
    submitBtn.innerText = "Message sent successfully";
    nameInput.value = "";
    phoneInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  },(error) => {
    console.log(error);
    submitBtn.innerText = "Something went wrong";
  });
});