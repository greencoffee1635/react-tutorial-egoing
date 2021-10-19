import { useState } from 'react';
import { useParams } from 'react-router-dom';
export function Update(props) {
  var params = useParams();
  var id = Number(params.id);
  var topics = props.topics;
  var _title, _body;
  for(var i=0; i<topics.length; i++){
    if(topics[i].id === id){
      _title = topics[i].title;
      _body = topics[i].body;
    }
  }
  var [title, setTitle] = useState(_title);
  var [body, setBody] = useState(_body);
  function submitHandler(ev) {
    ev.preventDefault();
    var title = ev.target.title.value;
    var body = ev.target.body.value;
    props.onUpdate(id, title, body);
  }
  return (
    <article>
      <h2>Update</h2>
      <form onSubmit={submitHandler}>
        <p><input type="text" name="title" value={title} onChange={function (ev) {
          setTitle(ev.target.value);
        }} /></p>
        <p><textarea name="body" value={body} onChange={function (ev) {
          setBody(ev.target.value);
        }}></textarea></p>
        <p><input type="submit" /></p>
      </form>
    </article>
  );
}
