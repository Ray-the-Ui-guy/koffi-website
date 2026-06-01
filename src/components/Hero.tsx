import heroImg from '../assets/koffi-hero.png';
import heroPattern from '../assets/pattern.svg';
import Navbar from './Navbar';
import { useInView } from '../hooks/useInView';

export default function Hero() {
  const { ref: textRef, inView: textIn } = useInView(0.1);
  const { ref: imgRef,  inView: imgIn  } = useInView(0.1);

  return (
    /**
     * Figma: HERO — 1275 × 740px, bg #09543D, border-radius 12px
     * On desktop  → fixed height 740px so absolutely-placed children render correctly
     * On mobile   → auto height, column flow
     */
    <section
      id="hero"
      className="relative w-full rounded-xl overflow-hidden"
      style={{ background: '#09543D' }}
    >
      {/* Pink radial glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 72% 48%, rgba(255,169,233,0.08) 0%, transparent 60%)',
        }}
      />

      {/* Pattern Overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${heroPattern})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.6,
        }}
      />

      {/* ── MASTER LAYOUT CONTAINER ── */}
      <div
        className="mx-auto w-full h-full max-w-[1275px] flex flex-col relative z-10"
        style={{ paddingLeft: 'clamp(16px, 4vw, 44px)', paddingRight: 'clamp(16px, 4vw, 44px)' }}
      >
        
        {/* Nav Container */}
        <div className="w-full" style={{ marginTop: '20px' }}>
          <Navbar />
        </div>

        {/* Hero Content Container */}
        <div className="w-full flex-1 flex flex-col lg:justify-start relative">
          <div
            className="
              flex flex-col lg:flex-row items-start lg:items-start justify-between
              gap-8 pt-[44px] pb-12
              lg:pt-0 desktop-hero-pad-bottom lg:gap-[13px]
              w-full
            "
          >
        {/* ── LEFT: text column ────────────────────────────────────────────
            Figma: Frame 2147238812 — 628 × 427.6px, gap: 60px
        ─────────────────────────────────────────────────────────────────── */}
        <div
          ref={textRef}
          className="flex flex-col w-full lg:w-[628px] lg:shrink-0 desktop-hero-push mobile-hero-push"
          style={{ gap: 'clamp(32px, 5vw, 60px)' }}
        >
          {/* Headline + subtitle block
              Figma: Frame 2147238810 — isolation: isolate; gap: 37.6px */}
          <div className="relative flex flex-col isolate" style={{ gap: '20px' }}>

            {/* H1 — Figma: Nimbu Demo 600, 75.2px, lineHeight 76px, #FFFFFF */}
            <h1
              className={`m-0 text-white uppercase ${textIn ? 'anim-fade-left' : 'hidden-before-anim'}`}
              style={{
                fontFamily: "'Nimbu Demo', serif",
                fontWeight: 600,
                fontSize: 'clamp(36px, 5.5vw, 75.2px)',
                lineHeight: '101%',
                letterSpacing: '0.537px',
                position: 'relative',
                zIndex: 1,
              }}
            >
              Love for Koffi,<br />fear of <span className="inline-block px-5 pb-1 mx-3" style={{ background: '#FFA9E9', color: '#461E10' }}>small</span> places.
            </h1>

            {/* Subtitle — Figma: Poppins 400, 20px, rgba(255,255,255,0.8) */}
            <p
              className={`m-0 ${textIn ? 'anim-fade-left d-200' : 'hidden-before-anim'}`}
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 400,
                fontSize: 'clamp(15px, 1.4vw, 20px)',
                lineHeight: '30px',
                letterSpacing: '-0.5px',
                color: 'rgba(255,255,255,0.8)',
                maxWidth: '578px',
                position: 'relative',
                zIndex: 2,
              }}
            >
              Great Koffi deserves room to breathe, and so do you. Discover
              blends crafted for comfort, calm, and a little escape in every sip.
            </p>
          </div>

          {/* Button holder — Figma: flex row, gap: 10px, 435 × 51px */}
          <div
            className={`flex flex-row flex-wrap items-center ${textIn ? 'anim-fade-up d-400' : 'hidden-before-anim'}`}
            style={{ gap: '10px' }}
          >
            {/* Shop our KOFFI — Figma: pink #FFA9E9, shadow #461E10 */}
            <a
              href="#shop"
              id="hero-shop-btn"
              className="inline-flex items-center justify-center cursor-pointer uppercase
                         transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '19px',
                padding: '20px 26px',
                width: '182px',
                height: '51px',
                background: '#FFA9E9',
                color: '#461E10',
                boxShadow: '2px 2px 0px 1px #461E10',
                borderRadius: '8px',
              }}
            >
              Shop our KOFFI
            </a>

            {/* Make Your Mug Happy — Figma: white #FFFFFF, shadow #012218 */}
            <a
              href="#mug"
              id="hero-mug-btn"
              className="inline-flex items-center justify-center cursor-pointer uppercase
                         transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '19px',
                padding: '20px 26px',
                width: '243px',
                height: '51px',
                background: '#FFFFFF',
                color: '#461E10',
                boxShadow: '2px 2px 0px 1px #012218',
                borderRadius: '8px',
              }}
            >
              Make Your Mug Happy
            </a>
          </div>
        </div>

        {/* ── RIGHT: product image ─────────────────────────────────────────
            Figma: image 22 — 589 × 526.6px
            User confirmed: NO horizontal flip (no matrix(-1,0,0,1,0,0))
        ─────────────────────────────────────────────────────────────────── */}
        <div
          ref={imgRef}
          className={`flex justify-center lg:justify-end w-full lg:w-[589px] lg:h-[526.6px] lg:shrink-0 mt-8 lg:mt-0 mb-12 lg:mb-0
                      ${imgIn ? 'anim-fade-right d-300' : 'hidden-before-anim'}`}
        >
          <img
            src={heroImg}
            alt="Koffi premium coffee product"
            className="w-full max-w-[500px] lg:max-w-none h-auto lg:h-full object-contain drop-shadow-2xl"
          />
        </div>
          </div>
        </div>
      </div>


    </section>
  );
}
