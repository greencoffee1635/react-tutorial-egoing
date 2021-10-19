import './App.css';
import { useState } from 'react';
import { Article } from './components/Article';
import { Nav } from './components/Nav';
import { Header } from './components/Header';
import { Create } from './components/Create';
import { Control } from './components/Control';
import { Update } from './components/Update';
import {
  BrowserRouter as Router, 
  Route, 
  useHistory,
  useParams
} from 'react-router-dom';

function App() {
  var history = useHistory();
  var [id, setId] = useState(2);
  var [mode,setMode] = useState('WELCOME');
  var [nextId,setNextId] = useState(3);
  var [topics, setTopics] = useState([
    {id:1, title:'html', body:'html is ..'},
    {id:2, title:'css', body:'css is ..'}
  ]);
  function selectHandler(_id){
    if(_id===undefined){
      setMode('WELCOME');
    } else {
      setId(_id);
      setMode('READ');
    }
  }
  var articleComp = <Article title="Welcome" body="Welcome is ..."></Article>;
  if(mode === 'UPDATE'){
    function updateHandler(_title,_body){
      var newTopics = [];
      for(var i=0; i<topics.length; i++){
        var topic = topics[i];
        if(topic.id === id){
          newTopics.push({id:topic.id, title:_title, body:_body});
        } else {
          newTopics.push(topic);
        }
      }
      setTopics(newTopics);
      setMode('READ');
    }
    var data;
    for(var i=0; i<topics.length; i++){
      var topic = topics[i];
      if(topic.id === id){
        data = topic;
      }
    }
    articleComp = <Update onUpdate={updateHandler} data={data}></Update>
  }
  function deleteHandler(id){
    var newTopics = [];
    for(var i=0; i<topics.length; i++){
      if(topics[i].id === id){
        
      } else {
        newTopics.push(topics[i]);
      }
    }
    setTopics(newTopics);
    history.push('/');
  }
  function createHandler(_title,_body){
    // topics.push({title:_title, body:_body});
    // setTopics(topics);
    var newTopics = [...topics];
    newTopics.push({id:nextId, title:_title, body:_body});
    setTopics(newTopics);
    history.push('/read/'+nextId);
    setNextId(nextId+1);
  }
  function updateHandler(_id, _title,_body){
    var newTopics = [];
    for(var i=0; i<topics.length; i++){
      var topic = topics[i];
      if(topic.id === _id){
        newTopics.push({id:topic.id, title:_title, body:_body});
      } else {
        newTopics.push(topic);
      }
    }
    setTopics(newTopics);
    history.push('/read/'+_id);
  }
  return (
    <div>
      <Header title="html"></Header>
      <Nav src={topics} onSelect={selectHandler}></Nav>
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
