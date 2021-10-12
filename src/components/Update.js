import { useState } from 'react';

export function Update(props) {
  var [title, setTitle] = useState(props.data.title);
  var [body, setBody] = useState(props.data.body);
  function submitHandler(ev) {
    ev.preventDefault();
    var title = ev.target.title.value;
    var body = ev.target.body.value;
    props.onUpdate(title, body);
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
