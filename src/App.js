import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function Article(props){
  console.log('Article');
  return (
    <article>
      <h2>{props.title}</h2>  
      {props.body}
    </article> 
  )
}
function Nav(props){
  console.log('Nav');
  var lis = [];
  function aHandler(ev){
    ev.preventDefault();
    props.onSelect(Number(ev.target.dataset.id));
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
  console.log('Header');
  function aHandler(ev){
    ev.preventDefault();
    props.onSelect();
  }
  return (
    <header><h1><a href="index.html" onClick={aHandler}>{props.title}</a></h1></header>
  )
} 
function Create(props){
  function submitHandler(ev){
    ev.preventDefault();
    var title = ev.target.title.value;
    var body = ev.target.body.value;
    props.onCreate(title,body);
  }
  return (
    <article>
        <h1>Create</h1>
        <form onSubmit={submitHandler}>
          <p><input type="text" name="title" /></p>
          <p><textarea name="body"></textarea></p>
          <p><input type="submit" /></p>
        </form>
      </article>
  )
}
function App() {
  console.log('run App');
  var [id, setId] = useState(2);
  var [mode,setMode] = useState('CREATE');
  var topics = [
    {id:1, title:'html', body:'html is ..'},
    {id:2, title:'css', body:'css is ..'}
  ];
  function selectHandler(_id){
    if(_id===undefined){
      mode = setMode('WELCOME');
    } else {
      id = setId(_id);
      mode = setMode('READ');
    }
  }
  var articleComp = <Article title="Welcome" body="Welcome is ..."></Article>;
  if(mode === 'READ'){
    var title, body;
    for(var i=0; i<topics.length; i++){
      var item = topics[i];
      if(item.id === id){
        title = item.title;
        body = item.body;
      }
    }
    articleComp = <Article title={title} body={body}></Article>
  } else if(mode === 'CREATE') {
    function createHandler(title,body){
      alert(title+','+body);
    }
    articleComp = <Create onCreate={createHandler}></Create>
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
