// script.js

// Example JavaScript to handle any interactivity if needed
document.addEventListener('DOMContentLoaded', function() {
    // This function runs after the page is fully loaded
    console.log('Page Loaded');
});




//header//

document.addEventListener("DOMContentLoaded", function() {
    const searchBtn = document.querySelector('.search-btn');
    const closeBtn = document.querySelector('.close-btn');
    const searchInput = document.querySelector('.search-input');

    // Show the search input when search icon is clicked
    searchBtn.addEventListener('click', function() {
        searchInput.classList.add('active');
        searchInput.focus(); // Focus on the input field
        searchInput.style.visibility = 'visible'; // Ensure visibility
        searchBtn.classList.add('d-none'); // Hide the search button
        closeBtn.classList.remove('d-none'); // Show the close button
    });

    // Hide the search input and reset icons when close button is clicked
    closeBtn.addEventListener('click', function() {
        searchInput.classList.remove('active');
        searchInput.style.visibility = 'hidden'; // Hide visibility after transition
        closeBtn.classList.add('d-none'); // Hide the close button
        searchBtn.classList.remove('d-none'); // Show the search button
    });

    // Close the search input if clicking outside of it
    document.addEventListener('click', function(event) {
        if (!searchInput.contains(event.target) && !searchBtn.contains(event.target) && !closeBtn.contains(event.target)) {
            searchInput.classList.remove('active');
            searchInput.style.visibility = 'hidden'; // Hide visibility after transition
            closeBtn.classList.add('d-none');
            searchBtn.classList.remove('d-none');
        }
    });

    // Redirect to courses page when user presses Enter in the search input
    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the default form submission
            window.location.href = 'courses.html'; // Redirect to the courses page
        }
    });
});

//feeback//


document.addEventListener("DOMContentLoaded", function() {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const toastMessage = document.getElementById('feedback-toast');
    const closeToastBtn = document.getElementById('close-toast-btn');

    function showToast() {
        toastMessage.style.display = 'flex'; // Show toast with flex layout
        setTimeout(() => {
            toastMessage.style.opacity = 1; // Fade in effect
        }, 100);
    }

    function hideToast() {
        toastMessage.style.opacity = 0; // Fade out effect
        setTimeout(() => {
            toastMessage.style.display = 'none'; // Hide after fade out
        }, 300);
    }

    yesBtn.addEventListener('click', showToast);
    noBtn.addEventListener('click', showToast);
    closeToastBtn.addEventListener('click', hideToast);
});

//footer//

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}




