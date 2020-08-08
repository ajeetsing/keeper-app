import React, { useState } from "react";

function CreateArea(props) {
  const [notes, setNotes] = useState({
    title: "",
    content: ""
  })
  function handleChange(event) {
    const { name, value } = event.target;
    setNotes(prevNote => { return { ...prevNote, [name]: value } })
  }
  function submitNotes(event) {
    props.onAdd(notes);
    setNotes({
      title: "",
      content: ""
    })
    event.preventDefault();

  }
  return (
    <div>
      <form>
        <input name="title" onChange={handleChange} value={notes.title} placeholder="Title" />
        <textarea name="content" onChange={handleChange} value={notes.content} placeholder="Take a note..." rows="3" />
        <button onClick={submitNotes}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
