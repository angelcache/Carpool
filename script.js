const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const email    = document.getElementById('email');
const password = document.getElementById('password');
const password2= document.getElementById('password2');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    validateInputs();
});

function validateInputs() {
    // trim to remove the whitespaces
    const usernameValue = username.value.trim();
    const emailValue    = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value= password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 6 ) {
        setError(password, 'Password must be at least 6 characters.');
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (passwordValue !== password2Value) {
        setError(password2, 'Passwords do not match');
    } else {
        setSuccess(password2);
    }

    // If all fields are valid, submit the form
    if(document.querySelectorAll('.form-group.error').length === 0) {
        alert('Registration successful!');
        form.submit();
    }
}

function setError(element, message) {
    const formGroup = element.parentElement;
    const small     = formGroup.querySelector('small');

    // Add error message inside small
    small.innerText = message;

    // Add error class
    formGroup.className = 'form-group error';
}

function setSuccess(element) {
    const formGroup = element.parentElement;

    // Add success class
    formGroup.className = 'form-group success';
}

function isValidEmail(email) {
    // Basic email pattern
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}