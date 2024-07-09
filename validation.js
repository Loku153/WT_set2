function validateForm() {
    var firstName = document.getElementById('firstName').value.trim();
    var lastName = document.getElementById('lastName').value.trim();
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value.trim();
    var phoneNumber = document.getElementById('phoneNumber').value.trim();
    var address = document.getElementById('address').value.trim();

    // Validate First Name
    if (firstName.length < 6 || !/^[a-zA-Z]+$/.test(firstName)) {
        alert('First Name should contain alphabets only and should be at least 6 characters long.');
        return false;
    }

    // Validate Last Name
    if (lastName === '') {
        alert('Last Name cannot be empty.');
        return false;
    }

    // Validate Password
    if (password.length < 6) {
        alert('Password should be at least 6 characters long.');
        return false;
    }

    // Validate Email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Invalid Email format.');
        return false;
    }

    // Validate Phone Number
    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
        alert('Phone Number should contain exactly 10 digits.');
        return false;
    }

    // Validate Address
    if (address === '') {
        alert('Address cannot be empty.');
        return false;
    }

    // If all validations pass, return true
    alert('Form validated successfully!');
    return true;
}
