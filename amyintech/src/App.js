import './App.css';
import NavBar from './NavBar'
import About from './About'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import olympicLoop from './backgroundScreens/olympicLoop.mp4';

function App() {
  return (
    <div className="App" style={{ position: 'relative' }}>
      <video className="background-screen" autoPlay loop muted>
        <source src={olympicLoop} type="video/mp4" />
      </video>
  
      <div className="overlay-content">
        <Router>
          <NavBar />
        </Router>
        <header className="App-header">
        <h2 style={{ paddingTop: '6%', fontFamily: 'Georgia, serif', fontSize: '55px' }}>
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
    </div>
  );
}

export default App;
