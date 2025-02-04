document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const fullName = document.getElementById("fullname");
    const mobile = document.getElementById("mobile");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("re-password");

    function showError(input, message) {
        let parent = input.parentElement;
        let error = parent.querySelector(".error-message");
        if (!error) {
            error = document.createElement("div");
            error.className = "error-message";
            error.style.color = "red";
            error.style.fontSize = "12px";
            parent.insertBefore(error, input);
        }
        error.textContent = message;
    }

    function clearError(input) {
        let parent = input.parentElement;
        let error = parent.querySelector(".error-message");
        if (error) {
            error.remove();
        }
    }

    function validateFullName() {
        const nameRegex = /^[a-zA-Z ]{3,}$/;
        if (!nameRegex.test(fullName.value.trim())) {
            showError(fullName, "Full name must be at least 3 characters long and contain only letters.");
            return false;
        } else {
            clearError(fullName);
            return true;
        }
    }

    function validateMobile() {
        const mobileRegex = /^[0-9]{10}$/;
        if (!mobileRegex.test(mobile.value.trim())) {
            showError(mobile, "Mobile number must be 10 digits.");
            return false;
        } else {
            clearError(mobile);
            return true;
        }
    }

    function validateEmail() {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email.value.trim())) {
            showError(email, "Enter a valid email address.");
            return false;
        } else {
            clearError(email);
            return true;
        }
    }

    function validatePassword() {
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$/;
        if (!passwordRegex.test(password.value)) {
            showError(password, "Password must be at least 6 characters long, include a number and a special character.");
            return false;
        } else {
            clearError(password);
            return true;
        }
    }

    function validateConfirmPassword() {
        if (confirmPassword.value !== password.value) {
            showError(confirmPassword, "Passwords do not match.");
            return false;
        } else {
            clearError(confirmPassword);
            return true;
        }
    }

    fullName.addEventListener("input", validateFullName);
    mobile.addEventListener("input", validateMobile);
    email.addEventListener("input", validateEmail);
    password.addEventListener("input", validatePassword);
    confirmPassword.addEventListener("input", validateConfirmPassword);

    form.addEventListener("submit", function (event) {
        if (!validateFullName() || !validateMobile() || !validateEmail() || !validatePassword() || !validateConfirmPassword()) {
            event.preventDefault();
        }
    });
});
