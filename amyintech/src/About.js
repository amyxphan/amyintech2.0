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
      setFade(false); // fade out
      setTimeout(() => {
        setCurrentPhoto((prev) => (prev + 1) % photos.length);
        setFade(true); // fade in
      }, 500); // match fade duration
    }, 8000); // 8 seconds per slide

    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <div className="About">
      <header className="About-header">

        {/* High-level About Section */}
        <section className="About-screen">
          <div className="About-container About-container-flex">
            {/* Circular profile pic */}
            <div className="About-pfp-container">
              <img src={profile} alt="Profile" className="About-pfp" />
            </div>

            {/* Quick Facts content */}
            <div className="About-details">
              <p className="About-subheader">💻 B.S. Computer Engineering at UNT</p>
              <p className="About-subheader">👩‍💻 Software Engineer at JPMorgan Chase & Co.</p>
              <p className="About-subheader">👩‍🎨 Graphic Design Coordinator for STEM Connect 2025</p>
              <p className="About-subheader">🧪 Founder of Society of Asian Scientists and Engineers at UNT (SASE UNT)</p>
            </div>
          </div>
        </section>

        {/* About Me Bio Section */}
        <section className="About-screen">
          <div className="About-container">
            <b className="About-name">About Me</b>
            <div className="About-details">
              <p className="About-description">
              I grew up in a low-income, immigrant family near Dallas, TX, where my parents encouraged me to seize every opportunity. As a child, I often stole my dad’s 
              screwdriver to take apart and reassemble household items. At 12, I entered my first STEM competition and won 1st place in the state of Texas for math, 
              marking the beginning of my engineering journey. 5 years later, I completed high school in 3 years, balancing leadership activities in 3 different clubs, 
              attended community college (accumulating 39 college credit hours), and managed our nationally ranked (top 3) varsity girl’s basketball team. I attended 
              the University of North Texas, earning a B.S. in Computer Engineering. During my time there, I founded the Society of Asian Scientists and Engineers (SASE) 
              and spent my free time learning computer science concepts beyond my formal studies. I'm currently a Software Engineer at JPMorgan Chase & Co. In my free time, 
              I enjoy hiking, pilates, playing with my pet hamsters Mochi and Miso, and taking care of my 30+ plants. I am passionate about accessibility and aim to create 
              innovative solutions that bridge gaps and drive positive change in the tech industry.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership + Highlights Section */}
        <section className="About-screen">
          <div className="About-container">
            <b className="About-name">Leadership + Highlights</b>
            <div className="About-details">

              {/* Slideshow */}
              <div className="About-slideshow" style={{ position: 'relative', height: '300px', marginBottom: '20px' }}>
                <img
                  src={photos[currentPhoto]}
                  alt={`Slide ${currentPhoto + 1}`}
                  className={`About-slideshow-img ${fade ? 'fade-in' : 'fade-out'}`}
                />
              </div>

              {/* List of highlights */}
              <p className="About-description">
                • 2021 Founded SASE at the University of North Texas<br />
                • 2021-23 President for SASE UNT (2 yrs)<br />
                • 2023-24 SASE South Regional Coordinator<br />
                • 2023-24 Vice President - Engineers United (HackUNT)<br />
                • 2022 UNT New Student Org of the Year<br />
                • 2022 SASE Outstanding New Chapter<br />
                • 2022 CodeForGood Hackathon Winner<br />
                • 2023 James Carls Matthews President of the Year<br />
                • 2023 SASE South Region Collegiate Star Honorable Mention<br />
                • 2023 SWE Intern at JPMorgan Chase<br />
                • 2023 Grace Hopper Celebration Scholar<br />
                • 2024 WEHack Winner (2nd place L3Harris Challenge)<br />
                • 2024 Golden Eagle Award Recipient
              </p>
            </div>
          </div>
        </section>

      </header>
    </div>
  );
}

export default About;
