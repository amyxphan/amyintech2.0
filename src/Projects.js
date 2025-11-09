import { useEffect, useState } from "react";
import './Projects.css'; 
import therapytouch from './backgroundScreens/therapytouch.mp4';
import sorcererssprouts from './backgroundScreens/sorcererssprouts.mp4';
import smartparking from './backgroundScreens/smartparking.mp4';
import coastalcompass from './backgroundScreens/coastalcompass.mp4';

function Projects() {
  const [activeSection, setActiveSection] = useState("section1");

  useEffect(() => {
    const sections = document.querySelectorAll(".Projects-screen");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="Projects">
      <div className="Projects-scroll">
        {/* Section 1: TherapyTouch */}
        <section id="section1" className="Projects-screen">
          <video className="Projects-video-bg" src={therapytouch} autoPlay loop muted playsInline />
          <div className="Projects-container">
            <b className="Projects-name">TherapyTouch</b>
            <div className="Projects-details">
              <b className="Projects-subheader">Type</b>
              <p className="Projects-description">iOS Mobile App</p>
              <b className="Projects-subheader">Project Size</b>
              <p className="Projects-description">Individual Project</p>
              <b className="Projects-subheader">Tools & Frameworks</b>
              <p className="Projects-description">Swift, SwiftUI</p>
              <b className="Projects-subheader">Description</b>
              <p className="Projects-description">
                    TherapyTouch is a mobile app that I am currently working on to create an all-in-one mental health app that allows users to recieve live help, 
                    journal, view their journey, and meditate. In this project, I hope to be able to learn more about mental health issues, tune into my love for 
                    UI/UX with handdrawn componests, and create a product that's accessible for users to use and get the help they need.
              </p>
            </div>
            {/* add hyperlink to project demo + figma here*/}
          </div>
        </section>

        {/* Section 2: Sorcerers Sprouts */}
        <section id="section2" className="Projects-screen">
          <video className="Projects-video-bg" src={sorcererssprouts} autoPlay loop muted playsInline />
          <div className="Projects-container">
            <b className="Projects-name">Sorcerers Sprouts</b>
            <div className="Projects-details">
              <b className="Projects-subheader">Type</b>
              <p className="Projects-description">Website</p>
              <b className="Projects-subheader">Project Size</b>
              <p className="Projects-description">Group Project - (4)</p>
              <b className="Projects-subheader">Tools & Frameworks</b>
              <p className="Projects-description">React, Firebase</p>
              <b className="Projects-subheader">Description</b>
              <p className="Projects-description">
                    Sorcerer's Sprouts is an enchanted forest-themed app that helps freshmen build community through immersive hand-drawn designs and a 3D data model 
                    that matches students based on their responses to a set of curated questions, fostering meaningful connections for a confident college transition. 
                    In this project, I was the main UI/UX designer, where I spent majority of my time handdrawing and animating each component on the screen by hand 
                    on my iPad and helping my teammates troubleshoot any frontend problems that would come up. At the end of the hackathon, this project won 2nd place 
                    at the 2024 WEHack UTD hackathon for the L3Harris Challenge.
              </p>
            </div>
            {/* add hyperlink to project demo + figma here*/}
          </div>
        </section>

        {/* Section 3: SmartParking */}
        <section id="section3" className="Projects-screen">
          <video className="Projects-video-bg" src={smartparking} autoPlay loop muted playsInline />
          <div className="Projects-container">
            <b className="Projects-name">SmartParking</b>
            <div className="Projects-details">
              <b className="Projects-subheader">Type</b>
              <p className="Projects-description">Mobile App (Android & iOS compatible)</p>
              <b className="Projects-subheader">Project Size</b>
              <p className="Projects-description">Group Project - (4)</p>
              <b className="Projects-subheader">Tools & Frameworks</b>
              <p className="Projects-description">React Native JS, AWS Config, DynamoDB, ESP32</p>
              <b className="Projects-subheader">Description</b>
              <p className="Projects-description">
                Smart Parking is a hardware device and mobile app to provide real-time updates on parking space availability, integrating accessible features such 
                as a heatmap and AI/ML-driven parking lot occupancy predictions. This was my senior year group project for my final year in undergrad where I 
                contributed as the lead UI/UX and software developer in all mobile application operations, while connecting both hardware and software components 
                together efficiently.
              </p>
            </div>
              {/* add hyperlink to project demo + figma here*/}
          </div>
        </section>

        {/* Section 4: Coastal Compass+ */}
        <section id="section4" className="Projects-screen">
          <video className="Projects-video-bg" src={coastalcompass} autoPlay loop muted playsInline />
          <div className="Projects-container">
            <b className="Projects-name">Coastal Compass+</b>
            <div className="Projects-details">
              <b className="Projects-subheader">Type</b>
              <p className="Projects-description">Website</p>
              <b className="Projects-subheader">Project Size</b>
              <p className="Projects-description">Group Project - (6)</p>
              <b className="Projects-subheader">Tools & Frameworks</b>
              <p className="Projects-description">HTML, CSS, JS, Figma, Node.js, Express.js, MongoDB</p>
              <b className="Projects-subheader">Description</b>
              <p className="Projects-description">
                    This project was implemented at the 2022 CodeForGood hackathon hosted by JPMorgan Chase and Co. in October 2022. During this hackathon, I was 
                    placed randomly in a group of 6 people to help a non-profit organization expand its services to urban areas. I was able to familiarize myself 
                    with the frontend website and app development concepts and learn how to work and adapt with others who have different skill sets compared to 
                    me. In the end, our project was one of the groups that won the 2022 hackathon in Plano, TX!
              </p>
            </div>
            {/* add hyperlink to project demo + figma here*/}
          </div>
        </section>
      </div>

      {/* Navigation Dots */}
      <nav className="Projects-nav">
        <a 
          href="#section1" 
          className={`Projects-nav-dot ${activeSection === "section1" ? "active" : ""}`} 
          aria-label="Go to Project section 1" 
        ></a>
        <a 
          href="#section2" 
          className={`Projects-nav-dot ${activeSection === "section2" ? "active" : ""}`} 
          aria-label="Go to Project section 2" 
        ></a>
        <a 
          href="#section3" 
          className={`Projects-nav-dot ${activeSection === "section3" ? "active" : ""}`} 
          aria-label="Go to Project section 3" 
        ></a>
        <a 
          href="#section4" 
          className={`Projects-nav-dot ${activeSection === "section4" ? "active" : ""}`} 
          aria-label="Go to Project section 4" 
        ></a>
      </nav>
    </div>
  );
}

export default Projects;
