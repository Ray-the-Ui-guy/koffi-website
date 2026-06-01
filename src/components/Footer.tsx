import koffiLogo from '../assets/koffilogo.svg';
import { useInView } from '../hooks/useInView';

const navLinks = ['Shop', 'Our Story', 'Contact', 'Instagram'];

export default function Footer() {
  const { ref, inView } = useInView(0.05);

  return (
    <footer
      id="footer"
      className="w-full rounded-xl flex flex-col items-center"
      style={{
        background: '#461E10',
        padding: 'clamp(60px, 8vw, 100px) clamp(20px, 5vw, 64px) clamp(32px, 4vw, 48px)',
        gap: 'clamp(32px, 5vw, 56px)',
      }}
    >
      {/* ── Big logo block ── */}
      <div
        ref={ref}
        className={`flex flex-col items-center gap-5 text-center ${inView ? 'anim-scale-in' : 'hidden-before-anim'}`}
      >
        {/* Horizontal Logo + Text */}
        <div className="flex flex-row items-center justify-center gap-4 sm:gap-6">
          {/* Logo icon */}
          <img
            src={koffiLogo}
            alt="Koffi"
            style={{ width: 'clamp(40px, 6vw, 80px)', height: 'auto', opacity: 0.9 }}
          />

          {/* Giant KOFFI wordmark */}
          <span
            className="text-white uppercase leading-none tracking-wider select-none"
            style={{
              fontFamily: "'Nimbu Demo', serif",
              fontWeight: 600,
              fontSize: 'clamp(64px, 14vw, 180px)',
              letterSpacing: '4px',
              opacity: 0.95,
            }}
          >
            KOFFI
          </span>
        </div>

        {/* Tagline */}
        <p
          className="font-body text-center"
          style={{
            fontSize: 'clamp(14px, 1.4vw, 18px)',
            lineHeight: '1.6',
            color: 'rgba(255,255,255,0.5)',
            maxWidth: '100%',
          }}
        >
          Great flavour deserves room, and so do you.
        </p>
      </div>

      {/* ── Nav links ── */}
      <div className="flex flex-wrap justify-center gap-5 sm:gap-10">
        {navLinks.map(link => (
          <a
            key={link}
            href="#"
            className="font-body uppercase text-sm tracking-widest transition-colors duration-200"
            style={{ color: 'rgba(255,255,255,0.45)', letterSpacing: '2px' }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.9)')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.45)')}
          >
            {link}
          </a>
        ))}
      </div>

      {/* ── Divider ── */}
      <div className="w-full" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }} />

      {/* ── Bottom bar ── */}
      <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-3 text-sm">
        <span className="font-body" style={{ color: 'rgba(255,255,255,0.3)' }}>
          © 2025 Koffi. All rights reserved.
        </span>

        <a
          href="https://heritageisaac.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body transition-all duration-200 group"
          style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement;
            el.style.color = '#FFFFFF';
            el.style.textDecoration = 'underline';
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement;
            el.style.color = 'rgba(255,255,255,0.3)';
            el.style.textDecoration = 'none';
          }}
        >
          Built by Heritage Isaac{' '}
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            {'↗\uFE0E'}
          </span>
        </a>
      </div>
    </footer>
  );
}
