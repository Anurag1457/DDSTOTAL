import React from 'react';
import { SITE_CONFIG } from '../config';
import { LineChart, PieChart, ShieldAlert, Crown, Calculator, Lock, ArrowUpRight } from 'lucide-react';

const ICON_MAP = {
  LineChart: LineChart,
  PieChart: PieChart,
  ShieldAlert: ShieldAlert,
  Crown: Crown,
  Calculator: Calculator,
  Lock: Lock
};

export default function Services({ onOpenModal }) {
  return (
    <section id="services" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 4rem auto' }}>
          <span
            style={{
              fontSize: '0.85rem',
              color: '#f59e0b',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              fontWeight: 700,
              display: 'block',
              marginBottom: '0.5rem'
            }}
          >
            What We Do
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>
            Tailored Financial Solutions for <span className="gradient-text-gold">Every Goal</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            From structured monthly SIPs to multi-asset high-net-worth portfolio management, DDS TOTAL FINANCIAL SERVICES protects and accelerates your wealth.
          </p>
        </div>

        {/* Services Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {SITE_CONFIG.services.map((service) => {
            const IconComponent = ICON_MAP[service.icon] || LineChart;
            return (
              <div
                key={service.id}
                className="glass-card"
                style={{
                  padding: '2.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                    <div
                      style={{
                        width: '54px',
                        height: '54px',
                        borderRadius: '16px',
                        background: 'rgba(245, 158, 11, 0.12)',
                        border: '1px solid var(--border-gold)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#f59e0b'
                      }}
                    >
                      <IconComponent style={{ width: '28px', height: '28px' }} />
                    </div>

                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        padding: '0.25rem 0.65rem',
                        borderRadius: '1rem',
                        background: 'rgba(56, 189, 248, 0.12)',
                        color: '#38bdf8',
                        border: '1px solid rgba(56, 189, 248, 0.25)'
                      }}
                    >
                      {service.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem', color: '#ffffff' }}>
                    {service.title}
                  </h3>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {service.description}
                  </p>
                </div>

                <a
                  href="#connect"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: '#f59e0b',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    transition: 'gap 0.2s ease'
                  }}
                  onMouseOver={e=>e.currentTarget.style.gap='0.7rem'}
                  onMouseOut={e=>e.currentTarget.style.gap='0.4rem'}
                >
                  <span>Inquire Solution</span>
                  <ArrowUpRight style={{ width: '18px', height: '18px' }} />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
