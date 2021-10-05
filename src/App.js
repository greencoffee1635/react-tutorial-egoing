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
  // console.log("🚀 ~ file: App.js ~ line 13 ~ Nav ~ props", props)
  //   var lis= [        
  //             <li><a href="1.html">html</a></li>,
  //             <li><a href="2.html">css</a></li>
  //           ];
  var lis = [];
  for(var i = 0; i < props.src.length; i++){
      lis.push(<li key={props.src[i].id}>{props.src[i].title}</li>);
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
  return (
    <header><h1><a href="index.html">{props.title}</a></h1></header>
  )
}
function App() {
  var topics = [
    {id:1, title:'html', body:'html is ..'},
    {id:2, title:'css', body:'css is ..'}
  ];
  return (
    <div>
      <Header title="html"></Header>
      <Nav src={topics}></Nav>
      <Article title="HTML" body="HTML is ..."></Article>  
    </div>
  );
}

export default App;