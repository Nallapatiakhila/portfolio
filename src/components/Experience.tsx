
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'AI Developer Intern',
      company: 'Viswam AI',
      date: 'May 2025 – Aug 2025',
      points: [
        'Developed and deployed 3+ AI/ML models for real-world use cases, improving prediction accuracy by ~20%.',
        'Processed and cleaned datasets of 10,000+ records and trained machine learning models to enhance prediction performance.',
        'Implemented machine learning algorithms using Python and TensorFlow to solve real-world AI problems.'
      ]
    },
    {
      title: 'UI/UX Design Intern',
      company: 'Cognifyz Technologies',
      date: 'Jun 2025 – Jul 2025',
      points: [
        'Designed 10+ user-focused web and mobile interfaces using Figma.',
        'Created 25+ wireframes and prototypes, reducing design iteration time by 30%.',
        'Partnered with developers to translate Figma designs into functional product interfaces.'
      ]
    }
  ];

  const responsibilities = [
    {
      title: 'Design team member',
      company: 'A²I-ANURAG ARTIFICIAL INTELLIGENCE CLUB',
      date: 'Jul 2025 - Present',
    },
    {
      title: 'Design team member',
      company: 'ENIGMA CLUB AU',
      date: 'Jun 2025 - Present',
    },
    {
      title: 'Design team member',
      company: 'CSI SB CHAPTER , Anurag University Dept of AI',
      date: 'Jul 2025 - Dec 2025',
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', marginBottom: '4rem' }}>
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card" 
              style={{ marginBottom: '2rem', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ 
                position: 'absolute', 
                top: 0, left: 0, width: '4px', height: '100%', 
                background: index === 0 ? 'var(--accent-primary)' : 'var(--accent-secondary)' 
              }}></div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{exp.title}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: 500 }}>
                    <Briefcase size={18} /> {exp.company}
                  </div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  {exp.date}
                </div>
              </div>
              
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                {exp.points.map((point, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem', listStyleType: 'disc' }}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <h3 className="section-title" style={{ fontSize: '2rem', marginBottom: '2rem' }}>Positions of Responsibility</h3>
        
        <div className="grid md:grid-cols-2" style={{ maxWidth: '800px', margin: '0 auto' }}>
          {responsibilities.map((resp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card" 
              style={{ padding: '1.5rem' }}
            >
              <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                {resp.title}
              </h4>
              <div style={{ color: 'var(--accent-tertiary)', fontWeight: 500, marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                {resp.company}
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                {resp.date}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
