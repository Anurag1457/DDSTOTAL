import React, { useState, useId } from 'react';
import confetti from 'canvas-confetti';
import { Calculator as CalcIcon, TrendingUp, Sparkles, ArrowRight, DollarSign } from 'lucide-react';

export default function Calculator({ onOpenModal }) {
  const [monthlyInvest, setMonthlyInvest] = useState(10000);
  const [expectedReturn, setExpectedReturn] = useState(13);
  const [years, setYears] = useState(10);

  const monthlyInvestId = useId();
  const expectedReturnId = useId();
  const yearsId = useId();

  // Compound Interest Calculation for SIP Formula: M * ({ [1 + i]^n - 1 } / i) * (1 + i)
  const monthlyRate = expectedReturn / 12 / 100;
  const totalMonths = years * 12;
  const totalInvested = monthlyInvest * totalMonths;
  
  const futureVal = Math.round(
    monthlyInvest *
      ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) *
      (1 + monthlyRate)
  );

  const wealthGain = Math.max(0, futureVal - totalInvested);

  const formatRupee = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleCelebrateGoal = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f59e0b', '#38bdf8', '#10b981']
    });
    
    // Scroll to connect section
    const element = document.getElementById('connect');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="calculator" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3.5rem auto' }}>
          <span
            style={{
              fontSize: '0.85rem',
              color: '#38bdf8',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              fontWeight: 700,
              display: 'block',
              marginBottom: '0.5rem'
            }}
          >
            Interactive Wealth Simulator
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>
            Calculate Your <span className="gradient-text-cyan">Future Portfolio Value</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            See how small consistent investments grow exponentially with compounding returns managed by DDS TOTAL.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div
          className="glass-card"
          style={{
            padding: '2.5rem',
            border: '1px solid rgba(56, 189, 248, 0.2)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}
        >
          {/* Controls Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Control 1: Monthly Investment */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <label htmlFor={monthlyInvestId} style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.95rem' }}>
                  Monthly SIP Investment
                </label>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.2rem', color: '#f59e0b' }}>
                  {formatRupee(monthlyInvest)}
                </span>
              </div>
              <input
                id={monthlyInvestId}
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={monthlyInvest}
                onChange={(e) => setMonthlyInvest(Number(e.target.value))}
                className="slider-input"
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '0.3rem' }}>
                <span>₹1,000/mo</span>
                <span>₹1,00,000/mo</span>
              </div>
            </div>

            {/* Control 2: Expected Return Rate */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <label htmlFor={expectedReturnId} style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.95rem' }}>
                  Expected Annual Return Rate (p.a)
                </label>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.2rem', color: '#38bdf8' }}>
                  {expectedReturn}%
                </span>
              </div>
              <input
                id={expectedReturnId}
                type="range"
                min="6"
                max="24"
                step="0.5"
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(Number(e.target.value))}
                className="slider-input"
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '0.3rem' }}>
                <span>6% (Conservative)</span>
                <span>24% (Aggressive)</span>
              </div>
            </div>

            {/* Control 3: Time Horizon */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <label htmlFor={yearsId} style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.95rem' }}>
                  Investment Time Horizon
                </label>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.2rem', color: '#10b981' }}>
                  {years} Years
                </span>
              </div>
              <input
                id={yearsId}
                type="range"
                min="1"
                max="30"
                step="1"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="slider-input"
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '0.3rem' }}>
                <span>1 Year</span>
                <span>30 Years</span>
              </div>
            </div>

          </div>

          {/* Results Summary Card */}
          <div
            style={{
              padding: '2rem',
              borderRadius: '1rem',
              background: 'rgba(7, 13, 24, 0.7)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}
          >
            <div>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Estimated Maturity Value
              </span>
              <h3 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#10b981', marginTop: '0.2rem' }}>
                {formatRupee(futureVal)}
              </h3>
            </div>

            {/* Breakdown bars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 1rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '0.5rem' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Total Invested:</span>
                <span style={{ fontWeight: 700, color: '#f8fafc' }}>{formatRupee(totalInvested)}</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 1rem', background: 'rgba(16, 185, 129, 0.08)', borderRadius: '0.5rem', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Estimated Wealth Gain:</span>
                <span style={{ fontWeight: 700, color: '#34d399' }}>+{formatRupee(wealthGain)}</span>
              </div>
            </div>

            <button
              className="btn-gold"
              onClick={handleCelebrateGoal}
              style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
            >
              <span>Build This Strategy via Form</span>
              <ArrowRight style={{ width: '18px', height: '18px' }} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
