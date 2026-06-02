import { useEffect, useState } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [shutterState, setShutterState] = useState<'idle' | 'covering' | 'flipping'>('idle');
  const [loaderVisible, setLoaderVisible] = useState(true);

  useEffect(() => {
    // Stage 1 & 2: Progress bar completes in 1.4s
    const coverTimer = setTimeout(() => {
      setShutterState('covering');
    }, 1400);

    // Stage 3: After the green shutter covers the screen (0.6s transition), start the window-flip
    const flipTimer = setTimeout(() => {
      setShutterState('flipping');
      setLoaderVisible(false); // Hide the milky background under the flipping shutter
    }, 2000);

    // Stage 4: Once window-flip animation completes (0.9s), finish loader
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2900);

    return () => {
      clearTimeout(coverTimer);
      clearTimeout(flipTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <>
      {/* Milky Preloader Screen */}
      {loaderVisible && (
        <div className="loader-container">
          <div className="loader-logo-frame">
            <span className="loader-logo-text">KOFFI</span>
          </div>
          <div className="loader-progress-track">
            <div className="loader-progress-bar" />
          </div>
        </div>
      )}

      {/* Green Shutter / Window-Flip Transition Panel */}
      <div
        className={`transition-shutter ${
          shutterState === 'covering' || shutterState === 'flipping' ? 'active' : ''
        } ${shutterState === 'flipping' ? 'flip-up' : ''}`}
      >
        <span className="shutter-logo-text">KOFFI</span>
      </div>


    </>
  );
}
