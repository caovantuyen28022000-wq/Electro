import { useState, useEffect } from 'react';

/**
 * Custom hook for spinner/loading screen functionality
 * Replaces: Spinner function in main.js
 */
export function useSpinner(delay: number = 1) {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return showSpinner;
}