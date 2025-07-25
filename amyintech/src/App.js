import './App.css';
import NavBar from './NavBar';
import About from './About';
import Work from './Work';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import olympicLoop from './backgroundScreens/olympicLoop.mp4';

function App() {
  return (
    <div className="App" style={{ position: 'absolute' }}>

    <div>
      <video className="background-screen" autoPlay loop muted>
        <source src={olympicLoop} type="video/mp4" />
      </video>
  
      <div className="overlay-content">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </Router>
          <header className="App-header">
          <h2 style={{ paddingTop: '12%', fontFamily: 'Georgia, serif', fontSize: '55px' }}>
            Amy Phan
          </h2>
            <p style={{ fontFamily: 'serif', fontSize: '18px', fontWeight: 'bold' }}>
              Software Engineer @ JPMorgan Chase & Co.
            </p>
            <p style={{ paddingBottom: '6%', fontFamily: 'serif', fontSize: '18px', fontWeight: 'bold'  }}>
              Graphic Design Coordinator @ Society of Asian Scientists and Engineers (SASE)
            </p>
              <div>
                <a
                  className="logos"
                  href="https://github.com/amyxphan"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img src="/GitHub.png" alt="" style={{ height: '50px', paddingRight: "4px" }} />
                </a>
                <a
                  className="logos"
                  href="https://www.linkedin.com/in/amyphan2/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/LinkedIn.webp" alt="" style={{ height: '50px' }} />
                </a>
                <a
                className="logos"
                href="https://drive.google.com/file/d/1OOr9WuLC4ZBiJG985fZDhA3rm3ZSh7Bj/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img src="/Resume.png" alt="" style={{ height: '50px' }} />
                </a>
              </div>
              <div className='scroll-down'>
                <p>**add a down arrow here**</p>
              </div>
          </header>
        </div>
        <div className='home-job-screen'>
          <img src="/jpmc.webp" alt="jpmcLogo" style={{ width: '350px', height: 'auto' }} />
          <div className="job-container">
            <b className='company-name'> JPMORGAN CHASE & CO. </b>
            <p className='job-position'> Software Engineer </p>
            <div className='job-tags'>
              <b className='tag'> FRONTEND DEVELOPER </b>
              <b className='tag'> END-TO-END/ADA TEST AUTOMATION </b>
            </div>
            <p className='job-description'> 
              Building and maintaining the Chase existing customer homepage and Refer-a-Friend experience 
              on web and mobile platforms; enhancing the user experience for millions of daily customers. 
            </p>
            <a
              className="project-hyperlink"
              href="/work"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
        {/* <div class="contact-section">
          <h2>Contact Me</h2>
          <p>I'd love to hear from you. Fill out the form below and I’ll get back to you soon.</p>

          <form class="contact-form" action="#" method="POST">
            <div class="form-row">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
      </div> */}
      </div>
    </div>
    
  );
}

export default App;
