import { useState, useEffect } from 'react';
import './About.css'; 
import profile from './backgroundScreens/profile.jpg';
import photo1 from './backgroundScreens/photo1.JPG';
import photo2 from './backgroundScreens/photo2.jpg';
import photo3 from './backgroundScreens/photo3.jpg';
import photo4 from './backgroundScreens/photo4.jpg';
import photo5 from './backgroundScreens/photo5.jpg';
import photo6 from './backgroundScreens/photo6.jpg';
import photo7 from './backgroundScreens/photo7.JPG';
import photo8 from './backgroundScreens/photo8.JPG';
import photo9 from './backgroundScreens/photo9.JPG';
import photo10 from './backgroundScreens/photo10.JPG';
import photo11 from './backgroundScreens/photo11.JPG';
import photo12 from './backgroundScreens/photo12.JPG';
import photo13 from './backgroundScreens/photo13.JPG';
import photo14 from './backgroundScreens/photo14.jpg';
import photo15 from './backgroundScreens/photo15.jpg';
import photo16 from './backgroundScreens/photo16.JPG';

function About() {
  const photos = [
    photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8,
    photo9, photo10, photo11, photo12, photo13, photo14, photo15, photo16
  ]; 
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentPhoto((prev) => (prev + 1) % photos.length);
        setFade(true);
      }, 250);
    }, 5000);

    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <>
      <div className="About">
        <header className="About-header">

          {/* Column 1: Profile + About Me */}
          <div className="About-column">
            <section className="About-newspaper">
              <div className="About-pfp-container">
                <img src={profile} alt="Profile" className="About-pfp" />
              </div>
              <p className="About-subheader">💻 B.S. Computer Engineering at UNT</p>
              <p className="About-subheader">👩‍💻 Software Engineer at JPMorgan Chase & Co.</p>
              <p className="About-subheader">👩‍🎨 Graphic Design Coordinator for STEM Connect 2025</p>
              <p className="About-subheader">🧪 Founder of Society of Asian Scientists and Engineers at UNT (SASE UNT)</p>
            </section>

            <section className="About-newspaper">
              <b className="About-name">About Me</b>
              <p className="About-description">
              I’m a Software Engineer at JPMorgan Chase & Co., where I work on the Refer-A-Friend and Explore Products team as a full-stack engineer with a 
              focus on frontend development and test automation for web and mobile products.

              I grew up in a low-income, immigrant family near Dallas, TX, where curiosity and resilience shaped my path. As a child, I would borrow my dad’s 
              screwdriver to take apart household items just to see how they worked. At 12, I won 1st place in a statewide math competition which became my first 
              spark that fueled my love for engineering.

              By the time I finished high school (in just three years), I had taken on leadership roles in 3 clubs, earned 39 college credits, and helped 
              lead our varsity girls’ basketball team to a top 3 national ranking. I went on to earn my B.S. in Computer Engineering at the University of North 
              Texas, where I also founded the Society of Asian Scientists and Engineers chapter at UNT (SASE UNT). Outside the classroom, I immersed myself in 
              hackathons and side projects to grow my software skills.

              I’m passionate about accessibility and building innovative solutions that create positive change. Outside of work, you’ll find me exploring 
              national parks, practicing pilates, caring for 30+ plants, or playing with my two hamsters, Mochi and Miso. 
              </p>
            </section>
          </div>

          {/* Column 2: Leadership + Highlights */}
          <div className="About-column">
            <section className="About-newspaper">
              <b className="About-name">Leadership + Highlights</b>
              <p className="About-description">
                • 2021 Founded SASE at the University of North Texas<br />
                • 2021-23 President for SASE UNT (2 yrs)<br />
                • 2022 UNT New Student Org of the Year<br />
                • 2022 SASE Outstanding New Chapter<br />
                • 2022 CodeForGood Hackathon Winner<br />
                • 2023 James Carls Matthews President of the Year<br />
                • 2023 SASE South Region Collegiate Star Honorable Mention<br />
                • 2023 SWE Intern at JPMorgan Chase<br />
                • 2023 Grace Hopper Celebration Scholar<br />
                • 2023-24 SASE South Regional Coordinator<br />
                • 2023-24 Engineers United (HackUNT) Vice President<br />
                • 2024 WEHack Winner (2nd place L3Harris Challenge)<br />
                • 2024 Golden Eagle Award Recipient<br />
                • 2025 Graphic Design Coordinator for STEM Connect<br />
              </p>
              <div className="About-slideshow">
                <img
                  src={photos[currentPhoto]}
                  alt={`Slide ${currentPhoto + 1}`}
                  className={`About-slideshow-img ${fade ? 'fade-in' : 'fade-out'}`}
                />
              </div>
            </section>
          </div>

        </header>
      </div>

      {/* Footer OUTSIDE the .About container */}
      <footer className="About-footer">
        <div className="About-footer-content">
          <b className="About-footer-title">amyintech</b>
          <div className="About-footer-sections">
            <div className="About-footer-section">
              <p className="About-footer-heading">Contact Me</p>
              <p className="About-footer-text">phan.amy28@gmail.com</p>
            </div>

            <div className="About-footer-section">
              <p className="About-footer-heading">Let's Connect</p>
              <p className="About-footer-text">
                <a 
                  href="https://www.linkedin.com/in/amyphan2/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="About-footer-link"
                >
                  LinkedIn
                </a>
                {" | "}
                <a 
                  href="https://github.com/amyxphan"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="About-footer-link"
                >
                  GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default About;
