import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Driverio',
      subtitle: 'Smart Employee Transportation & Notification System',
      date: 'Dec 2025 – Feb 2026',
      description: 'An employee transportation platform automating cab booking workflows with secure OTP authentication and role-based access. Includes REST APIs for ride scheduling, driver allocation, and real-time SMS notifications.',
      stack: ['React.js', 'Spring Boot', 'MySQL', 'REST APIs', 'Twilio API'],
      color: 'var(--accent-primary)'
    },
    {
      title: 'InnovaAI',
      subtitle: 'Multi-Agent AI Web Platform',
      date: 'Aug 2025 – Sep 2025',
      description: 'A multi-agent AI platform using React and Python with 5 specialized autonomous agents to automate task execution and workflow coordination via API-driven orchestration.',
      stack: ['React.js', 'Python', 'HTML/CSS', 'TypeScript', 'Node.js'],
      color: 'var(--accent-secondary)'
    }
  ];

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card"
              style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: project.color }}>{project.title}</h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{project.date}</span>
              </div>
              
              <h4 style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '1rem' }}>
                {project.subtitle}
              </h4>
              
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1 }}>
                {project.description}
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {project.stack.map((tech, i) => (
                  <span key={i} style={{ 
                    background: 'rgba(255,255,255,0.05)', 
                    border: '1px solid var(--glass-border)',
                    padding: '0.25rem 0.75rem', 
                    borderRadius: '1rem', 
                    fontSize: '0.8rem',
                    color: 'var(--text-secondary)'
                  }}>
                    {tech}
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

export default Projects;
