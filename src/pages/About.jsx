import React from 'react';
import { BookOpen, Award, CheckCircle, Terminal, HardDrive, ShieldCheck } from 'lucide-react';

const About = () => {
  const networkingSkills = [
    'Cisco CCNA (In Progress)',
    'Routing & Switching',
    'Cisco Packet Tracer',
    'Linux System Admin',
    'Network Security',
    'Role-Based Access Control (RBAC)',
    'Firewall & VPN Configuration',
    'DNS, DHCP, & IPAM',
  ];

  const devSkills = [
    'React.js',
    'JavaScript (ES6+)',
    'HTML5 & CSS3',
    'Git & GitHub',
    'REST APIs',
    'Responsive Web Design',
    'Modern UI Frameworks',
  ];

  return (
    <section id="about" style={{ padding: '100px 0 60px 0', position: 'relative' }}>
      <div className="container" style={{ position: 'relative' }}>
        {/* Background blobs */}
        <div className="bg-blob bg-blob-1" style={{ top: '20%' }}></div>
        <div className="bg-blob bg-blob-2" style={{ bottom: '10%' }}></div>

        <div className="section-header">
          <h1 className="section-title">About Me</h1>
          <p className="section-subtitle">
            IT Undergraduate & Network Enthusiast with a passion for designing reliable systems and interactive applications.
          </p>
        </div>

        <div className="grid-2 animate-slide-up" style={{ alignItems: 'start', marginBottom: '60px' }}>
          {/* Left Column: Education and Story */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            {/* Introduction Card */}
            <div className="glass" style={{ padding: '32px', borderRadius: 'var(--radius-lg)' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Terminal style={{ color: 'var(--accent-primary)' }} />
                My Story & Ambitions
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '16px' }}>
                I am currently pursuing my IT studies at the **Institute of Technology, University of Moratuwa (ITUM)**, where I explore the nexus of network engineering and system operations.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                While pursuing my **CCNA (Cisco Certified Network Associate)** certification, and with a solid background in Linux administration, I focus on the architecture and security of systems.
              </p>
            </div>

            {/* Education Card */}
            <div className="glass" style={{ padding: '32px', borderRadius: 'var(--radius-lg)' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <BookOpen style={{ color: 'var(--accent-secondary)' }} />
                Education
              </h2>
              <div style={{
                borderLeft: '2px solid var(--accent-secondary)',
                paddingLeft: '20px',
                marginLeft: '8px',
              }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>IT Undergraduate</h3>
                <p style={{ color: 'var(--accent-secondary)', fontSize: '0.9rem', fontWeight: 600, margin: '4px 0' }}>
                  Institute of Technology, University of Moratuwa (ITUM)
                </p>
                <p style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem', marginBottom: '8px' }}>
                  Ongoing Academic Journey
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  Acquiring deep knowledge in Data Communication, Computer Networking, System Administration, Database Systems, and Software Engineering principles.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Skills & Certifications */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            {/* CCNA Badge / Credentials */}
            <div className="glass" style={{ 
              padding: '32px', 
              borderRadius: 'var(--radius-lg)',
              background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.08) 0%, rgba(99, 102, 241, 0.05) 100%)',
              border: '1px solid var(--accent-secondary)',
            }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Award style={{ color: 'var(--accent-secondary)' }} />
                Core Credentials
              </h2>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--bg-tertiary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--accent-secondary)',
                }}>
                  <HardDrive style={{ color: 'var(--accent-secondary)' }} size={32} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>CCNA (In Progress)</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    Cisco Certified Network Associate
                  </p>
                  <p style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem' }}>
                    Status: Currently studying Routing, Switching, & IP Fundamentals
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Skills Grid */}
            <div className="glass" style={{ padding: '32px', borderRadius: 'var(--radius-lg)' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ShieldCheck style={{ color: 'var(--accent-primary)' }} />
                Technical Skillset
              </h2>
              
              {/* Networking Sub Grid */}
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '1rem', color: 'var(--accent-primary)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Networking & Systems
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {networkingSkills.map((skill, index) => (
                    <span
                      key={index}
                      style={{
                        padding: '6px 12px',
                        backgroundColor: 'var(--bg-tertiary)',
                        border: '1px solid var(--border-color)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.85rem',
                        color: 'var(--text-primary)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <CheckCircle size={12} style={{ color: 'var(--accent-secondary)' }} />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Web Dev Sub Grid */}
              <div>
                <h3 style={{ fontSize: '1rem', color: 'var(--accent-secondary)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Frontend Development
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {devSkills.map((skill, index) => (
                    <span
                      key={index}
                      style={{
                        padding: '6px 12px',
                        backgroundColor: 'var(--bg-tertiary)',
                        border: '1px solid var(--border-color)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.85rem',
                        color: 'var(--text-primary)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <CheckCircle size={12} style={{ color: 'var(--accent-primary)' }} />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
