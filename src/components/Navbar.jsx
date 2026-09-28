import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../config';
import { Shield, Menu, X, ArrowRight, PhoneCall } from 'lucide-react';

export default function Navbar({ onOpenModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(7, 13, 24, 0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
              border: '1px solid var(--border-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-gold)'
            }}
          >
            <Shield style={{ color: '#f59e0b', width: '24px', height: '24px' }} />
          </div>
          <div>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: '1.25rem',
                color: '#ffffff',
                letterSpacing: '-0.02em',
                display: 'block',
                lineHeight: 1.1
              }}
            >
              DDS <span style={{ color: '#f59e0b' }}>TOTAL</span>
            </span>
            <span
              style={{
                fontSize: '0.65rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 600
              }}
            >
              FINANCIAL SERVICES
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '2rem',
            fontFamily: 'var(--font-heading)',
            fontWeight: 500,
            fontSize: '0.95rem'
          }}
          className="desktop-nav"
        >
          <a href="#services" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e=>e.target.style.color='#f8fafc'} onMouseOut={e=>e.target.style.color='var(--text-muted)'}>Services</a>
          <a href="#calculator" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e=>e.target.style.color='#f8fafc'} onMouseOut={e=>e.target.style.color='var(--text-muted)'}>Growth Calculator</a>
          <a href="#why-us" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e=>e.target.style.color='#f8fafc'} onMouseOut={e=>e.target.style.color='var(--text-muted)'}>Why Choose Us</a>
          <a href="#faq" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e=>e.target.style.color='#f8fafc'} onMouseOut={e=>e.target.style.color='var(--text-muted)'}>FAQ</a>
          <a href="#connect" style={{ color: '#f59e0b', textDecoration: 'none', fontWeight: 600 }}>Google Form</a>
        </nav>

        {/* Desktop Actions */}
        <div style={{ display: 'none', alignItems: 'center', gap: '1rem' }} className="desktop-nav">
          <a
            href={`tel:${SITE_CONFIG.contact.phone.replace(/\s+/g, '')}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              fontSize: '0.85rem'
            }}
          >
            <PhoneCall style={{ width: '16px', height: '16px', color: '#38bdf8' }} />
            <span>{SITE_CONFIG.contact.phone}</span>
          </a>
          <button className="btn-gold" onClick={onOpenModal}>
            <span>Get Started</span>
            <ArrowRight style={{ width: '16px', height: '16px' }} />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-main)',
            cursor: 'pointer',
            padding: '0.5rem'
          }}
          className="mobile-toggle"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X style={{ width: '28px', height: '28px' }} /> : <Menu style={{ width: '28px', height: '28px' }} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(7, 13, 24, 0.98)',
            borderBottom: '1px solid var(--glass-border)',
            padding: '1.5rem 1.5rem 2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem'
          }}
        >
          <a href="#services" onClick={()=>setMobileMenuOpen(false)} style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 600 }}>Services</a>
          <a href="#calculator" onClick={()=>setMobileMenuOpen(false)} style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 600 }}>Growth Calculator</a>
          <a href="#why-us" onClick={()=>setMobileMenuOpen(false)} style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 600 }}>Why Choose Us</a>
          <a href="#connect" onClick={()=>setMobileMenuOpen(false)} style={{ color: '#f59e0b', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 700 }}>Google Connect Form</a>
          <button className="btn-gold" onClick={() => { setMobileMenuOpen(false); onOpenModal(); }} style={{ width: '100%', justifyContent: 'center' }}>
            Get Started
          </button>
        </div>
      )}

      {/* Inline styles for media query responsiveness */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
