export function Article(props) {
  console.log('Article');
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}
