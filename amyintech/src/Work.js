import './Work.css'; 

function Work() {
  // should include pages about work experinces
  return (
    <div className="Work">
      <header className="Work-header">
        <div>
          {/* Work Exp Section */}
          <section className="Work-screen">
            <div className="Work-container">
              <b className="Work-name">JPMorgan Chase & Co.</b>
              <div className="Work-details">
                <div>
                  <b className="Work-subheader">Role</b>
                </div>
                <p className="Work-description"> Software Engineer</p>
                <div>
                  <b className="Work-subheader">Duration</b>
                </div>
                <p className="Work-description"> August 2024 - Present</p>
                <div>
                  <b className="Work-subheader">Tools</b>
                </div>
                <p className="Work-description"> Java, React, Cypress, Gherkin, AWS</p>
                <div>
                  <b className="Work-subheader">Team</b>
                </div>
                  <p className="Work-description"> Customer Acquisition Experiences (Refer-A-Friend) and Explore Products</p>
                  <p className="Work-description"> Business Banking Deposits and Account Opening</p>
                <div>
                  <b className="Work-subheader">Description</b>
                </div>
                <p className="Work-description">
                  Building and maintaining the Chase existing customer homepage and Refer-a-Friend experience 
                  on web and mobile platforms; enhancing the user experience for millions of daily customers. 
                </p>
              </div>
              {/* <a className="Work-hyperlink" href="/work" rel="noopener noreferrer">View Project</a> */}
            </div>
          </section>
          {/* Work Exp Section */}
          <section className="Work-screen">
            <div className="Work-container">
              <b className="Work-name">JPMorgan Chase & Co.</b>
              <div className="Work-details">
                <div>
                  <b className="Work-subheader">Role</b>
                </div>
                <p className="Work-description"> Software Engineer Intern</p>
                <div>
                  <b className="Work-subheader">Duration</b>
                </div>
                <p className="Work-description"> June 2023 - August 2023</p>
                <div>
                  <b className="Work-subheader">Tools</b>
                </div>
                <p className="Work-description"> Java, React </p>
                <div>
                  <b className="Work-subheader">Team</b>
                </div>
                  <p className="Work-description"> Business Banking Deposits and Account Opening</p>
                <div>
                  <b className="Work-subheader">Description</b>
                </div>
                <p className="Work-description">
                  Developed a backend testing system using Java enabling 100% service automation for customer verification without disrupting user 
                  experience within 3 months.
                </p>
              </div>
              {/* <a className="Work-hyperlink" href="/work" rel="noopener noreferrer">View Project</a> */}
            </div>
          </section>
        </div>
      </header>
    </div>
  );
}

export default Work;