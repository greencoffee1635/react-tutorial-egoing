import {Link} from 'react-router-dom';
export function Header(props) {
  return (
    <header><h1><Link to="/">{props.title}</Link></h1></header>
  );
}
