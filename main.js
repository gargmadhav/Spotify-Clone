function redirectToAnotherPage() {
    window.location.href = "playlist.html";
}

// playlist open

document.getElementById("toggle").addEventListener("click", redirectToAnotherPage);

// drop down BAR
function toggleMenu() {
    var navbar = document.getElementById('navbar');
    var options = document.getElementById('options');

    if (navbar.classList.contains('navbar-expanded')) {
        navbar.classList.remove('navbar-expanded');
        options.classList.remove('show');
    } else {
        navbar.classList.add('navbar-expanded');
        options.classList.add('show');
    }
}

// for cross button
function redirectToHome() {
    window.location.href = "index.html";
  }
