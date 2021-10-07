import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function Article(props){
  return (
    <article>
      <h2>{props.title}</h2>  
      {props.body}
    </article> 
  )
}
function Nav(props){
  var lis = [];
  function aHandler(ev){
    ev.preventDefault();
    props.onSelect(ev.target.dataset.id);
  }
  for(var i = 0; i < props.src.length; i++){
      var item = props.src[i];
      lis.push(
        <li key={item.id}>          
            <a href={item.id+".html"} data-id={item.id} onClick={aHandler}>
              {item.title}
            </a>
        </li>
      );
  }
  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  );
}
function Header(props){
  function aHandler(ev){
    ev.preventDefault();
    props.onSelect();
  }
  return (
    <header><h1><a href="index.html" onClick={aHandler}>{props.title}</a></h1></header>
  )
} 
function App() {
  console.log('run App');
  // var mode = 'READ';
  var [mode,setMode] = useState('READ');
  var topics = [
    {id:1, title:'html', body:'html is ..'},
    {id:2, title:'css', body:'css is ..'}
  ];
  function selectHandler(id){
    if(id===undefined){
      mode = setMode('WELCOME');
    } else {
      mode = setMode('READ');
    }
  }
  var articleComp = <Article title="Welcome" body="Welcome is ..."></Article>;
  if(mode === 'READ'){
    articleComp = <Article title="READ" body="Hello, Read"></Article>
  }
  return (
    <div>
      <Header title="html" onSelect={selectHandler}></Header>
      <Nav src={topics} onSelect={selectHandler}></Nav>
      {articleComp}
    </div>
  );
}

export default App;
