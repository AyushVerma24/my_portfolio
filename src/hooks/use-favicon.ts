
import { useEffect } from 'react';

/**
 * This hook ensures the favicon gets properly updated
 */
export function useFavicon() {
  useEffect(() => {
    // Helper function to update the favicon with timestamp to force refresh
    const updateFavicon = () => {
      const links = document.querySelectorAll("link[rel*='icon']");
      
      // Update each favicon link with a cache-busting parameter
      links.forEach(link => {
        const href = link.getAttribute('href');
        if (href && !href.includes('?v=')) {
          link.setAttribute('href', `${href}?v=${Date.now()}`);
          console.log(`Updated favicon: ${href}`);
        }
      });

      // Also update the apple-touch-icon if it exists
      const appleIcon = document.querySelector("link[rel='apple-touch-icon']");
      if (appleIcon) {
        const href = appleIcon.getAttribute('href');
        if (href && !href.includes('?v=')) {
          appleIcon.setAttribute('href', `${href}?v=${Date.now()}`);
          console.log(`Updated apple touch icon: ${href}`);
        }
      }
    };

    // Run the update after a short delay to ensure document is ready
    const timer = setTimeout(updateFavicon, 500);
    
    return () => clearTimeout(timer);
  }, []);
}

export default useFavicon;
