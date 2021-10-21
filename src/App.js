import './App.css';
import { useEffect, useState } from 'react';
import { Article } from './components/Article';
import { Nav } from './components/Nav';
import { Header } from './components/Header';
import { Create } from './components/Create';
import { Control } from './components/Control';
import { Update } from './components/Update';
import { BrowserRouter as Router, Route, useHistory, useParams } from 'react-router-dom';

var URL = '';
function App() {
  var history = useHistory();
  var [nextId,setNextId] = useState(3);
  var [topics, setTopics] = useState([]);
  function fetchTopics(callback){
    fetch(URL+'/topics')
      .then((type)=>type.json())
      .then((result)=>{
        setTopics(result);   
        if(callback){
          callback();
        } 
      })
  }
  useEffect(()=>{
    fetchTopics();
  }, []);
    
  function deleteHandler(id){
    fetch(URL+'/topics/'+id, {
      method: 'DELETE'
    })
      .then(type=>type.json())
      .then(result=>{
        fetchTopics(()=>history.push('/'));
      });
  }
  function createHandler(_title,_body){
    fetch(URL+'/topics', {
      method:'POST',
      body:JSON.stringify({
        title:_title,body:_body
      }),
      headers:{'Content-Type':'application/json'}
    })
      .then(type=>type.json())
      .then(result=>{
        fetchTopics();
        history.push('/read/'+result.id);
      });
  }
  function updateHandler(_id, _title,_body){
    fetch(URL+'/topics/'+_id, {
      method:'PUT',
      body:JSON.stringify({
        title:_title,body:_body
      }),
      headers:{'Content-Type':'application/json'}
    })
      .then(type=>type.json())
      .then(result=>{
        fetchTopics(()=>{
          history.push('/read/'+_id)
        });
      });
  }
  return (
    <div>
      <Header title="html"></Header>
      <Nav src={topics}></Nav>
      <Route exact path="/">
        <Article title="Welcome" body="Hello, WEB"></Article>
      </Route>
      <Route path="/create">
        <Create onCreate={createHandler}></Create>
      </Route>
      <Route path="/read/:id">
        <Read topics={topics}></Read>
      </Route>
      <Route path="/update/:id">
        <Update onUpdate={updateHandler} topics={topics}></Update>
      </Route>
      <Control onDelete={deleteHandler}></Control>
    </div>
  );
}
function Read(props){
  var params = useParams();
  var id = Number(params.id);
  var title, body;
  for(var i=0; i<props.topics.length; i++){
    var topic = props.topics[i];
    if(topic.id === id){
      title = topic.title;
      body = topic.body;
    }
  }
  return <Article title={title} body={body}></Article>
}

export default App;
