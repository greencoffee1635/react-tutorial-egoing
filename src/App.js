import logo from './logo.svg';
import './App.css';
function ArticleTag(){
  return (
    <article>
      <h2>안녕</h2>  
      Hello, WEB
    </article> 
  )
}
function App() {
  return (
    <div>
      <header><h1><a href="index.html">WEB</a></h1></header>
      <nav>
        <ol>
          <li><a href="1.html">html</a></li>
          <li><a href="2.html">css</a></li>
        </ol>
      </nav>
      <ArticleTag></ArticleTag>  
    </div>
  );
}

export default App;