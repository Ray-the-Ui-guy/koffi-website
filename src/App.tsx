import { useState, useEffect } from 'react';
import './index.css';
import Hero     from './components/Hero';
import WhyKoffi from './components/WhyKoffi';
import Blends   from './components/Blends';
import Footer   from './components/Footer';
import Loader   from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  // Prevent scrolling while preloader is active
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [loading]);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <main
        style={{
          width: '100%',
          minHeight: '100svh',
          background: '#FFFFFF',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          padding: '16px',
          gap: '10px',
          boxSizing: 'border-box',
          opacity: loading ? 0 : 1,
          transition: 'opacity 0.3s ease-in-out',
        }}
      >
        <Hero />
        <WhyKoffi />
        <Blends />
        <Footer />
      </main>
    </>
  );
}

export default App;

