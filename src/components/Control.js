import {Link, Route} from 'react-router-dom';
export function Control(props) {
  return (
    <ul>
      <li><Link to="/create">Create</Link></li>
      <Route path="/read/:id">
        <li><Link to="/update/1">update</Link></li>
        <li>
          <form onSubmit={function (ev) {
            ev.preventDefault();
            props.onChangeMode('DELETE');
          }}>
            <input type="submit" value="delete"></input>
          </form>
        </li>
      </Route>
    </ul>
  );
}
