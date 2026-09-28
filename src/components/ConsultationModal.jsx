import React, { useId } from 'react';
import { SITE_CONFIG } from '../config';
import { X, ShieldCheck, ArrowRight, PhoneCall, Mail } from 'lucide-react';

export default function ConsultationModal({ isOpen, onClose }) {
  const modalPhoneId = useId();
  const modalNameId = useId();

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        background: 'rgba(7, 13, 24, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)'
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '520px',
          padding: '2.5rem',
          position: 'relative',
          border: '1px solid var(--border-gold)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'none',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            padding: '0.25rem'
          }}
          aria-label="Close modal"
        >
          <X style={{ width: '24px', height: '24px' }} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <div
            style={{
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              background: 'rgba(245, 158, 11, 0.15)',
              border: '1px solid var(--accent-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#f59e0b',
              margin: '0 auto 1rem auto'
            }}
          >
            <ShieldCheck style={{ width: '28px', height: '28px' }} />
          </div>
          <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.3rem' }}>
            Book Consultation
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Speak directly with a senior wealth advisor from DDS TOTAL FINANCIAL SERVICES.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.75rem' }}>
          <a
            href="#connect"
            onClick={onClose}
            className="btn-gold"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <span>Fill Google Form</span>
            <ArrowRight style={{ width: '18px', height: '18px' }} />
          </a>

          <div style={{ textAlign: 'center', color: 'var(--text-dim)', fontSize: '0.8rem', margin: '0.2rem 0' }}>
            OR CALL US DIRECTLY
          </div>

          <a
            href={`tel:${SITE_CONFIG.contact.phone.replace(/\s+/g, '')}`}
            className="btn-secondary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <PhoneCall style={{ width: '18px', height: '18px', color: '#38bdf8' }} />
            <span>{SITE_CONFIG.contact.phone}</span>
          </a>
        </div>

        <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textAlign: 'center' }}>
          🔒 Your information is encrypted and strictly confidential under strict fiduciary principles.
        </div>
      </div>
    </div>
  );
}
