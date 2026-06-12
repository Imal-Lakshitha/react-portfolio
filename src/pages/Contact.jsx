import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

const LinkedinIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };

  return (
    <section id="contact" style={{ padding: '100px 0 100px 0', position: 'relative' }}>
      <div className="container" style={{ position: 'relative' }}>
        {/* Background blobs */}
        <div className="bg-blob bg-blob-1" style={{ top: '10%' }}></div>
        <div className="bg-blob bg-blob-2" style={{ bottom: '30%' }}></div>

        <div className="section-header">
          <h1 className="section-title">Get In Touch</h1>
          <p className="section-subtitle">
            Have an internship opportunity, project idea, or just want to chat about networking infrastructure? Drop a message!
          </p>
        </div>

        <div className="grid-2 animate-slide-up" style={{ marginBottom: '60px', alignItems: 'stretch' }} className="contact-grid">
          {/* Left Side: Contact Information */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Card 1: Main info */}
            <div className="glass" style={{ padding: '32px', borderRadius: 'var(--radius-lg)', flex: 1, display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '8px' }}>Contact Details</h2>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-tertiary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border-color)',
                  color: 'var(--accent-primary)',
                }}>
                  <Mail size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', textTransform: 'uppercase' }}>Email</h3>
                <a href="mailto:imal28588@gmail.com" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                  imal28588@gmail.com
                </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-tertiary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border-color)',
                  color: 'var(--accent-secondary)',
                }}>
                  <LinkedinIcon size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', textTransform: 'uppercase' }}>LinkedIn</h3>
                  <a 
                  href="https://www.linkedin.com/in/imal-lakshitha-12ab29283" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: 'var(--text-primary)', fontWeight: 600 }}
                >
                  linkedin.com/in/imal-lakshitha-12ab29283
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: 'var(--bg-tertiary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--border-color)',
                color: 'var(--accent-primary)',
              }}>
                <GithubIcon size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', textTransform: 'uppercase' }}>GitHub</h3>
                <a 
                  href="https://github.com/Imal-Lakshitha" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: 'var(--text-primary)', fontWeight: 600 }}
                >
                  github.com/Imal-Lakshitha
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-tertiary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border-color)',
                  color: 'var(--accent-primary)',
                }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', textTransform: 'uppercase' }}>Location</h3>
                  <p style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                    Galle, Sri Lanka
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="glass" style={{ padding: '32px', borderRadius: 'var(--radius-lg)' }}>
            {submitted ? (
              <div className="animate-fade-in" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                minHeight: '300px',
                textAlign: 'center',
                gap: '16px',
              }}>
                <CheckCircle2 size={64} style={{ color: '#22c55e' }} />
                <h2 style={{ fontSize: '1.8rem', fontWeight: 700 }}>Thank You!</h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '350px' }}>
                  Your message has been mock-submitted. I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="animate-fade-in" noValidate>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange}
                    className="form-control"
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="form-error">{errors.name}</p>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    className="form-control"
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="form-error">{errors.email}</p>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Internship inquiry / Project idea"
                  />
                  {errors.subject && <p className="form-error">{errors.subject}</p>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea 
                    id="message"
                    name="message" 
                    rows="5"
                    value={formData.message} 
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Describe your message here..."
                    style={{ resize: 'vertical' }}
                  />
                  {errors.message && <p className="form-error">{errors.message}</p>}
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }}>
                  <span>Send Message</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
