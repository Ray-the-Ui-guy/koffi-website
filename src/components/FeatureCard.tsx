import { useInView } from '../hooks/useInView';

interface FeatureCardProps {
  title: string;
  description: string;
  rotation: number;       // degrees — 0 on mobile
  icon: React.ReactNode;
  iconSide?: 'left' | 'right';
  animDelay?: number;
}

export default function FeatureCard({
  title,
  description,
  rotation,
  icon,
  iconSide = 'right',
  animDelay = 0,
}: FeatureCardProps) {
  const { ref, inView } = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`w-full max-w-[646px] transition-all duration-1000 ease-out transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}
      style={{ transitionDelay: `${animDelay}ms`, overflowAnchor: 'none' }}
    >
      <div
        className="flex flex-row justify-between items-center gap-4 sm:gap-8 bg-white w-full h-full"
        style={{
          padding: 'clamp(20px, 3vw, 40px)',
          borderRadius: '20px',
          boxShadow: '0px 0px 67.33px rgba(0,0,0,0.10)',
          transform: `rotate(${rotation}deg)`,
          cursor: 'default',
          overflowAnchor: 'none',
        }}
      >
      {iconSide === 'left' && (
        <div className="shrink-0 w-14 sm:w-24 flex items-center justify-center">{icon}</div>
      )}

      <div className="flex flex-col gap-3 sm:gap-4 flex-1 min-w-0">
        <h3
          className="m-0 font-body font-normal whitespace-nowrap lg:whitespace-normal"
          style={{
            fontSize: 'clamp(15px, 2vw, 24px)',
            lineHeight: '24px',
            letterSpacing: '-0.242px',
            color: '#332601',
          }}
        >
          {title}
        </h3>
        <p
          className="m-0 font-body"
          style={{
            fontSize: '12px',
            lineHeight: '16px',
            color: '#332601',
            maxWidth: '260px',
          }}
        >
          {description}
        </p>
      </div>

        {iconSide === 'right' && (
          <div className="shrink-0 w-14 sm:w-24 flex items-center justify-center">{icon}</div>
        )}
      </div>
    </div>
  );
}
