import './Work.css'; 

function Work() {
  // should include pages about work experinces
  return (
    <div className="Work">
      <header className="Work-header">
        <div>
          {/* Project Section */}
          <section className="Work-screen">
            <img src="/jpmc.webp" alt="jpmcLogo" className="work-logo" />
            <div className="work-container">
              <b className="work-name">JPMORGAN CHASE & CO.</b>
              <div className="work-tags">
                <b className="tag">FRONTEND DEVELOPER</b>
                <b className="tag">END-TO-END/ADA TEST AUTOMATION</b>
              </div>
              <p className="work-description">
                Building and maintaining the Chase existing customer homepage and Refer-a-Friend experience on web and mobile platforms; enhancing the user experience for millions of daily customers.
              </p>
              <a className="work-hyperlink" href="/work" rel="noopener noreferrer">View Project</a>
            </div>
          </section>
        </div>
      </header>
    </div>
  );
}

export default Work;