document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;

    // Save username in local storage
    localStorage.setItem('username', username);

    // Save username in JSON file using AJAX
    fetch('login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            // Redirect to game page
            window.location.href = 'game.html';
        } else {
            console.error(data.message);
        }
    })
    .catch(error => console.error('Error:', error));
});
