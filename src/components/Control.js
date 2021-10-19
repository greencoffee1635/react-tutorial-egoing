import {Link, Route, useParams} from 'react-router-dom';
function ReadContextOperator(props){
  var params = useParams();
  var id = Number(params.id);
  return <>
    <li><Link to={"/update/"+id}>update</Link></li>
    <li>
      <form onSubmit={function (ev) {
        ev.preventDefault();
        props.onDelete(id);
      }}>
        <input type="submit" value="delete"></input>
      </form>
    </li>
  </>;
}
export function Control(props) {
  return (
    <ul>
      <li><Link to="/create">Create</Link></li>
      <Route path="/read/:id">
        <ReadContextOperator onDelete={props.onDelete}></ReadContextOperator>
      </Route>
    </ul>
  );
}
