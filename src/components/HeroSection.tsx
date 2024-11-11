import { FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>ADITYA</h1>
        <p>SOFTWARE ENGINEER...</p>
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="#about"><FaUser /> </a></li>
          <li><a href="#projects"><FaProjectDiagram /> </a></li>
          <li><a href="#contact"><FaEnvelope /> </a></li>
        </ul>
      </nav>
    </section>
  );
};
export default HeroSection;
