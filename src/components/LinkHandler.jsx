import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

function LinkHandler({ children }) {
  const navigate = useNavigate();

  const handleClick = useCallback((e) => {
    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href) return;

    // Skip external links, anchors, tel, mailto, javascript, assets
    if (
      href.startsWith('http') ||
      href.startsWith('//') ||
      href.startsWith('#') ||
      href.startsWith('tel:') ||
      href.startsWith('mailto:') ||
      href.startsWith('javascript:') ||
      href.startsWith('/assets/')
    ) {
      return;
    }

    // Internal route - use React Router
    e.preventDefault();
    navigate(href);
  }, [navigate]);

  return (
    <div onClick={handleClick} style={{ display: 'contents' }}>
      {children}
    </div>
  );
}

export default LinkHandler
