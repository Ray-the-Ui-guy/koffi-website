import handsHeart from '../assets/hands-heart.svg.svg';
import handsClac  from '../assets/hands-clac.svg.svg';
import handsHello from '../assets/hands-hello.svg.svg';
import FeatureCard from './FeatureCard';
import SectionHeader from './SectionHeader';
import { useInView } from '../hooks/useInView';

/* ─── Cards data ────────────────────────────────────────────────────────── */
const cards = [
  {
    title: 'Crafted for Calm',
    description: 'Blends designed for people who want ritual without rush.',
    rotation: 1.5,
    offsetX: -30,
    iconSide: 'right' as const,
    icon: handsHeart,
    desktopPos: { left: '162px', top: '22px' },
    animDelay: 0,
  },
  {
    title: 'Flavour Without the Fuss',
    description: 'Smooth, bold taste minus the noise and crowded café energy.',
    rotation: -3,
    offsetX: 30,
    iconSide: 'left' as const,
    icon: handsClac,
    desktopPos: { left: '367px', top: '246px' },
    animDelay: 150,
  },
  {
    title: 'Comfort in Every Cup',
    description: 'A soothing brew for all who prefer breathing room over bustle.',
    rotation: 5.6,
    offsetX: 0,
    iconSide: 'right' as const,
    icon: handsHello,
    desktopPos: { left: '271px', top: '373px' },
    animDelay: 300,
  },
];

/* ─── WhyKoffi Section ──────────────────────────────────────────────────── */
export default function WhyKoffi() {
  const { ref: titleRef, inView: titleInView } = useInView(0.05);

  return (
    <section
      id="why-koffi"
      aria-labelledby="why-koffi-heading"
      className="w-full rounded-xl flex flex-col items-center relative overflow-visible"
      style={{
        background: '#FFFDF7',
        padding: 'clamp(60px, 8vw, 96px) clamp(16px, 4vw, 44px)',
        gap: '50px',
      }}
    >
      {/* Vertical dashed margin lines — desktop only */}
      <div
        aria-hidden
        className="hidden lg:block absolute top-0 bottom-0 pointer-events-none"
        style={{ left: '44px', width: '1px', borderLeft: '1px dashed rgba(58,49,56,0.2)' }}
      />
      <div
        aria-hidden
        className="hidden lg:block absolute top-0 bottom-0 pointer-events-none"
        style={{ right: '44px', width: '1px', borderLeft: '1px dashed rgba(58,49,56,0.2)' }}
      />

      {/* ── Header Container ── */}
      <SectionHeader
        badgeText="Why Koffi Exists"
        title={
          <>
            Coffee that gives you<br />
            <span 
              ref={titleRef}
              className={`inline-block px-4 pb-1 mt-1 ${titleInView ? 'anim-slide-in-left' : 'hidden-before-anim'}`} 
              style={{ background: '#FFA9E9' }}
            >
              space to breathe
            </span>
          </>
        }
        description="Because great flavour deserves room, and so do you."
        light={false}
      />
      {/* ── Cards — Native CSS Sticky Stack ── */}
      <div className="w-full max-w-[1185px] mx-auto relative mt-10 mb-[80vh]">
        {cards.map((card, i) => (
          <div
            key={card.title}
            className="w-full sticky flex justify-center"
            style={{
              top: `calc(15vh + ${i * 20}px)`,
              paddingTop: i === 0 ? '0' : '15vh',
              zIndex: 10 + i,
            }}
          >
            <div
              className="w-full max-w-[646px] shift-card-desktop"
              style={{ '--shift-x': `${card.offsetX}px` } as React.CSSProperties}
            >
              <FeatureCard
                title={card.title}
                description={card.description}
                rotation={card.rotation}
                iconSide={card.iconSide}
                animDelay={0}
                icon={
                  <img
                    src={card.icon}
                    alt=""
                    style={{ width: '100%', maxWidth: '118px', height: 'auto' }}
                    className="w-14 lg:w-auto drop-shadow-md"
                  />
                }
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
