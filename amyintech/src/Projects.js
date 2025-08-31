import './Projects.css'; 

function Projects() {
  // should include pages about work experinces
  return (
    <div className="Projects">
      <header className="-header">
        <div>
          {/* Project Section */}
          <section className="Projects-screen">
            <div className="Projects-container">
              <b className="Projects-name">TherapyTouch</b>
              <div className="Projects-details">
                <div>
                    <b className="Projects-subheader">Type</b>
                </div>
                <p className="Projects-description"> iOS Mobile App</p>
                <div>
                    <b className="Projects-subheader">Project Size</b>
                </div>
                <p className="Projects-description"> Individual Project</p>
                <div>
                    <b className="Projects-subheader">Tools & Frameworks</b>
                </div>
                <p className="Projects-description"> Swift, SwiftUI</p>
                <div>
                    <b className="Projects-subheader">Description</b>
                </div>
                <p className="Projects-description">
                    TherapyTouch is a mobile app that I am currently working on to create an all-in-one mental health app that allows users to recieve live help, 
                    journal, view their journey, and meditate. In this project, I hope to be able to learn more about mental health issues, tune into my love for 
                    UI/UX with handdrawn componests, and create a product that's accessible for users to use and get the help they need.
                </p>
              </div>
              <a className="Projects-hyperlink" href="/work" rel="noopener noreferrer">View Project</a>
            </div>
          </section>
        {/* Project Section */}
          <section className="Projects-screen">
            <div className="Projects-container">
              <b className="Projects-name">Sorcerers Sprouts</b>
              <div className="Projects-details">
                <div>
                    <b className="Projects-subheader">Type</b>
                </div>
                <p className="Projects-description"> Website</p>
                <div>
                    <b className="Projects-subheader">Project Size</b>
                </div>
                <p className="Projects-description"> Group Project - (4)</p>
                <div>
                    <b className="Projects-subheader">Tools & Frameworks</b>
                </div>
                <p className="Projects-description"> React, Firebase</p>
                <div>
                    <b className="Projects-subheader">Description</b>
                </div>
                <p className="Projects-description">
                    Sorcerer's Sprouts is an enchanted forest-themed app that helps freshmen build community through immersive hand-drawn designs and a 3D data model 
                    that matches students based on their responses to a set of curated questions, fostering meaningful connections for a confident college transition. 
                    In this project, I was the main UI/UX designer, where I spent majority of my time handdrawing and animating each component on the screen by hand 
                    on my iPad and helping my teammates troubleshoot any frontend problems that would come up. At the end of the hackathon, this project won 2nd place 
                    at the 2024 WEHack UTD hackathon for the L3Harris Challenge.
                </p>
            </div>
              <a className="Projects-hyperlink" href="/work" rel="noopener noreferrer">View Project</a>
            </div>
          </section>
          {/* Project Section */}
          <section className="Projects-screen">
            <div className="Projects-container">
              <b className="Projects-name">SmartParking</b>
              <div className="Projects-details">
                <div>
                    <b className="Projects-subheader">Type</b>
                </div>
                <p className="Projects-description"> Mobile App (Andriod & iOS compatible)</p>
                <div>
                    <b className="Projects-subheader">Project Size</b>
                </div>
                <p className="Projects-description"> Group Project - (4)</p>
                <div>
                    <b className="Projects-subheader">Tools & Frameworks</b>
                </div>
                <p className="Projects-description"> React Native JS, AWS Config, AWS DynamoDB, AWS SES, ESP32, Ultrasonic Sensors</p>
                <div>
                    <b className="Projects-subheader">Description</b>
                </div>
                <p className="Projects-description">
                Smart Parking is a hardware device and mobile app to provide real-time updates on parking space availability, integrating accessible features such 
                as a heatmap and AI/ML-driven parking lot occupancy predictions. This was my senior year group project for my final year in undergrad where I 
                contributed as the lead UI/UX and software developer in all mobile application operations, while connecting both hardware and software components 
                together efficiently.
                </p>
              </div>
              <a className="Projects-hyperlink" href="/work" rel="noopener noreferrer">View Project</a>
            </div>
          </section>
            {/* Project Section */}
            <section className="Projects-screen">
                <div className="Projects-container">
                <b className="Projects-name">Coastal Compass+</b>
                <div className="Projects-details">
                    <div>
                        <b className="Projects-subheader">Type</b>
                    </div>
                        <p className="Projects-description">Website</p>
                    <div>
                        <b className="Projects-subheader">Project Size</b>
                    </div>
                    <p className="Projects-description"> Group Project - (6)</p>
                    <div>
                        <b className="Projects-subheader">Tools & Frameworks</b>
                    </div>
                    <p className="Projects-description"> HTML, CSS, JavaScript, Figma, Node,js, Express.js, MongoDB</p>
                    <div>
                        <b className="Projects-subheader">Description</b>
                    </div>
                    <p className="Projects-description">
                    This project was implemented at the 2022 CodeForGood hackathon hosted by JPMorgan Chase and Co. in October 2022. During this hackathon, I was 
                    placed randomly in a group of 6 people to help a non-profit organization expand its services to urban areas. I was able to familiarize myself 
                    with the frontend website and app development concepts and learn how to work and adapt with others who have different skill sets compared to 
                    me. In the end, our project was one of the groups that won the 2022 hackathon in Plano, TX!
                    </p>
                </div>
                <a className="Projects-hyperlink" href="/work" rel="noopener noreferrer">View Project</a>
                </div>
            </section>
            {/* add footer here */}
        </div>
      </header>
    </div>
  );
}

export default Projects;