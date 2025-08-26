// App.js
import './App.css';
import NavBar from './NavBar';
import About from './About';
import Work from './Work';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import olympicLoop from './backgroundScreens/olympicLoop.mp4';

function App() {
  return (
    <div className="App">
      <Router>
        {/* Fixed Nav wrapper */}
        <div className="navbar-fixed">
          <NavBar />
        </div>

        {/* Everything else gets padded down so it doesn't sit under the fixed nav */}
        <main className="page">
          {/* Hero Section (video only behind hero) */}
          <section className="overlay-content">
            <video className="hero-video" autoPlay loop muted>
              <source src={olympicLoop} type="video/mp4" />
            </video>

            <header className="App-header">
              <h2 className="hero-name">Amy Phan</h2>
              <p className="hero-subtitle">Software Engineer @ JPMorgan Chase & Co.</p>
              <p className="hero-subtitle">Graphic Design Coordinator @ Society of Asian Scientists and Engineers (SASE)</p>

              <div>
                <a className="logos" href="https://github.com/amyxphan" target="_blank" rel="noopener noreferrer">
                  <img src="/GitHub.png" alt="GitHub" style={{ height: '50px', paddingRight: '4px' }} />
                </a>
                <a className="logos" href="https://www.linkedin.com/in/amyphan2/" target="_blank" rel="noopener noreferrer">
                  <img src="/LinkedIn.webp" alt="LinkedIn" style={{ height: '50px' }} />
                </a>
                <a className="logos" href="https://drive.google.com/file/d/1OOr9WuLC4ZBiJG985fZDhA3rm3ZSh7Bj/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <img src="/Resume.png" alt="Resume" style={{ height: '50px' }} />
                </a>
              </div>

              <div className="scroll-down"><p>↓</p></div>
            </header>
          </section>

          {/* Home Job Section (solid black bg) */}
          <section className="home-job-screen">
            <img src="/jpmc.webp" alt="jpmcLogo" className="company-logo" />
            <div className="job-container">
              <b className="company-name">JPMORGAN CHASE & CO.</b>
              <p className="job-position">Software Engineer</p>
              <div className="job-tags">
                <b className="tag">FRONTEND DEVELOPER</b>
                <b className="tag">END-TO-END/ADA TEST AUTOMATION</b>
              </div>
              <p className="job-description">
                Building and maintaining the Chase existing customer homepage and Refer-a-Friend experience on web and mobile platforms; enhancing the user experience for millions of daily customers.
              </p>
              <a className="project-hyperlink" href="/work" rel="noopener noreferrer">View Project</a>
            </div>
          </section>

          {/* Routes that should render on navigation only */}
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/" element={<></>} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
