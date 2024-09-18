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
    const slider = document.querySelector('#textSize');
  
    // Function to load the default section based on orientation
    function loadDefaultSection() {
      if (window.matchMedia("(orientation: landscape)").matches) {
        // If in landscape, load the 'education' section
        loadSection('education');
      } else {
        // If in portrait, load the 'bio' section
        loadSection('bio');
      }
    }
  
    // Ensure all elements are present
    if (menu && content) {
      // Add event listener for toggling the menu in portrait mode
      menu.addEventListener('click', function() {
        menu.classList.toggle('expanded');
        content.classList.toggle('expanded');
      });
  
      // Load the default section based on orientation
      loadDefaultSection();
  
      // Adjust text size based on slider value
      if (slider) {
        slider.addEventListener('input', function() {
          content.style.fontSize = `${slider.value}px`;
        });
      } else {
        console.error('Text size slider not found.');
      }
    } else {
      console.error('One or more elements are missing.');
    }
  
    // Listen for orientation changes to reload the default section IF needed
    /*
    window.addEventListener('resize', function() {
      loadDefaultSection();
    });
    */
  });

/* MEDIA */
  function openModal(element) {
    const modal = document.getElementById("myModal");
    const modalContent = document.getElementById("modalContent");

    // Clear previous content
    modalContent.innerHTML = '';

    // Clone the clicked element
    const clone = element.cloneNode(true);
    clone.style.width = '100%'; // Ensure full width
    clone.style.height = 'auto'; // Maintain aspect ratio

    // If it's a video, ensure it plays when opened
    const mediaElement = clone.querySelector('video');
    if (mediaElement) {
        mediaElement.removeAttribute('muted');
        mediaElement.setAttribute('controls', 'true');
        mediaElement.play();
    }

    // Append the clone to the modal
    modalContent.appendChild(clone);
    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";

    // Pause any video that was playing
    const video = modal.querySelector('video');
    if (video) {
        video.pause();
    }
}

// Close modal when clicking outside the content
window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
        closeModal();
    }
}