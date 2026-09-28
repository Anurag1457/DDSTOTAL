import React from 'react';
import { SITE_CONFIG } from '../config';
import { ShieldCheck, ArrowRight, TrendingUp, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';

export default function Hero({ onOpenModal }) {
  return (
    <section
      style={{
        paddingTop: '9rem',
        paddingBottom: '5rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          
          {/* Left Column Text & CTAs */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.4rem 1rem',
                borderRadius: '2rem',
                background: 'rgba(245, 158, 11, 0.1)',
                border: '1px solid var(--border-gold)',
                color: '#f59e0b',
                fontSize: '0.85rem',
                fontWeight: 600,
                marginBottom: '1.5rem'
              }}
            >
              <Sparkles style={{ width: '16px', height: '16px' }} />
              <span>Certified Fiduciary Wealth Management</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                lineHeight: 1.1,
                fontWeight: 800,
                marginBottom: '1.25rem'
              }}
            >
              Master Your Money with <span className="gradient-text-gold">DDS TOTAL</span> Wealth Handling
            </h1>

            <p
              style={{
                fontSize: '1.15rem',
                color: 'var(--text-muted)',
                marginBottom: '2rem',
                maxWidth: '560px'
              }}
            >
              We simplify complex market investments into personalized, high-yield wealth portfolios. Connect today for professional guidance tailored to your lifetime goals.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
              <a href="#connect" className="btn-gold">
                <span>Connect via Google Form</span>
                <ArrowRight style={{ width: '18px', height: '18px' }} />
              </a>

              <a href="#calculator" className="btn-secondary">
                <span>Try SIP Calculator</span>
                <ChevronRight style={{ width: '18px', height: '18px' }} />
              </a>
            </div>

            {/* Key Trust Signals */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', color: 'var(--text-muted)', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 style={{ width: '18px', height: '18px', color: '#10b981' }} />
                <span>Zero Hidden Fees</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 style={{ width: '18px', height: '18px', color: '#10b981' }} />
                <span>Bespoke Asset Allocation</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 style={{ width: '18px', height: '18px', color: '#10b981' }} />
                <span>SEBI Regulated Partner Network</span>
              </div>
            </div>
          </div>

          {/* Right Column Visual Dashboard Mockup */}
          <div style={{ position: 'relative' }}>
            {/* Glowing background halo */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '320px',
                height: '320px',
                background: 'radial-gradient(circle, rgba(245, 158, 11, 0.2) 0%, rgba(56, 189, 248, 0.1) 60%, transparent 80%)',
                filter: 'blur(40px)',
                zIndex: 0,
                pointerEvents: 'none'
              }}
            />

            <div
              className="glass-card"
              style={{
                padding: '2rem',
                position: 'relative',
                zIndex: 1,
                border: '1px solid rgba(245, 158, 11, 0.25)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Portfolio Summary</span>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff' }}>DDS Total Managed Wealth</h3>
                </div>
                <div style={{ padding: '0.5rem 0.75rem', borderRadius: '0.5rem', background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', fontSize: '0.85rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <TrendingUp style={{ width: '16px', height: '16px' }} />
                  <span>+18.4% YOY</span>
                </div>
              </div>

              {/* Stat breakdown box */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '0.75rem', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Target Horizon</span>
                  <p style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f8fafc' }}>Long-Term Growth</p>
                </div>
                <div style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '0.75rem', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Risk Profile</span>
                  <p style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f59e0b' }}>Balanced Aggressive</p>
                </div>
              </div>

              {/* Progress visual bar */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Asset Allocation Mix</span>
                  <span style={{ color: '#38bdf8', fontWeight: 600 }}>100% Optimized</span>
                </div>
                <div style={{ height: '10px', borderRadius: '5px', background: 'rgba(255,255,255,0.1)', overflow: 'hidden', display: 'flex' }}>
                  <div style={{ width: '55%', background: '#38bdf8' }} title="Equities 55%" />
                  <div style={{ width: '25%', background: '#f59e0b' }} title="Mutual Funds 25%" />
                  <div style={{ width: '20%', background: '#10b981' }} title="Debt & Gold 20%" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '0.5rem' }}>
                  <span>● Equities (55%)</span>
                  <span>● Mutual Funds (25%)</span>
                  <span>● Debt/Gold (20%)</span>
                </div>
              </div>

              {/* Quick action button inside mockup */}
              <button
                onClick={onOpenModal}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  background: 'rgba(245, 158, 11, 0.15)',
                  border: '1px solid var(--border-gold)',
                  color: '#f59e0b',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={e=>e.currentTarget.style.background='rgba(245, 158, 11, 0.25)'}
                onMouseOut={e=>e.currentTarget.style.background='rgba(245, 158, 11, 0.15)'}
              >
                <ShieldCheck style={{ width: '18px', height: '18px' }} />
                <span>Request Free Portfolio Assessment</span>
              </button>
            </div>
          </div>

        </div>

        {/* Floating Metrics Bar */}
        <div
          style={{
            marginTop: '4rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {SITE_CONFIG.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '1.5rem',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.06)'
              }}
            >
              <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.2rem' }}>
                {stat.value}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500 }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
