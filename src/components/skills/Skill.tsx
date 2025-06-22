import "./SKill.scss";
import logo1 from "../../assets/logo1.webp";
import logo2 from "../../assets/logo2.webp";
import logo3 from "../../assets/logo3.webp";
import logo4 from "../../assets/logo4.webp";
import logo5 from "../../assets/logo5.webp";

const logos = [logo1, logo2, logo3, logo4, logo5];

const Skill: React.FC = () => {
  return (
    <div className="logo-row">
      {logos.map((logo, index) => (
        <div className="logo" key={index}>
          <img src={logo} alt={`logo-${index}`} />
        </div>
      ))}
    </div>
  );
};

export default Skill;
