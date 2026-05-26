import { useEffect } from 'react';
import { useQuantityButton } from '../hooks';

interface QuantityButtonProps {
  initialValue?: number;
  onQuantityChange?: (quantity: number) => void;
  className?: string;
}

/**
 * QuantityButton Component
 * Replaces: Product Quantity button functionality from main.js
 */
export default function QuantityButton({ 
  initialValue = 1, 
  onQuantityChange,
  className = ''
}: QuantityButtonProps) {
  const { quantity, increment, decrement } = useQuantityButton(initialValue);

  // Call onQuantityChange when quantity changes
  useEffect(() => {
    if (onQuantityChange) {
      onQuantityChange(quantity);
    }
  }, [quantity, onQuantityChange]);

  return (
    <div className={`quantity ${className}`}>
      <button 
        className="btn btn-minus" 
        type="button" 
        onClick={decrement}
        disabled={quantity <= 0}
      >
        <i className="fa fa-minus" />
      </button>
      <input 
        type="number" 
        className="form-control" 
        value={quantity} 
        readOnly 
        min="0"
      />
      <button 
        className="btn btn-plus" 
        type="button" 
        onClick={increment}
      >
        <i className="fa fa-plus" />
      </button>
    </div>
  );
}