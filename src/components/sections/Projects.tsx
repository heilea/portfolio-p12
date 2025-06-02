import styles from "./Projects.module.scss";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projectCard";

const Projects = () => {
  return (
    <section id="projects" className={styles.section}>
      <h2>Projets réalisés</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            description={project.description}
            skills={project.skills}
            link={project.git}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
