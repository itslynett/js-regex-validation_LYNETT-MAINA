document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("validationForm");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Stop form from submitting normally
        let isValid = true; // Assume everything is correct

        // Get input fields for the following
        const fullName = document.getElementById("fullName");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const password = document.getElementById("password");

        // delete old error messages
        document.querySelectorAll(".error-message").forEach(msg => msg.style.display = "none");

        // Check full name (only letters and spaces allowed)
        if (!/^[A-Za-z\s/]+$/.test(fullName.value)) {
            showError(fullName, "Use only letters and spaces");
            isValid = false;
        }

        // Check email 
        if (!/^\S+@\S+\.\S+$/.test(email.value)) {
            showError(email, "Enter a valid email address");
            isValid = false;
        }

        // Check phone number (only numbers, 10-15 digits)
        if (!/^\d{10,15}$/.test(phone.value)) {
            showError(phone, "Enter a number with 10-15 digits");
            isValid = false;
        }

        // Check password (must be 8+ characters, with uppercase, lowercase, and number)
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password.value)) {
            showError(password, "Password needs 8+ characters, uppercase, lowercase, and a number");
            isValid = false;
        }

        // If all inputs are correct, show success message
        if (isValid) {
            document.getElementById("successMessage").style.display = "block";
            form.reset(); // Clear the form
        }
    });

    // Show error message under the input field
    function showError(input, message) {
        const errorMsg = input.nextElementSibling;
        errorMsg.textContent = message;
        errorMsg.style.display = "block";
    }
});
