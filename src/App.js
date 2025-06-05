import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="portfolio-container">
      <header>
        <h1>Hi, I'm Alex</h1>
        <p className="subtitle">Full Stack Developer & Problem Solver</p>
      </header>

      <section className="section about">
        <h2>About Me</h2>
        <p>
          I love building things for the web — whether it's a slick UI or a REST API. 
          My approach is simple: write clean code and learn continuously.
        </p>
      </section>

      <section className="section skills">
        <h2>Skills</h2>
        <ul>
          <li>React / Next.js</li>
          <li>Node / Express</li>
          <li>MongoDB / SQL</li>
          <li>Tailwind / CSS3</li>
        </ul>
      </section>

      <section className="section contact">
        <h2>Contact</h2>
        <p>Email me at: <a href="mailto:alex@example.com">alex@example.com</a></p>
      </section>
    </div>
  );
}

export default App;
