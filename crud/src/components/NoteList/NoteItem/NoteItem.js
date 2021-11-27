import {useRef} from 'react';

const NoteItem = ({id, text, deleteNote}) => {
  const ref = useRef();
  const onClickHandler = (id) => {
    deleteNote(id);
  }

  return (
    <div className="col-4">
      <div ref={ref} className="card mb-2"  data-id={id}>
        <div className="card-body">
          <p className="card-text">{text}</p>
          <button className="btn btn-danger" onClick={() => onClickHandler(id)}>Удалить</button>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;