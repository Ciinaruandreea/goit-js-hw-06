const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formElements = loginForm.elements;

  const formData = {
    email: formElements.email.value,
    password: formElements.password.value,
  };

  if (formData.email.trim() === "" || formData.password.trim() === "") {
    alert("Please fill in all fields.");
    return;
  }

  console.log(formData);

  loginForm.reset();
});
