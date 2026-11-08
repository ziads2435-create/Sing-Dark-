const eye = document.getElementById("eye");
const password = document.getElementById("password");

eye.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
});