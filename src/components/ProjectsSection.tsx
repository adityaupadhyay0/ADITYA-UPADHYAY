import React from 'react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'BOOKER',
      
      link: 'https://booker-5.onrender.com',
      image: 'src/assets/project1.png',
    },
    {
      title: 'CHAT APP',
     
      link: 'https://soit3-3.onrender.com',
      image: 'src/assets/project2.png',
    },
  ];

  return (
    <section id="projects" className="projects">
      
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
