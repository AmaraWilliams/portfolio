import headshot from "../../assets/headshot.JPG"
export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Amara</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Scrum Master</span>{" "}
          </h1>
          <p className="hero--section-description">
          Certified Scrum Master with expertise in Agile methodologies, project management, 
          and a background in Computer Science; driving successful team collaboration and project outcomes.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src={headshot} alt="Hero Section" />
      </div>
    </section>
  );
}
