function Song({ title, no, singer }) {
  return (
    <div>
      <div>{title}</div>
      <div>{singer}</div>
      <div>{no}</div>
    </div>
  );
}

export default Song;
