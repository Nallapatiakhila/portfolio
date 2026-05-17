import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      transition: 'all 0.3s ease',
      background: isScrolled ? 'rgba(2, 6, 23, 0.8)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid transparent',
      padding: isScrolled ? '1rem 0' : '1.5rem 0'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#home" style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '1px' }}>
          AKHILA<span className="text-gradient">.</span>
        </a>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', gap: '2rem' }} className="nav-desktop">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} style={{ 
              fontWeight: 500, 
              color: 'var(--text-secondary)',
              transition: 'color 0.2s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="nav-mobile-toggle" style={{ display: 'none', cursor: 'pointer' }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {/* Mobile Menu (simplified CSS in JS for demo, but typically use CSS classes) */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'rgba(15, 23, 42, 0.95)',
          backdropFilter: 'blur(12px)',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          borderBottom: '1px solid var(--glass-border)'
        }}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} style={{
              fontSize: '1.1rem',
              fontWeight: 500
            }}>
              {link.name}
            </a>
          ))}
        </div>
      )}
      
      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
