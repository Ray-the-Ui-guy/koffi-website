import './index.css';
import Hero     from './components/Hero';
import WhyKoffi from './components/WhyKoffi';
import Blends   from './components/Blends';
import Footer   from './components/Footer';

function App() {
  return (
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
      }}
    >
      <Hero />
      <WhyKoffi />
      <Blends />
      <Footer />
    </main>
  );
}

export default App;
