import { useState, useCallback } from 'react';

/**
 * Custom hook for product quantity controls
 * Replaces: Product Quantity button click handlers in main.js
 */
export function useQuantityButton(initialValue: number = 1) {
  const [quantity, setQuantity] = useState(initialValue);

  const increment = useCallback(() => {
    setQuantity(prev => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setQuantity(prev => (prev > 0 ? prev - 1 : 0));
  }, []);

  const updateQuantity = useCallback((newVal: number) => {
    setQuantity(newVal >= 0 ? newVal : 0);
  }, []);

  return {
    quantity,
    increment,
    decrement,
    updateQuantity,
  };
}