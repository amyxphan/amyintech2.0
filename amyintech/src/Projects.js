import './Projects.css'; 

function Projects() {
  // should include pages about work experinces
  return (
    <div className="Projects">
      <header className="-header">
        <div>
          {/* Project Section */}
          <section className="Projects-screen">
            <img src="/jpmc.webp" alt="jpmcLogo" className="Projects-logo" />
            <div className="Projects-container">
              <b className="Projects-name">JPMORGAN CHASE & CO.</b>
              <div className="Projects-tags">
                <b className="tag">FRONTEND DEVELOPER</b>
                <b className="tag">END-TO-END/ADA TEST AUTOMATION</b>
              </div>
              <p className="Projects-description">
                Building and maintaining the Chase existing customer homepage and Refer-a-Friend experience on web and mobile platforms; enhancing the user experience for millions of daily customers.
              </p>
              <a className="Projects-hyperlink" href="/work" rel="noopener noreferrer">View Project</a>
            </div>
          </section>
        </div>
      </header>
    </div>
  );
}

export default Projects;