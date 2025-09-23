import { useEffect } from 'react';

function Preloader() {
  useEffect(() => {
    const handleLoad = () => {
      const preloader = document.querySelector('.preloader');
      if (preloader) {
        setTimeout(() => {
          preloader.style.opacity = 0;
          preloader.style.transition = 'opacity 0.5s';
          setTimeout(() => {
            preloader.style.display = 'none';
          }, 500);
        }, 500);
      }
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return <div className="preloader">Loading...</div>;
}

export default Preloader;
