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
