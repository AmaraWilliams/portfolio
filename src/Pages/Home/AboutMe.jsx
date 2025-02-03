import logo from "../../assets/amara-logo.png"
export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src={logo} alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
          ​I'm a passionate ScrumMaster with 2 years of hands-on experience within teams. I'm excited to embark on a new journey after I graduate with a B.S. in Computer Science in Spring 2025.


          </p>
          <p className="hero--section-description">
          I am currently an online instructor, teaching programming languages and technical skills to students aged 7-19 and will soon take part in a new program at my college as a peer academic coach.
       <br/>
       <br/>
       As a Scrum Master, I've restructured a research team, helping members understand the tech stack and take ownership of tasks like creating tickets and fixing backend bugs. I'm committed to crafting quality tutorials, comprehensive documentation,
       and developing impactful applications—both independently and as part of collaborative teams.
          </p>
        </div>
      </div>
    </section>
  );
}
