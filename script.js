document.getElementById("formulario").addEventListener("submit", (event) => {
  event.preventDefault();

  let inputName = document.getElementById("name");
  let errorName = document.getElementById("nameError");

  if (inputName.value.trim() === "") {
    errorName.textContent = "Please! enter your name";
    errorName.classList.add("error-message");
  } else {
    errorName.textContent = "";
    errorName.classList.remove("error-message");
  }

  let inputMail = document.getElementById("email");
  let errorMail = document.getElementById("emailError");
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailPattern.test(inputMail.value)) {
    errorMail.textContent = "Please! enter a valid email";
    errorMail.classList.add("error-message");
  } else {
    errorMail.textContent = "";
    errorMail.classList.remove("error-message");
  }

  let inputPassword = document.getElementById("password");
  let errorPassword = document.getElementById("passwordError");
  let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&+-])([A-Za-z\d$@$!%*?&+-]|[^ ]){8,15}$/;

  if (!passwordPattern.test(inputPassword.value)) {
    errorPassword.textContent =
      "Password must have at least one uppercase letter, one lowercase letter, one number, and one special character. It must not contain any blank spaces.";
    errorPassword.classList.add("error-message");
  } else {
    errorPassword.textContent = "";
    errorPassword.classList.remove("error-message");
  }

  if (
    !errorName.textContent &&
    !errorMail.textContent &&
    !errorPassword.textContent
  ) {
    alert("form sent successfully");
    document.getElementById("formulario").reset();
  }
});
