function loadSection(sectionId) {
  const contentDiv = document.getElementById('content');

  // Clear current content
  contentDiv.innerHTML = '';

  // Fetch the section from a predefined source or directly inject HTML
  // Example: you might use AJAX or fetch API to load the section
  fetch(`sections/${sectionId}.html`)
    .then(response => response.text())
    .then(data => {
      contentDiv.innerHTML = data;
      
      // Ensure LinkedIn badge script is reloaded and executed
      const script = document.createElement('script');
      script.src = 'https://platform.linkedin.com/badges/js/profile.js';
      script.async = true;
      script.defer = true;
      contentDiv.appendChild(script);

      // Optionally, you might need to add additional logic to re-initialize other scripts or plugins
      // This depends on what other scripts or plugins you are using in your sections
    })
    .catch(error => console.error('Error loading section:', error));
}
document.addEventListener("DOMContentLoaded", function() {
  const menu = document.querySelector('.menu');
  const content = document.querySelector('.content');

  // Toggle menu in portrait mode
  menu.addEventListener('click', function() {
    // Toggle expanded class for menu and content
    menu.classList.toggle('expanded');
    content.classList.toggle('expanded');
  });

  // Load the initial section (Bio by default)
  loadSection('bio');
});