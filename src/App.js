import React, { useState } from 'react';
import { Route, Link, useParams } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>
        <Link to="/">WEB2</Link>
      </h1>
    </header>
  );
}

function Nav(props) {
  var lis = [];
  for (var i = 0; i < props.data.length; i++) {
    lis.push(
      <li>
        <Link to={'/read/' + props.data[i].id}>{props.data[i].title}</Link>
      </li>
    );
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function Read() {
  var params = useParams();
  var id = Number(params.id);
  return <Article title="Read" body={id} />;
}

function App() {
  var [topics, setTopics] = useState([
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
  ]);
  return (
    <div>
      <Header />
      <Nav data={topics} />
      <Route exact path="/">
        <Article title="Welcome" body="Hello, WEB"></Article>
      </Route>
      <Route path="/read/:id">
        <Read />
      </Route>
    </div>
  );
}

export default App;
