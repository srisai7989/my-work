function showMessage() {
  alert("Thanks for clicking the button!");
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page reload

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    document.getElementById("formMsg").textContent = "Thank you for contacting me!";
    this.reset(); // clear the form
  } else {
    document.getElementById("formMsg").textContent = "Please fill out all fields.";
  }
});