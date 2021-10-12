export function Nav(props) {
  var lis = [];
  function aHandler(ev) {
    ev.preventDefault();
    props.onSelect(Number(ev.target.dataset.id));
  }
  for (var i = 0; i < props.src.length; i++) {
    var item = props.src[i];
    lis.push(
      <li key={item.id}>
        <a href={item.id + ".html"} data-id={item.id} onClick={aHandler}>
          {item.title}
        </a>
      </li>
    );
  }
  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  );
}
