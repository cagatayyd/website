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

function sendEmail() {
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
document.getElementById("contact-form").addEventListener("submit", sendEmail);
