document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let errorMessages = [];
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let gender = document.getElementById('gender').value;
    let dob = document.getElementById('dob').value;
    let privacy = document.getElementById('privacy').checked;

    // Validate Name (at least 3 characters)
    if (name.length < 3) {
        errorMessages.push('Name must be at least 3 characters long.');
    }

    // Validate Email (must include "@" and ".")
    if (!email.includes('@') || !email.includes('.')) {
        errorMessages.push('Invalid email format.');
    }

    // Validate Address (at least 10 characters)
    if (address.length < 10) {
        errorMessages.push('Address must be at least 10 characters long.');
    }

    // Validate Gender (must be selected)
    if (gender === "") {
        errorMessages.push('Please select a gender.');
    }

    // Validate Date of Birth (must be in the past)
    let today = new Date();
    let birthDate = new Date(dob);
    if (birthDate >= today) {
        errorMessages.push('Date of Birth must be in the past.');
    }

    // Validate Privacy Policy (must be checked)
    if (!privacy) {
        errorMessages.push('You must agree to the privacy policy.');
    }

    // Display error messages or submit form
    let errorMessagesContainer = document.getElementById('errorMessages');
    errorMessagesContainer.innerHTML = '';

    if (errorMessages.length > 0) {
        errorMessages.forEach(function(message) {
            let errorItem = document.createElement('div');
            errorItem.textContent = message;
            errorMessagesContainer.appendChild(errorItem);
        });
    } else {
        alert('Form submitted successfully!');
        // Here you can write the code to submit the form data
    }
});

document.getElementById('backButton').addEventListener('click', function() {
    window.location.href = 'HOME PAGE.html'; // Change 'index.html' to the actual main page URL
});
