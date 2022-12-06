import "../styles/Home.css";

const Resume = () => {
  return (
    <div className="resumeContainer">
      <h2 className="resumeHeader">My Skills</h2>
      <div className="card-container">
        <div className="resume-card">
          <h2 className="resumeSectionTitle">Languages</h2>
          <hr className="hr"></hr>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>SQL</li>
            <li>NoSQL</li>
          </ul>
        </div>
        <div className="resume-card">
          <h2 className="resumeSectionTitle">Applications</h2>
          <hr className="hr"></hr>
          <ul>
            <li>GitHub</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Adobe Creative Cloud</li>
          </ul>
        </div>
        <div className="resume-card">
          <h2 className="resumeSectionTitle">Tools</h2>
          <hr className="hr"></hr>
          <ul>
            <li>Git</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>React</li>
            <li>RESTful APIs</li>
            <li>Handlebars</li>
            <li>jQuery</li>
            <li>Jest</li>
            <li>Webpack</li>
            <li>Babel</li>
            <li>Bootstrap</li>
            <li>Insomnia</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
      <div className="cvContainter">
        <a
          href="https://drive.google.com/file/d/1rs-eyDwHtLvk2kyXhwpTZHkyPO99AxL6/view?usp=sharing"
          className="cvDownloadBtn"
          target="_blank"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Resume;
