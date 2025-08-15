const f = document.getElementById("broo");
const images = ["icon2.jpg"];
let currentIndex = 0;

setInterval(function () {
    setTimeout(() => {
        f.src = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
    }, 1000); 
}, 4000); 

function validateForm() {
    const name = document.getElementById("name").value.trim();
    const number = document.getElementById("number").value.trim();
    const email = document.getElementById("email").value.trim();
  
    const nameRegex = /^[A-Za-z\s]+$/;
    const numberRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    let message = "";
  
    if (!nameRegex.test(name)) {
      message += "Invalid name. Only letters and spaces are allowed.<br>";
    }
  
    if (!numberRegex.test(number)) {
      message += "Invalid phone number. Must be 10 digits.<br>";
    }
  
    if (!emailRegex.test(email)) {
      message += "Invalid email address.<br>";
    }
  
    if (message === "") {
      message = "Form submitted successfully!";
    }
  
    document.getElementById("message").innerHTML = message;
  }

  