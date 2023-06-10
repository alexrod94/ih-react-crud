import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateEntry() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const saveNewEntry = async () => {
    const res = await fetch("http://localhost:3000/api/journal-entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });
    const finalRes = await res.json();
    console.log(finalRes);
    navigate("/");
  };

  return (
    <div className="card bg-white shadow-xl my-5">
      <h2 className="card-title">New Entry</h2>
      <div className="card-body">
        <input value={title} type="text" onChange={handleTitleChange}></input>
        <textarea
          cols="30"
          rows="10"
          value={content}
          onChange={handleContentChange}
        ></textarea>
        <button className="btn btn-primary" onClick={saveNewEntry}>
          Save info
        </button>
      </div>
    </div>
  );
}

export default CreateEntry;
