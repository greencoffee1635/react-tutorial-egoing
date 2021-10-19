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
      <li key={props.data[i].id}>
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

function Read(props) {
  var params = useParams();
  var id = Number(params.id);
  var title, body;
  for (var i = 0; i < props.data.length; i++) {
    var topic = props.data[i];
    if (topic.id === id) {
      title = topic.title;
      body = topic.body;
    }
  }
  return <Article title={title} body={body} />;
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
        <Read data={topics} />
      </Route>
    </div>
  );
}

export default App;
