import { useState, useEffect } from 'react';

/**
 * Custom hook for sticky navbar functionality
 * Replaces: $(window).scroll() handler in main.js
 */
export function useStickyNavbar(threshold: number = 45) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return isSticky;
}