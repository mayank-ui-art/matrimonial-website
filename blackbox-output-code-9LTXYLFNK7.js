// Search Profiles Function
function searchProfiles() {
    alert('Search functionality coming soon! Free registration ke liye click karein.');
}

// Simple Contact Form
function submitContact() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if(name && email && message) {
        alert('Thank you! We will contact you soon.');
    } else {
        alert('Please fill all fields.');
    }
}

// Local Storage - Save User Data (Free Option)
function saveUser() {
    const userData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        age: document.getElementById('age').value,
        profession: document.getElementById('profession').value
    };
    
    localStorage.setItem('userProfile', JSON.stringify(userData));
    alert('Profile saved successfully!');
}

// Load User Profile
function loadUser() {
    const stored = localStorage.getItem('userProfile');
    if(stored) {
        const userData = JSON.parse(stored);
        console.log(userData);
        alert('Welcome back, ' + userData.name);
    }
}