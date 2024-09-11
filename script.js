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
        // Optionally, you can also initialize any scripts for the loaded content here
      })
      .catch(error => console.error('Error loading section:', error));
  }
  