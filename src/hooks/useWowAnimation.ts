import { useEffect } from 'react';

/**
 * Custom hook for WOW.js animation initialization
 * Replaces: new WOW().init() in main.js
 */
export function useWowAnimation() {
  useEffect(() => {
    // Dynamically import WOW.js to avoid SSR issues
    const initWow = async () => {
      try {
        const WOW = (await import('wowjs')).WOW;
        const wow = new WOW({
          boxClass: 'wow',
          animateClass: 'animated',
          offset: 0,
          mobile: true,
          live: true,
        });
        wow.init();
      } catch (error) {
        console.warn('WOW.js not available:', error);
      }
    };

    initWow();

    return () => {
      // Cleanup if needed
    };
  }, []);
}