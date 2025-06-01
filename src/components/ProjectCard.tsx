import styles from "./ProjectCard.module.scss";

type Props = {
  title: string;
  image?: string;
  link?: string;
  description: string;
  skills: string;
};

export const ProjectCard = ({
  title,
  image,
  link,
  description,
  skills,
}: Props) => {
  return (
    <div className={styles.card}>
      {image && <img src={image} alt={title} className={styles.image} />}
      <div>
        <h3>{title}</h3>
        {description}
        {skills}
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            Voir le projet
          </a>
        )}{" "}
      </div>
    </div>
  );
};

export default ProjectCard;
