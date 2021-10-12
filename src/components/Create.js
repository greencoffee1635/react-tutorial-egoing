export function Create(props) {
  function submitHandler(ev) {
    ev.preventDefault();
    var title = ev.target.title.value;
    var body = ev.target.body.value;
    props.onCreate(title, body);
  }
  return (
    <article>
      <h2>Create</h2>
      <form onSubmit={submitHandler}>
        <p><input type="text" name="title" defaultValue="a" /></p>
        <p><textarea name="body" defaultValue="b"></textarea></p>
        <p><input type="submit" /></p>
      </form>
    </article>
  );
}
