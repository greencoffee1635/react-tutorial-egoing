import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import { Article } from './components/Article';
import { Nav } from './components/Nav';
import { Header } from './components/Header';
import { Control } from './components/Control';
import { Update } from "./components/Update";
import { Create } from './components/Create';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  
  var [id, setId] = useState(2);
  var [mode,setMode] = useState('WELCOME');
  var [nextId,setNextId] = useState(3);
  var [topics, setTopics] = useState([
    {id:1, title:'html', body:'html is ..'},
    {id:2, title:'css', body:'css is ..'}
  ]);
  console.log('run App', id);
  function selectHandler(_id){
    if(_id===undefined){
      setMode('WELCOME');
    } else {
      setId(_id);
      setMode('READ');
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
    function createHandler(_title,_body){
      // topics.push({title:_title, body:_body});
      // setTopics(topics);
      var newTopics = [...topics];
      newTopics.push({id:nextId, title:_title, body:_body});
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId+1);
    }
    articleComp = <Create onCreate={createHandler}></Create>
  } else if(mode === 'UPDATE'){
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
  function changeHandler(_mode){
    if(_mode === 'DELETE'){
      // 삭제한다. 
      var newTopics = [];
      for(var i=0; i<topics.length; i++){
        if(topics[i].id === id){
          
        } else {
          newTopics.push(topics[i]);
        }
      }
      setTopics(newTopics);
      setMode('WELCOME');
    } else if(_mode === 'UPDATE'){
      setMode('UPDATE');
    } else {
      setMode(_mode);
    }
  }
  return (
    <Router>
      <Header title="html" onSelect={selectHandler}></Header>
      <Nav src={topics} onSelect={selectHandler}></Nav>
      <Route exact path="/">Welcome</Route>
      <Route path="/create">Create</Route>
      <Route path="/read">Read</Route>
      <Route path="/update">Update</Route>
      <Control onChangeMode={changeHandler}></Control>
    </Router>
  );
}

export default App;
