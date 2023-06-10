import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleEntry() {
  useEffect(() => {
    getData();
  }, []);

  const [entry, setEntry] = useState(null);
  const [editing, setEditing] = useState(false);

  const { id } = useParams();
  const getData = async () => {
    const res = await fetch(`http://localhost:3000/api/journal-entries/${id}`);
    const finalRes = await res.json();
    setEntry(finalRes);
    setTitle(finalRes.title);
    setContent(finalRes.content);
  };

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleEditClick = () => {
    if (editing) {
      updateEntry();
    } else {
      setEditing(true);
    }
  };

  const updateEntry = async () => {
    const res = await fetch(`http://localhost:3000/api/journal-entries/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });
    const finalRes = await res.json();
    setEditing(false);
  };

  if (!entry) return <h2>Loading...</h2>;

  return (
    <div className="card bg-white shadow-xl my-5">
      <div className="card-body">
        {editing ? (
          <input type="text" value={title} onChange={handleTitleChange} />
        ) : (
          <h2 className="card-title text-black">{title}</h2>
        )}
        <p className="text-black">{entry.content}</p>
        <button className="btn btn-primary" onClick={handleEditClick}>
          {editing ? "Save new data" : "Edit entry"}
        </button>
      </div>
    </div>
  );
}

export default SingleEntry;
