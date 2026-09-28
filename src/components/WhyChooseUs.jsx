import React from 'react';
import { ShieldCheck, BarChart3, Users2, Clock, LockKeyhole, Award } from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Client-First Fiduciary Standards",
      desc: "Your financial interests always come first. No hidden commissions, no biased recommendations."
    },
    {
      icon: BarChart3,
      title: "Data-Driven Market Analytics",
      desc: "Our investment models combine macro market analysis with rigorous stock and fund screening algorithms."
    },
    {
      icon: Users2,
      title: "Dedicated Wealth Advisor",
      desc: "Get direct line access to your personal wealth strategist who reviews and rebalances your portfolio."
    },
    {
      icon: Clock,
      title: "Continuous Portfolio Monitoring",
      desc: "Markets shift daily. We actively monitor asset performance and manage risk during market volatility."
    }
  ];

  return (
    <section id="why-us" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          
          {/* Left Text */}
          <div>
            <span
              style={{
                fontSize: '0.85rem',
                color: '#10b981',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                fontWeight: 700,
                display: 'block',
                marginBottom: '0.5rem'
              }}
            >
              The DDS TOTAL Advantage
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.25rem', lineHeight: 1.15 }}>
              Why Investors Trust <span className="gradient-text-emerald">DDS TOTAL FINANCIAL</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '2rem' }}>
              Wealth management is not just about choosing stocks; it is about building a disciplined, risk-mitigated strategy that preserves capital while compound-growing assets across market cycles.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {pillars.map((pillar, idx) => {
                const IconComp = pillar.icon;
                return (
                  <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        padding: '0.6rem',
                        borderRadius: '0.75rem',
                        background: 'rgba(16, 185, 129, 0.12)',
                        border: '1px solid rgba(16, 185, 129, 0.25)',
                        color: '#10b981',
                        flexShrink: 0
                      }}
                    >
                      <IconComp style={{ width: '22px', height: '22px' }} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.2rem' }}>
                        {pillar.title}
                      </h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Card Visual */}
          <div>
            <div
              className="glass-card"
              style={{
                padding: '2.5rem',
                border: '1px solid var(--border-gold)',
                background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.85) 0%, rgba(30, 41, 59, 0.7) 100%)',
                textAlign: 'center'
              }}
            >
              <div
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  background: 'rgba(245, 158, 11, 0.15)',
                  border: '2px solid var(--accent-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#f59e0b',
                  margin: '0 auto 1.5rem auto'
                }}
              >
                <Award style={{ width: '36px', height: '36px' }} />
              </div>

              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
                Ready to Accelerate Your Portfolio?
              </h3>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2rem' }}>
                Join hundreds of satisfied investors who have aligned their financial goals with DDS TOTAL FINANCIAL SERVICES.
              </p>

              <a
                href="#connect"
                className="btn-gold"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Connect via Google Form Now
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
