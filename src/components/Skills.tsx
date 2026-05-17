
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Java', 'Python', 'JavaScript', 'SQL'],
      color: 'var(--accent-primary)'
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['Spring Boot', 'React.js', 'Node.js', 'Express.js'],
      color: 'var(--accent-secondary)'
    },
    {
      title: 'Databases & Tools',
      skills: ['MySQL', 'Git', 'GitHub', 'Postman', 'Figma', 'Twilio'],
      color: 'var(--accent-tertiary)'
    },
    {
      title: 'Core Competencies',
      skills: ['REST APIs', 'API Integration', 'Machine Learning', 'Data Processing', 'Version Control'],
      color: '#f59e0b' /* amber */
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card"
              style={{ padding: '2rem 1.5rem', textAlign: 'center' }}
            >
              <h3 style={{ 
                fontSize: '1.2rem', 
                fontWeight: 600, 
                marginBottom: '1.5rem',
                color: category.color
              }}>
                {category.title}
              </h3>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
                {category.skills.map((skill, i) => (
                  <span key={i} style={{ 
                    background: `color-mix(in srgb, ${category.color} 15%, transparent)`, 
                    color: 'var(--text-primary)',
                    border: `1px solid color-mix(in srgb, ${category.color} 30%, transparent)`,
                    padding: '0.4rem 1rem', 
                    borderRadius: '2rem', 
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    transition: 'transform 0.2s ease',
                    cursor: 'default'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
