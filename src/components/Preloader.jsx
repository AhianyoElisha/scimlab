import React, { useState, useEffect } from 'react'

function Preloader() {
  const [visible, setVisible] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setLoaded(true);
      const timer = setTimeout(() => setVisible(false), 600);
      return () => clearTimeout(timer);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      // Fallback
      const fallback = setTimeout(handleLoad, 3000);
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(fallback);
      };
    }
  }, []);

  if (!visible) return null;

  return (
    <div id="preloader" className={`preloader${loaded ? ' loaded' : ''}`}>
      <div className="animation-preloader">
        <div className="spinner"></div>
        <div className="txt-loading">
          <span data-text-preloader="S" className="letters-loading">S</span>
          <span data-text-preloader="C" className="letters-loading">C</span>
          <span data-text-preloader="i" className="letters-loading">i</span>
          <span data-text-preloader="M" className="letters-loading">M</span>
          <span data-text-preloader="L" className="letters-loading">L</span>
          <span data-text-preloader="A" className="letters-loading">A</span>
          <span data-text-preloader="B" className="letters-loading">B</span>
        </div>
        <p className="text-center">Loading</p>
      </div>
      <div className="loader">
        <div className="row">
          <div className="col-3 loader-section section-left">
            <div className="bg"></div>
          </div>
          <div className="col-3 loader-section section-left">
            <div className="bg"></div>
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg"></div>
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preloader
