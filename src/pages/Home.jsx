import React from 'react';
import { ArrowRight, Server, Shield, Network } from 'lucide-react';

const Home = () => {
  return (
    <section id="home" style={{ 
      position: 'relative',
      padding: '40px 0 80px 0',
      minHeight: 'calc(100vh - 80px)',
      display: 'flex',
      alignItems: 'center',
    }}>
      <div className="container" style={{ position: 'relative' }}>
        {/* Background Blobs for premium aesthetic */}
        <div className="bg-blob bg-blob-1"></div>
        <div className="bg-blob bg-blob-2"></div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '48px',
        }} className="hero-section">
          {/* Left Side: Info */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }} className="animate-slide-up">
            <span style={{
              color: 'var(--accent-primary)',
              fontWeight: 700,
              letterSpacing: '1.5px',
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              display: 'inline-block',
            }}>
              Welcome to my portfolio
            </span>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              fontFamily: 'var(--font-heading)',
            }}>
              Hi, I'm <span style={{
                background: 'var(--accent-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Imal Lakshitha</span>
            </h1>

            <h2 style={{
              fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
              fontWeight: 500,
              color: 'var(--text-secondary)',
            }}>
              IT Undergraduate at <strong style={{ color: 'var(--text-primary)' }}>ITUM</strong> & <span style={{ color: 'var(--text-primary)' }}>CCNA Candidate</span> & Network Enthusiast
            </h2>

            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              maxWidth: '540px',
            }}>
              I specialize in networking infrastructure, system design, Linux systems, and crafting responsive web interfaces. Combining hardware and software fundamentals, I build reliable, high-performance, and secure digital spaces.
            </p>

            {/* Quick Stats Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
              margin: '16px 0',
            }} className="stats-grid">
              <div className="glass" style={{ padding: '16px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                <Network style={{ color: 'var(--accent-primary)', margin: '0 auto 8px auto' }} />
                <h3 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>CCNA</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Pursuing</p>
              </div>
              <div className="glass" style={{ padding: '16px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                <Server style={{ color: 'var(--accent-secondary)', margin: '0 auto 8px auto' }} />
                <h3 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>Linux</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Administration</p>
              </div>
              <div className="glass" style={{ padding: '16px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                <Shield style={{ color: 'var(--accent-primary)', margin: '0 auto 8px auto' }} />
                <h3 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>RBAC</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Secured Design</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn btn-primary">
                <span>View Projects</span>
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                <span>Get in Touch</span>
              </a>
            </div>
          </div>

          {/* Right Side: Professional Profile Photo Card */}
          <div style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }} className="hero-graphic animate-fade-in">
            <div className="glass" style={{
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-lg)',
              maxWidth: '300px',
              width: '100%',
              overflow: 'hidden',
              display: 'flex',
              transition: 'transform var(--transition-normal)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
            >
              <img 
                src="/profile.jpg" 
                alt="Imal Lakshitha" 
                style={{
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '4/5',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          .hero-section {
            flex-direction: column-reverse !important;
            padding: 30px 0 !important;
            text-align: center;
          }
          .hero-section p {
            margin: 0 auto;
          }
          .stats-grid {
            max-width: 450px;
            margin: 16px auto !important;
          }
          .hero-section div {
            align-items: center;
          }
          .hero-graphic {
            width: 100%;
            max-width: 250px !important;
            margin-bottom: 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default Home;
