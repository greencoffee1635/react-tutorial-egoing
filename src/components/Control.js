
export function Control(props) {
  return (
    <ul>
      <li><a href="create.html" onClick={function (ev) {
        ev.preventDefault();
        props.onChangeMode('CREATE');
      }}>Create</a></li>
      <li><a href="update.html" onClick={function (ev) {
        ev.preventDefault();
        props.onChangeMode('UPDATE');
      }}>update</a></li>
      <li>
        <form onSubmit={function (ev) {
          ev.preventDefault();
          props.onChangeMode('DELETE');
        }}>
          <input type="submit" value="delete"></input>
        </form>
      </li>
    </ul>
  );
}

