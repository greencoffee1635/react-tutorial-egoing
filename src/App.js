import logo from './logo.svg';
import './App.css';
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
  var topics = [
    {id:1, title:'html', body:'html is ..'},
    {id:2, title:'css', body:'css is ..'}
  ];
  function selectHandler(id){
    if(id===undefined){
      // Welcome 나온다.
    } else {
      // 선택한 게시글이 출력된다. 
    }
    alert('selected!'+id);
  }
  return (
    <div>
      <Header title="html" onSelect={selectHandler}></Header>
      <Nav src={topics} onSelect={selectHandler}></Nav>
      <Article title="HTML" body="HTML is ..."></Article>  
    </div>
  );
}

export default App;
