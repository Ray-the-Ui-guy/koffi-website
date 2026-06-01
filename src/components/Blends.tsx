import koffiBlendsImg from '../assets/koffi-blends.png';
import { useInView } from '../hooks/useInView';
import SectionHeader from './SectionHeader';

/* ─── Individual Blend Card ─────────────────────────────────────────────── */
interface BlendData {
  id: string;
  name: string;
  roast: string;
  description: string;
  price: string;
  bgFrom: string;
  bgTo: string;
  index: number;
}

function BlendCard({ name, roast, description, price, bgFrom, bgTo, index }: BlendData) {
  const { ref, inView } = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`flex flex-col rounded-2xl overflow-hidden
                  ${inView ? 'anim-fade-up' : 'hidden-before-anim'}`}
      style={{ animationDelay: `${index * 150}ms`, background: '#FFFDF7' }}
    >
      {/* Visual top */}
      <div
        className="w-full flex items-center justify-center relative overflow-hidden"
        style={{
          height: 'clamp(160px, 18vw, 220px)',
          background: `linear-gradient(145deg, ${bgFrom} 0%, ${bgTo} 100%)`,
        }}
      >
        {/* Subtle noise texture */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0px, transparent 1px, transparent 6px)',
          }}
        />
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <img src={koffiBlendsImg} alt={name} className="w-full h-full object-cover drop-shadow-2xl" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1" style={{ padding: 'clamp(24px, 4vw, 40px)' }}>
        <div className="mb-3">
          <h3
            className="m-0 text-koffi-brown"
            style={{ fontFamily: "'Nimbu Demo', serif", fontWeight: 500, fontSize: 'clamp(20px, 2.2vw, 24px)' }}
          >
            {name}
          </h3>
          <p className="m-0 uppercase tracking-[0.18em] text-xs text-koffi-brown/70" style={{ marginTop: '8px' }}>
            {roast}
          </p>
        </div>
        <p
          className="m-0 font-body flex-1"
          style={{ fontSize: '15.5px', lineHeight: '24px', color: 'rgba(70,30,16,0.7)', marginBottom: '24px' }}
        >
          {description}
        </p>
        <div className="flex items-center justify-between mt-auto w-full">
          <span className="font-body font-semibold text-koffi-brown text-lg">{price}</span>
          <a
            href="#shop"
            className="inline-flex items-center justify-center font-body font-semibold uppercase text-sm rounded-lg
                       transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0 shrink-0"
            style={{
              padding: '10px 20px',
              background: '#FFA9E9',
              color: '#461E10',
              boxShadow: '2px 2px 0px 1px #461E10',
            }}
          >
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── Blends Section ────────────────────────────────────────────────────── */
const blends: Omit<BlendData, 'index'>[] = [
  {
    id: 'morning',
    name: 'Morning Ritual',
    roast: 'Light Roast',
    description: 'Gentle, bright, and made for slow sunlit starts. Notes of citrus, honey, and calm.',
    price: '$18.00',
    bgFrom: '#0d6b4e',
    bgTo: '#09543D',
  },
  {
    id: 'focused',
    name: 'The Focused Few',
    roast: 'Medium Roast',
    description: 'Smooth and balanced for deep work and quiet hours. Clean, steady, and reliable.',
    price: '$20.00',
    bgFrom: '#5c2a18',
    bgTo: '#461E10',
  },
  {
    id: 'evening',
    name: 'Evening Unwind',
    roast: 'Dark Roast',
    description: 'Rich and bold without the edge. Made for when the day finally slows down.',
    price: '$22.00',
    bgFrom: '#1a6b54',
    bgTo: '#09543D',
  },
];

export default function Blends() {
  return (
    <section
      id="blends"
      aria-labelledby="blends-heading"
      className="w-full rounded-xl"
      style={{
        background: '#09543D',
        padding: 'clamp(60px, 8vw, 96px) clamp(16px, 4vw, 44px)',
      }}
    >
      {/* ── Header Container ── */}
      <div className="w-full flex justify-center" style={{ marginBottom: '40px' }}>
        <SectionHeader
          badgeText="The Collection"
          title="Our Blends"
          description="Three blends, each crafted for a different kind of quiet."
          light={true}
        />
      </div>

      {/* Cards layout — flexbox to guarantee horizontal centering */}
      <div
        className="w-full flex flex-wrap justify-center mx-auto"
        style={{ maxWidth: '1185px', gap: 'clamp(20px, 3vw, 42px)' }}
      >
        {blends.map((blend, i) => (
          <div
            key={blend.name}
            className="flex flex-col"
            style={{ 
              flex: '1 1 320px',
              maxWidth: '380px',
              width: '100%',
            }}
          >
            <BlendCard {...blend} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}
