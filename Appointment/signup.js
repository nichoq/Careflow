function exitPage() {
    window.location.href = 'homepage.html';
}

function toggleForm(formId) {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    
    if (formId === 'loginForm') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        loginForm.style.animation = 'none';
        loginForm.offsetHeight; // trigger reflow
        loginForm.style.animation = 'fadeInUp 0.4s ease';
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        signupForm.style.animation = 'none';
        signupForm.offsetHeight; // trigger reflow
        signupForm.style.animation = 'fadeInUp 0.4s ease';
    }
}

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;

    const storedUsers = JSON.parse(localStorage.getItem('users')) || {};

    if (storedUsers[loginEmail] && storedUsers[loginEmail].password === loginPassword) {
        alert("Login successful!");
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = "Mainpage.html";
    } else {
        alert("Invalid email or password. Please sign up if you don't have an account.");
    }
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const signupName = document.getElementById('signupName').value;
    const signupAge = document.getElementById('signupAge').value;
    const signupEmail = document.getElementById('signupEmail').value;
    const signupPhone = document.getElementById('signupPhone').value;
    const signupPassword = document.getElementById('signupPassword').value;
    const signupConfirmPassword = document.getElementById('signupConfirmPassword').value;

    if (signupPassword !== signupConfirmPassword) {
        alert("Passwords do not match");
        return;
    }

    const storedUsers = JSON.parse(localStorage.getItem('users')) || {};

    if (storedUsers[signupEmail]) {
        alert("Email already registered. Please login.");
        return;
    }

    storedUsers[signupEmail] = {
        name: signupName,
        age: signupAge,
        phone: signupPhone,
        password: signupPassword,
    };

    localStorage.setItem('users', JSON.stringify(storedUsers));

    alert("Signup successful! You can now login.");
    toggleForm('loginForm');
});

// Initialize by showing the login form
toggleForm('loginForm');