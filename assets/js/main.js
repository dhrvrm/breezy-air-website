document.querySelector(".menu_btn").addEventListener("click",toggle);
menu = document.querySelector("#menu");

function toggle(){
    if(menu.classList.contains('active')){
        menu.classList.remove('active');
    }
    else{
        menu.classList.add('active');
    }
}




try{
document.querySelector("#form_button").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".error_message").style.display = "none";
  
    var form = document.querySelector("#contact_form");
  
    var name, email, phone, message;
  
    name = document.querySelector("#name").value.trim();
    email = document.querySelector("#email").value.trim();
    phone = document.querySelector("#phone").value.trim();
    message = document.querySelector("#message").value.trim();
  
    if (!validateName(name)) {
      return;
    }
  
    if (!validateEmail(email)) {
      return;
    }
  
    if (!validatePhone(phone)) {
      return;
    }
  
    if (!validateMessage(message)) {
      return;
    }
  
    form.submit();
    form.reset();
  });
}
catch(e){
    //Do nothing
}
  
  function validateName(name) {
    if (name === "") {
      showError("Name is required");
      return false;
    }
  
    return true;
  }
  
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (email === "") {
      showError("Email is required");
      return false;
    }
  
    if (!emailRegex.test(email)) {
      showError("Please enter a valid email");
      return false;
    }
  
    return true;
  }
  
  function validatePhone(phone) {
    const phoneRegex = /^\d{10}$/;
  
    if (phone === "") {
      showError("Phone number is required");
      return false;
    }
  
    if (!phoneRegex.test(phone)) {
      showError("Please enter a valid 10-digit phone number");
      return false;
    }
  
    return true;
  }
  
  function validateMessage(message) {
    if (message === "") {
      showError("Message is required");
      return false;
    }
  
    return true;
  }
  
  function showError(errorMessage) {
    var messageBox = document.querySelector(".error_message");
    messageBox.innerHTML = errorMessage;
    messageBox.style.display = "block";
  }
  