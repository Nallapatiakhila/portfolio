import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ 
              display: 'inline-block', 
              padding: '0.5rem 1rem', 
              background: 'rgba(59, 130, 246, 0.1)', 
              color: 'var(--accent-primary)',
              borderRadius: '2rem',
              marginBottom: '2rem',
              fontWeight: 600,
              fontSize: '0.9rem',
              border: '1px solid rgba(59, 130, 246, 0.2)'
            }}
          >
            SOFTWARE ENGINEER | FULL STACK DEVELOPER
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ 
              fontSize: 'clamp(3rem, 8vw, 5.5rem)', 
              fontWeight: 800, 
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em'
            }}
          >
            NALLAPATI <br />
            <span className="text-gradient">AKHILA</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ 
              fontSize: '1.2rem', 
              color: 'var(--text-secondary)', 
              marginBottom: '3rem',
              maxWidth: '600px',
              margin: '0 auto 3rem auto'
            }}
          >
            Passionate about building scalable applications and intuitive user interfaces. 
            Experienced in JAVA, Spring Boot, React.js, and AI integrations.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <a href="#projects" className="btn btn-primary">
              View My Work <ChevronRight size={20} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
