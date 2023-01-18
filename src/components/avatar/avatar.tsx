import "./avatar.css";

export function Avatar() {
  return (
    <div className="wrapper">
      <img
        className="avatar"
        src="/download.jpeg"
        alt="Miraya Tech's picture"
      />
      <h1 className="name">Miraya Tech</h1>
    </div>
  );
}
