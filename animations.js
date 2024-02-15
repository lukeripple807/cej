document.addEventListener("DOMContentLoaded", function() {
    var element = document.querySelector('.lineUp');
    element.style.opacity = '1'; // Set opacity to 1 to reveal the element
    element.style.transform = 'translateY(0%)'; // Reset transform to initial position
  });

// Array of variations with title and favicon
var variations = [
  { title: "Centuri", favicon: "Favicons/centuri.png" },
  { title: "Schoology", favicon: "Favicons/schoology.png" },
  { title: "Google", favicon: "Favicons/google.png" }

];

    function changeTitleAndFavicon(variationIndex) {
      if (variationIndex >= 0 && variationIndex < variations.length) {
        // Change the title of the site
        document.title = variations[variationIndex].title;
        
        // Change the favicon
        var favicon = document.getElementById('favicon');
        favicon.href = variations[variationIndex].favicon;

        // Store the selected favicon index in localStorage
        localStorage.setItem('selectedFaviconIndex', variationIndex);
      } else {
        console.error("Invalid variation index");
      }
    }

    // Function to set favicon on page load
    function setPageFavicon() {
      var storedIndex = localStorage.getItem('selectedFaviconIndex');
      if (storedIndex !== null) {
        changeTitleAndFavicon(parseInt(storedIndex));
      }
    }

    // Set favicon on page load
    setPageFavicon();

    // Set favicon when page regains focus
    window.addEventListener('focus', setPageFavicon);