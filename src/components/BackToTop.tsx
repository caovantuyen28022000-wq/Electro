import { useBackToTop } from '../hooks';

/**
 * BackToTop Component
 * Replaces: Back to top button functionality from main.js
 */
export default function BackToTop() {
  const { isVisible, scrollToTop } = useBackToTop(300);

  return (
    <>
      {isVisible && (
        <a
          href="#"
          className="back-to-top"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          style={{
            display: isVisible ? 'block' : 'none',
            position: 'fixed',
            bottom: 15,
            right: 15,
            zIndex: 99,
          }}
        >
          <i className="fa fa-arrow-up" />
        </a>
      )}
    </>
  );
}