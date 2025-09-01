import './About.css'; 
import profile from './backgroundScreens/profile.jpg'; // <-- Add your profile image here

function About() {
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
                    I grew up in a low-income, immigrant family near Dallas, TX, where my parents encouraged me to seize every opportunity. 
                    As a child, I often stole my dad’s screwdriver to take apart and reassemble household items. At 12, I entered my first 
                    STEM competition and won 1st place in the state of Texas for math, marking the beginning of my engineering journey. 5 
                    years later, I completed high school in 3 years, balancing leadership activities in 3 different clubs, attended community 
                    college (accumulating 39 college credit hours), and managed our nationally ranked (top 3) varsity girl’s basketball team. 
                    I attended the University of North Texas, earning a B.S. in Computer Engineering. During my time there, I founded the 
                    Society of Asian Scientists and Engineers (SASE) and spent my free time learning computer science concepts beyond my formal 
                    studies. I'm currently a Software Engineer at JPMorgan Chase & Co. In my free time, I enjoy hiking, pilates, playing with my 
                    pet hamsters Mochi and Miso, and taking care of my 30+ plants. I am passionate about accessibility and aim to create innovative 
                    solutions that bridge gaps and drive positive change in the tech industry.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership + Highlights Section */}
        <section className="About-screen">
          <div className="About-container">
            <b className="About-name">Leadership + Highlights</b>
            <div className="About-details">
              <p className="About-subheader">ADD highlights here</p>
            </div>
          </div>
        </section>

      </header>
    </div>
  );
}

export default About;
