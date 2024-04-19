
import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => setIsVisible(window.scrollY > 500);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      style={{
        all: 'unset',
        fontSize: '11px',
        position: 'fixed',
        right: '0px',
        bottom: '60px',
        cursor: 'pointer',
        transform: 'scale(1)',
        opacity: isVisible ? 1 : 0,
        transition: '0.3s',
        rotate:'-90deg',
        color:"#FFFFFF",
        textTransform:"uppercase",
      }}
      onClick={scrollToTop}
    >
     Return to the top
    </button>
  );
}
