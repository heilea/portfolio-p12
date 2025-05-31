import styles from './ProjectCard.module.scss';

type Props = {
  title: string;
  image?: string;
  link?: string;
};

export const ProjectCard = ({ title,  image, link }: Props) => {
  return (
    <div className={styles.card}>
      {image && <img src={image} alt={title} className={styles.image} />}
      <div> 
      <h3>{title}</h3>
      
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          Voir le projet
        </a>
      )} </div>
    </div>
  );
};

export default ProjectCard;
