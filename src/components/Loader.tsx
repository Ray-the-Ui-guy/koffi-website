import { useEffect, useState } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [shutterState, setShutterState] = useState<'idle' | 'covering' | 'flipping'>('idle');

  useEffect(() => {
    // Stage 1 & 2: Progress bar completes in 1.4s
    const coverTimer = setTimeout(() => {
      setShutterState('covering');
    }, 1400);

    // Stage 3: After color transition completes (0.6s), trigger window-flip
    const flipTimer = setTimeout(() => {
      setShutterState('flipping');
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
    <div
      className={`loader-container ${
        shutterState === 'covering' || shutterState === 'flipping' ? 'shutter-green' : ''
      } ${shutterState === 'flipping' ? 'flip-up' : ''}`}
    >
      <div className="loader-logo-frame">
        <span className="loader-logo-text">KOFFI</span>
      </div>
      <div className="loader-progress-track">
        <div className="loader-progress-bar" />
      </div>
    </div>
  );
}
