import koffiLogo from '../assets/koffilogo.svg';

export default function Navbar() {
  return (
    <nav
      aria-label="Main navigation"
      className="w-full relative z-20"
    >
      <div className="w-full flex items-center justify-between" style={{ height: '45px' }}>

        {/* ── Logo ── */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <img src={koffiLogo} alt="Koffi icon" width={22} height={22} />
          <span
            className="text-white uppercase"
            style={{
              fontFamily: "'Joti One', cursive",
              fontSize: '26px',
              lineHeight: '19px',
              letterSpacing: '0.571px',
            }}
          >
            KOFFI
          </span>
        </a>

        {/* ── CTA Button (All screens) ── */}
        <a
          href="#blends"
          id="nav-explore-btn"
          className="inline-flex items-center justify-center bg-koffi-pink text-koffi-brown font-body font-semibold uppercase cursor-pointer transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
          style={{
            fontSize: '14px',
            lineHeight: '19px',
            padding: '12px 20px',
            height: '44px',
            borderRadius: '8px',
            boxShadow: '2px 2px 0px 1px #461E10',
            color: '#461E10',
          }}
        >
          Explore Blends
        </a>

      </div>
    </nav>
  );
}
