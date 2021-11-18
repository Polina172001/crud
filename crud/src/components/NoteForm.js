import {useState} from 'react';

const NoteForm = (props) => {
  const [textAreaValue, setTextAreaValue] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (textAreaValue === '') {
      return;
    }
    props.addNewNotes(textAreaValue);
    setTextAreaValue('');
  }

  const onChangeHandler = (event) => {
    const {value} = event.target;
    setTextAreaValue(value)
  }

  return (
    <form onSubmit={onSubmitHandler} className="mb-5">
      <div className="mb-3">
        <label htmlFor="newNotes" className="form-label">Новая заметка</label>
        <textarea
          className="form-control"
          id="newNotes"
          rows="3"
          name="newNotes"
          onChange={onChangeHandler}
          value={textAreaValue}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default NoteForm;