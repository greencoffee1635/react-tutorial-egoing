export function Header(props) {
  console.log('Header');
  function aHandler(ev) {
    ev.preventDefault();
    props.onSelect();
  }
  return (
    <header><h1><a href="index.html" onClick={aHandler}>{props.title}</a></h1></header>
  );
}
