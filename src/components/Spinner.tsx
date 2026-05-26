import { useSpinner } from '../hooks';

/**
 * Spinner Component
 * Replaces: Spinner/loading screen functionality from main.js
 */
export default function Spinner() {
  const showSpinner = useSpinner(1);

  if (!showSpinner) return null;

  return (
    <div
      id="spinner"
      className="show"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}