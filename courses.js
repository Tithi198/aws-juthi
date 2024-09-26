//header//

document.addEventListener("DOMContentLoaded", function() {
  const searchBtn = document.querySelector('.search-btn');
  const closeBtn = document.querySelector('.close-btn');
  const searchInput = document.querySelector('.search-input');
  const coursesSection = document.querySelector('.coding-section');

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

  // Redirect to courses section on pressing Enter key
  searchInput.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') { // Check if the key pressed is Enter
          event.preventDefault(); // Prevent default form submission
          coursesSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the courses section
      }
  });
});



//coding skill//

function navigateToCourse(courseId) {
    const courseElement = document.getElementById(courseId);
    if (courseElement) {
      window.scrollTo({
        top: courseElement.offsetTop,
        behavior: 'smooth'
      });
    } else {
      alert("Course not found!");
    }
  }
  
  document.querySelector(".form-select").addEventListener("change", function() {
    const selectedCourse = this.value;
    navigateToCourse(selectedCourse);
  });
  
document.addEventListener('DOMContentLoaded', redirectToCourse);



//newsletter toast//

const form = document.getElementById('contactForm');
const toastMessage = new bootstrap.Toast(document.getElementById('toastMessage'));

form.addEventListener('submit', function(event) {
    event.preventDefault();
    toastMessage.show();
});


//footer//

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

