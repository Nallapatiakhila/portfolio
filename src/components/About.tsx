
import { BookOpen, MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">About Me & Education</h2>
        
        <div className="grid md:grid-cols-2" style={{ alignItems: 'center', gap: '4rem' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
              Problem Solver <br/>& Innovator
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              I am a dedicated Software Engineer and Full Stack Developer with a strong foundation in Artificial Intelligence and Machine Learning. I thrive on solving complex problems and building seamless user experiences.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
              My technical journey is driven by a passion for creating impactful software solutions—from robust backend APIs in Spring Boot to dynamic frontend interfaces in React.js, and integrating AI models to solve real-world problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ padding: '1rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '0.5rem', color: 'var(--accent-primary)' }}>
                <BookOpen size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Education</h4>
              </div>
            </div>
            
            <div style={{ borderLeft: '2px solid var(--glass-border)', paddingLeft: '1.5rem', marginLeft: '1rem' }}>
              <h5 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Anurag University</h5>
              <p style={{ color: 'var(--accent-secondary)', fontWeight: 500, marginBottom: '1rem' }}>
                Integrated BTech in Artificial Intelligence and Machine Learning
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Calendar size={16} /> October 2023 - May 2027
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MapPin size={16} /> Ghatkesar, Hyderabad, India
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
