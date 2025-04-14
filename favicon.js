
// This script helps with updating the favicon
(function() {
  // Force a favicon refresh by adding a timestamp
  const updateFavicon = () => {
    // Find existing favicon links
    const iconLinks = document.querySelectorAll("link[rel*='icon']");
    
    // Update each link with a cache-busting query parameter
    iconLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && !href.includes('?v=')) {
        link.setAttribute('href', `${href}?v=${new Date().getTime()}`);
      }
    });
    
    console.log('Favicon refresh triggered');
  };
  
  // Run after a short delay to ensure the page is loaded
  setTimeout(updateFavicon, 1000);
})();
