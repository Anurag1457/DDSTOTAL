import React, { useState, useId } from 'react';
import { SITE_CONFIG } from '../config';
import { FileSpreadsheet, ExternalLink, Settings, Send, CheckCircle2, ShieldCheck, Mail, Phone, User, MessageSquare } from 'lucide-react';

export default function LeadForm() {
  const [activeTab, setActiveTab] = useState('google'); // 'google' | 'direct'
  const [customFormUrl, setCustomFormUrl] = useState(SITE_CONFIG.googleFormUrl);
  const [submittedDirect, setSubmittedDirect] = useState(false);
  const [showConfigHelper, setShowConfigHelper] = useState(false);

  // Form State for Fallback Direct Form
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    investmentGoal: 'wealth-growth',
    amount: '10k-50k',
    message: ''
  });

  const fullNameId = useId();
  const phoneId = useId();
  const emailId = useId();
  const investmentGoalId = useId();
  const amountId = useId();
  const messageId = useId();
  const customUrlId = useId();

  const handleDirectSubmit = (e) => {
    e.preventDefault();
    setSubmittedDirect(true);
  };

  const isPlaceholderUrl = customFormUrl.includes('YOUR_FORM_ID_HERE');

  return (
    <section id="connect" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 1rem',
              borderRadius: '2rem',
              background: 'rgba(56, 189, 248, 0.1)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              color: '#38bdf8',
              fontSize: '0.85rem',
              fontWeight: 600,
              marginBottom: '1rem'
            }}
          >
            <FileSpreadsheet style={{ width: '16px', height: '16px' }} />
            <span>Official Client Onboarding Form</span>
          </div>

          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>
            Connect with <span className="gradient-text-gold">DDS TOTAL FINANCIAL</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Fill out our confidential questionnaire below. Our senior investment strategist will analyze your profile and contact you within 24 hours.
          </p>
        </div>

        {/* Form Container Card */}
        <div
          className="glass-card"
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            padding: '2rem',
            border: '1px solid var(--border-gold)',
            boxShadow: 'var(--shadow-glow)'
          }}
        >
          {/* Controls & Mode Selection */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div style={{ display: 'flex', gap: '0.5rem', background: 'rgba(255, 255, 255, 0.04)', padding: '0.3rem', borderRadius: '0.75rem' }}>
              <button
                onClick={() => setActiveTab('google')}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  background: activeTab === 'google' ? 'var(--accent-gold)' : 'transparent',
                  color: activeTab === 'google' ? '#070d18' : 'var(--text-muted)',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  transition: 'all 0.2s'
                }}
              >
                <FileSpreadsheet style={{ width: '16px', height: '16px' }} />
                <span>Google Form</span>
              </button>

              <button
                onClick={() => setActiveTab('direct')}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  background: activeTab === 'direct' ? 'var(--accent-gold)' : 'transparent',
                  color: activeTab === 'direct' ? '#070d18' : 'var(--text-muted)',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  transition: 'all 0.2s'
                }}
              >
                <Send style={{ width: '16px', height: '16px' }} />
                <span>Quick Inquiry Form</span>
              </button>
            </div>

            <button
              onClick={() => setShowConfigHelper(!showConfigHelper)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-muted)',
                fontSize: '0.85rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <Settings style={{ width: '16px', height: '16px', color: '#38bdf8' }} />
              <span>{showConfigHelper ? 'Hide Config Settings' : 'Google Form Settings'}</span>
            </button>
          </div>

          {/* Config Helper Drawer */}
          {showConfigHelper && (
            <div style={{ background: 'rgba(7, 13, 24, 0.9)', padding: '1.25rem', borderRadius: '0.75rem', marginBottom: '2rem', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#38bdf8', marginBottom: '0.5rem' }}>
                How to link your Client's Google Form:
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                1. Create a Google Form at <b>forms.google.com</b><br />
                2. Click <b>Send</b> → Select the <b>&lt;&gt; (Embed HTML)</b> tab.<br />
                3. Copy the URL inside <code>src="..."</code> and update <code>src/config.js</code> or test it below:
              </p>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <label htmlFor={customUrlId} className="sr-only" style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whitespace: 'nowrap', borderWidth: 0 }}>Google Form Embed URL</label>
                <input
                  id={customUrlId}
                  type="url"
                  placeholder="Paste Google Form Embed URL here..."
                  value={customFormUrl}
                  onChange={(e) => setCustomFormUrl(e.target.value)}
                  style={{
                    flex: 1,
                    padding: '0.6rem 0.8rem',
                    borderRadius: '0.5rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    fontSize: '0.85rem'
                  }}
                />
              </div>
            </div>
          )}

          {/* Tab 1: Embedded Google Form */}
          {activeTab === 'google' && (
            <div>
              {isPlaceholderUrl ? (
                /* Google Form Placeholder Demo Banner */
                <div style={{ textAlign: 'center', padding: '3rem 1.5rem', background: 'rgba(15, 23, 42, 0.6)', borderRadius: '0.75rem', border: '1px dashed rgba(245, 158, 11, 0.4)' }}>
                  <FileSpreadsheet style={{ width: '48px', height: '48px', color: '#f59e0b', margin: '0 auto 1rem auto' }} />
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
                    Google Form Embed Ready
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '540px', margin: '0 auto 1.5rem auto' }}>
                    Your Google Form will render directly inside this framed container. Update <code>googleFormUrl</code> in <code>src/config.js</code> with your client's Google Form link to start receiving client submissions directly into Google Sheets!
                  </p>
                  
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <a
                      href={SITE_CONFIG.googleFormDirectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold"
                    >
                      <span>Open Google Forms Demo</span>
                      <ExternalLink style={{ width: '16px', height: '16px' }} />
                    </a>

                    <button
                      onClick={() => setActiveTab('direct')}
                      className="btn-secondary"
                    >
                      Use Quick Form Below
                    </button>
                  </div>
                </div>
              ) : (
                /* Real Embedded Google Form Iframe */
                <div style={{ position: 'relative', width: '100%', minHeight: '600px', overflow: 'hidden', borderRadius: '0.75rem' }}>
                  <iframe
                    src={customFormUrl}
                    title="DDS TOTAL Client Connect Google Form"
                    width="100%"
                    height="680"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    style={{ background: '#ffffff', borderRadius: '0.75rem' }}
                  >
                    Loading form...
                  </iframe>
                </div>
              )}
            </div>
          )}

          {/* Tab 2: Direct React Form */}
          {activeTab === 'direct' && (
            <div>
              {submittedDirect ? (
                <div style={{ textAlign: 'center', padding: '3rem 1.5rem' }}>
                  <CheckCircle2 style={{ width: '54px', height: '54px', color: '#10b981', margin: '0 auto 1rem auto' }} />
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
                    Thank You for Connecting!
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '480px', margin: '0 auto 1.5rem auto' }}>
                    We have received your details. A certified wealth advisor from DDS TOTAL FINANCIAL SERVICES will reach out to you shortly.
                  </p>
                  <button className="btn-secondary" onClick={() => setSubmittedDirect(false)}>
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleDirectSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                  
                  <div>
                    <label htmlFor={fullNameId} style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                      Full Name *
                    </label>
                    <input
                      id={fullNameId}
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '0.6rem',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>

                  <div>
                    <label htmlFor={phoneId} style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                      Phone Number *
                    </label>
                    <input
                      id={phoneId}
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '0.6rem',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>

                  <div style={{ gridColumn: '1 / -1' }}>
                    <label htmlFor={emailId} style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                      Email Address *
                    </label>
                    <input
                      id={emailId}
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '0.6rem',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>

                  <div>
                    <label htmlFor={investmentGoalId} style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                      Primary Financial Goal
                    </label>
                    <select
                      id={investmentGoalId}
                      value={formData.investmentGoal}
                      onChange={(e) => setFormData({...formData, investmentGoal: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '0.6rem',
                        background: '#0f172a',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        fontSize: '0.95rem'
                      }}
                    >
                      <option value="wealth-growth">Wealth Management & Growth</option>
                      <option value="sip-planning">Mutual Funds & Monthly SIP</option>
                      <option value="retirement">Retirement & Pension</option>
                      <option value="hnwi">HNWI Bespoke Portfolio</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor={amountId} style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                      Planned Monthly / One-time Capital
                    </label>
                    <select
                      id={amountId}
                      value={formData.amount}
                      onChange={(e) => setFormData({...formData, amount: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '0.6rem',
                        background: '#0f172a',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        fontSize: '0.95rem'
                      }}
                    >
                      <option value="under-10k">Under ₹10,000 / month</option>
                      <option value="10k-50k">₹10,000 - ₹50,000 / month</option>
                      <option value="50k-2lakh">₹50,000 - ₹2 Lakhs / month</option>
                      <option value="hni-lump">₹10 Lakhs+ (One-time advisory)</option>
                    </select>
                  </div>

                  <div style={{ gridColumn: '1 / -1' }}>
                    <label htmlFor={messageId} style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                      Additional Notes / Questions
                    </label>
                    <textarea
                      id={messageId}
                      rows="3"
                      placeholder="Mention any specific investment timelines or requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '0.6rem',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        fontSize: '0.95rem',
                        fontFamily: 'inherit'
                      }}
                    />
                  </div>

                  <div style={{ gridColumn: '1 / -1', marginTop: '0.5rem' }}>
                    <button type="submit" className="btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                      <span>Submit Request</span>
                      <Send style={{ width: '18px', height: '18px' }} />
                    </button>
                  </div>

                </form>
              )}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
