import './App.css';

function App() {
  return (
    <div className="portfolio-container">
      <header>
        <h1>Hi, I'm Vedant</h1>
        <p className="subtitle">Aspiring Software Developer</p>
      </header>

      <section className="section about">
        <h2>About Me</h2>
        <p>
          A student of Information Technology at KKWIEER. I am skilled in Web Technologies like
          React and Svelte and Backend Technologies like Django, Go and SQL. Highly interested and
          currently learning about Graphics Technologies. My hobbies include photography, filmmaking 
          and screenwriting.
        </p>
      </section>

      <section className="section skills">
        <h2>Skills: </h2>
        <p>TypeScript, React, Node, Django, SQL, MongoDB</p>
      </section>

      <section className="section skills">
        <h2>Projects: </h2>
        <p><a href="https://github.com/vedanthanekar45/NovelNest">NovelNest: </a>A book cataloging application inspired by Letterboxd</p>
        <p><a href="https://github.com/vedanthanekar45/liblend">Liblend: </a>A digital asset lending system made in Django</p>
      </section>

      <section className="section contact">
        <h2>Want to contact me? Email me <a href="mailto:vedanthanekar45@gmail.com">here</a>.</h2>
      </section>

      <section className="section contact">
        <h2>Want to take a look at my projects? Check out my <a href="https://github.com/vedanthanekar45">Github.</a></h2>
      </section>
    </div>
  );
}

export default App;
