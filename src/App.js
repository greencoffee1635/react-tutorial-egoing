import React from 'react';
import { Route, Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>
        <Link to="/">WEB</Link>
      </h1>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ol>
        <li>
          <Link to="/read/1">html</Link>
        </li>
        <li>
          <Link to="/read/2">css</Link>
        </li>
      </ol>
    </nav>
  );
}

function Article() {
  return (
    <article>
      <h2>Welcome</h2>
      Hello, React
    </article>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Route exact path="/">
        Welcome
      </Route>
      <Route path="/read/:id">Read</Route>
    </div>
  );
}

export default App;
