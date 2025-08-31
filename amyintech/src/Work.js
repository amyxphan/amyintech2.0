import { useEffect, useState } from "react";
import "./Work.css"; 
import work1 from './backgroundScreens/work1.jpg';
import work2 from './backgroundScreens/work2.jpg';

function Work() {
  const [activeSection, setActiveSection] = useState("section1");

  useEffect(() => {
    const sections = document.querySelectorAll(".Work-screen");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 } // 60% in view = active
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="Work">
      {/* Scrollable container */}
      <div className="Work-scroll">
        {/* Work Exp Section 1 */}
        <section
          id="section1"
          className="Work-screen"
          style={{ backgroundImage: `url(${work1})` }}
        >
          <div className="Work-container">
            <b className="Work-name">JPMorgan Chase & Co.</b>
            <div className="Work-details">
              <b className="Work-subheader">Role</b>
              <p className="Work-description">Software Engineer</p>
              <b className="Work-subheader">Duration</b>
              <p className="Work-description">August 2024 - Present</p>
              <b className="Work-subheader">Tools</b>
              <p className="Work-description">Java, React, Cypress, Gherkin, AWS</p>
              <b className="Work-subheader">Team</b>
              <p className="Work-description">
                Customer Acquisition Experiences (Refer-A-Friend) and Explore Products
              </p>
              <p className="Work-description">
                Business Banking Deposits and Account Opening
              </p>
              <b className="Work-subheader">Description</b>
              <p className="Work-description">
                Building and maintaining the Chase existing customer homepage and Refer-a-Friend experience 
                on web and mobile platforms; enhancing the user experience for millions of daily customers. 
              </p>
            </div>
          </div>
        </section>

        {/* Work Exp Section 1 */}
        <section
          id="section2"
          className="Work-screen"
          style={{ backgroundImage: `url(${work2})` }}
        >
          <div className="Work-container">
            <b className="Work-name">JPMorgan Chase & Co.</b>
            <div className="Work-details">
              <b className="Work-subheader">Role</b>
              <p className="Work-description">Software Engineer Intern</p>
              <b className="Work-subheader">Duration</b>
              <p className="Work-description">June 2023 - August 2023</p>
              <b className="Work-subheader">Tools</b>
              <p className="Work-description">Java, React</p>
              <b className="Work-subheader">Team</b>
              <p className="Work-description">Business Banking Deposits and Account Opening</p>
              <b className="Work-subheader">Description</b>
              <p className="Work-description">
                Developed a backend testing system using Java enabling 100% service automation for customer verification without disrupting user 
                experience within 3 months.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Right-side nav */}
      <nav className="Work-nav">
        <a
          href="#section1"
          className={`Work-nav-dot ${activeSection === "section1" ? "active" : ""}`}
        />
        <a
          href="#section2"
          className={`Work-nav-dot ${activeSection === "section2" ? "active" : ""}`}
        />
      </nav>
    </div>
  );
}

export default Work;
