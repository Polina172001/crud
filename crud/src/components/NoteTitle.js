const NoteTitle = ({updateNotes}) => {
  return (
    <header className="mb-5">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
              Notes
          </a>
          <button className="btn btn-primary ml-auto" onClick={updateNotes}>Обновить</button>
        </div>
      </nav>
    </header>
  );
};

export default NoteTitle;