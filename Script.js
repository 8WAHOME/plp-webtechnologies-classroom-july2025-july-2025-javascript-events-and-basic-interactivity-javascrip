// === Part 1: Event Handling ===
// Show a message when button is clicked
document.getElementById("messageBtn").addEventListener("click", function () {
    document.getElementById("message").textContent = "This is my week 6 assignment ";
});

// === Part 2: Interactive Elements ===
// Light/Dark Mode Toggle
document.getElementById("modeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// Counter
let count = 0;
document.getElementById("incrementBtn").addEventListener("click", function () {
    count++;
    document.getElementById("counter").textContent = count;
});

// Collapsible FAQ
document.querySelector(".faq-question").addEventListener("click", function () {
    document.querySelector(".faq-answer").classList.toggle("hidden");
});

// === Part 3: Form Validation ===
document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let messages = [];

    // Validate Name
    if (name.length < 3) {
        messages.push("Name must be at least 3 characters long.");
    }

    // Validate Email using regex
    let emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailPattern.test(email)) {
        messages.push("Please enter a valid email address.");
    }

    // Validate Password
    if (password.length < 6) {
        messages.push("Password must be at least 6 characters long.");
    }

    // Display messages
    let formMessages = document.getElementById("formMessages");
    formMessages.innerHTML = "";
    if (messages.length > 0) {
        formMessages.style.color = "red";
        messages.forEach(msg => {
            let p = document.createElement("p");
            p.textContent = msg;
            formMessages.appendChild(p);
        });
    } else {
        formMessages.style.color = "green";
        formMessages.textContent = "Form submitted successfully! ✅";
    }
});
