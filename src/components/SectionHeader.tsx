import React from 'react';
import { useInView } from '../hooks/useInView';
import coffeeIcon from '../assets/coffee-01.svg';

interface SectionHeaderProps {
  badgeText: string;
  title: React.ReactNode;
  description: string;
  light?: boolean;
  align?: 'left' | 'center';
}

export default function SectionHeader({
  badgeText,
  title,
  description,
  light = false,
  align = 'center',
}: SectionHeaderProps) {
  const { ref, inView } = useInView(0.1);

  const badgeTextColor = light ? 'rgba(255,255,255,0.7)' : '#461E10';
  const badgeBorderColor = light ? 'rgba(255,255,255,0.2)' : '#EDEDED';
  const descColor = light ? 'rgba(255,255,255,0.65)' : 'rgba(38,38,38,0.72)';

  return (
    <div
      ref={ref}
      className={`flex flex-col relative w-full ${
        align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'
      }`}
      style={{ maxWidth: '529px' }}
    >
      {/* 1. Badge Container */}
      <div
        className={`relative z-10 flex flex-row flex-nowrap items-center gap-2 pb-2 whitespace-nowrap
                    ${align === 'center' ? 'justify-center' : 'justify-start'}
                    ${inView ? 'anim-fade-up' : 'hidden-before-anim'}`}
        style={{ borderBottom: `0.76px solid ${badgeBorderColor}`, marginBottom: '40px' }}
      >
        <span className="font-ui font-medium" style={{ fontSize: '8.4px', color: badgeTextColor }}>//</span>
        <img
          src={coffeeIcon}
          alt=""
          width={14}
          height={14}
          style={{ filter: light ? 'brightness(0) invert(1)' : 'none' }}
        />
        <span className="font-ui font-medium uppercase tracking-wide" style={{ fontSize: '8.8px', color: badgeTextColor }}>
          {badgeText}
        </span>
        <span
          className="font-ui font-medium inline-block -scale-x-100"
          style={{ fontSize: '8.4px', color: badgeTextColor }}
        >
          //
        </span>
      </div>

      {/* 2. Title Container */}
      <h2
        className={`relative z-10 font-display m-0 w-full
                    ${align === 'center' ? 'text-center' : 'text-left'}
                    ${inView ? 'anim-fade-up d-150' : 'hidden-before-anim'}
                    ${light ? 'text-white' : 'text-koffi-brown'}`}
        style={{
          fontWeight: 500,
          fontSize: light ? 'clamp(32px, 4.5vw, 52px)' : 'clamp(28px, 4vw, 50.1px)',
          lineHeight: light ? '1.1' : '1.12',
          letterSpacing: light ? '0' : '-0.52px',
        }}
      >
        {title}
      </h2>

      {/* 3. Subheader/Description Container */}
      <p
        className={`relative z-10 font-body w-full
                    ${align === 'center' ? 'text-center mx-auto' : 'text-left'}
                    ${inView ? 'anim-fade-up d-300' : 'hidden-before-anim'}`}
        style={{
          fontSize: light ? '16px' : '15px',
          lineHeight: light ? '26px' : '24px',
          color: descColor,
          marginTop: '6px',
        }}
      >
        {description}
      </p>
    </div>
  );
}
