import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" style={{
      background: 'var(--bg-primary)',
      padding: '4rem 0 2rem 0',
      borderTop: '1px solid var(--glass-border)'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
            Let's Connect
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            I am currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '3rem' }}>

          <a href="mailto:akhilanallapati3@gmail.com" style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
            color: 'var(--text-primary)', transition: 'color 0.2s ease'
          }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}>
            <div style={{ padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '50%', border: '1px solid var(--glass-border)' }}>
              <Mail size={24} />
            </div>
            <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Email Me</span>
          </a>

          <a href="tel:+919398152423" style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
            color: 'var(--text-primary)', transition: 'color 0.2s ease'
          }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}>
            <div style={{ padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '50%', border: '1px solid var(--glass-border)' }}>
              <Phone size={24} />
            </div>
            <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Call Me</span>
          </a>

          <a href="https://www.linkedin.com/in/nallapati-akhila-2ab5a3288" target="_blank" rel="noreferrer" style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
            color: 'var(--text-primary)', transition: 'color 0.2s ease'
          }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>LinkedIn</span>
          </a>

          <a href="https://github.com/Nallapatiakhila" target="_blank" rel="noreferrer" style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
            color: 'var(--text-primary)', transition: 'color 0.2s ease'
          }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>GitHub</span>
          </a>

        </div>

        <div style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem', borderTop: '1px solid var(--glass-border)', paddingTop: '2rem' }}>
          <p>© {new Date().getFullYear()} Nallapati Akhila. All Rights Reserved.</p>
          <p style={{ marginTop: '0.5rem' }}>Designed & Built with React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
