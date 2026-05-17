
import { Award, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Achievements = () => {
  const achievements = [
    "Developed end-to-end applications involving backend APIs, authentication systems, and database integration.",
    "Completed AI internship focused on ML model deployment and TensorFlow implementation.",
    "Participated in Hack with India at Microsoft Office, Hyderabad.",
    "Built multi-agent AI platform with 5 autonomous agents."
  ];

  return (
    <section id="achievements" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">Technical Achievements</h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ padding: '1rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '50%', color: 'var(--accent-secondary)' }}>
                <Award size={32} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Milestones & Recognitions</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Highlights of my journey in tech so far.</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
                >
                  <CheckCircle size={20} color="var(--accent-tertiary)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <p style={{ color: 'var(--text-primary)', fontSize: '1.05rem', lineHeight: 1.5 }}>
                    {achievement}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
