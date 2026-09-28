import React from 'react';
import { SITE_CONFIG } from '../config';
import { Shield, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#040810',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '5rem',
        paddingBottom: '2.5rem',
        position: 'relative'
      }}
    >
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                  border: '1px solid var(--border-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Shield style={{ color: '#f59e0b', width: '22px', height: '22px' }} />
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.2rem', color: '#ffffff' }}>
                DDS <span style={{ color: '#f59e0b' }}>TOTAL</span>
              </span>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              DDS TOTAL FINANCIAL SERVICES delivers disciplined wealth advisory, portfolio management, and long-term capital compounding for investors.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone style={{ width: '16px', height: '16px', color: '#38bdf8' }} />
                <span>{SITE_CONFIG.contact.phone}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail style={{ width: '16px', height: '16px', color: '#f59e0b' }} />
                <span>{SITE_CONFIG.contact.email}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin style={{ width: '16px', height: '16px', color: '#10b981' }} />
                <span>{SITE_CONFIG.contact.address}</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.25rem' }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li><a href="#services" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Services & Advisory</a></li>
              <li><a href="#calculator" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>SIP Wealth Simulator</a></li>
              <li><a href="#why-us" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Why Choose Us</a></li>
              <li><a href="#connect" style={{ color: '#f59e0b', textDecoration: 'none', fontWeight: 600 }}>Google Form Connect</a></li>
              <li><a href="#faq" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>FAQ</a></li>
            </ul>
          </div>

          {/* Investment Solutions */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.25rem' }}>
              Investment Solutions
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <li>Equity Portfolio Management</li>
              <li>Mutual Funds & SIP Advisory</li>
              <li>Retirement Planning & Pension</li>
              <li>Tax-Efficient Asset Allocation</li>
              <li>HNWI Bespoke Advisory</li>
            </ul>
          </div>

          {/* Regulatory Notice */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.25rem' }}>
              Trust & Compliance
            </h4>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.82rem', lineHeight: 1.6, marginBottom: '1rem' }}>
              Disclaimer: Investments in securities/mutual funds are subject to market risks. Read all scheme-related documents carefully before investing. Past performance is not an indicator of future returns.
            </p>
            <div style={{ padding: '0.6rem 0.8rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '0.5rem', border: '1px solid rgba(255, 255, 255, 0.05)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              🔒 SEBI Registered Network Partnerships
            </div>
          </div>

        </div>

        {/* Bottom copyright & Back to top */}
        <div style={{ paddingTop: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-dim)' }}>
          <div>
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved. Designed for GitHub Pages.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.8rem'
            }}
          >
            <span>Back to top</span>
            <ArrowUp style={{ width: '14px', height: '14px' }} />
          </button>
        </div>

      </div>
    </footer>
  );
}
