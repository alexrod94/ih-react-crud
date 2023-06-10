import { Link, useNavigate } from "react-router-dom";

function Entry({ title, content, id }) {
  const navigate = useNavigate();

  const deleteEntry = async () => {
    await fetch(`http://localhost:3000/api/journal-entries/${id}`, {
      method: "DELETE",
    });
    navigate(0);
  };

  return (
    <div className="card bg-white shadow-xl my-5">
      <div className="card-body flex justify-between">
        <Link to={`/entry/${id}`}>
          <h2 className="card-title text-black">{title}</h2>
        </Link>
        <p className="text-black">{content}</p>
        <button className="btn btn-danger" onClick={deleteEntry}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Entry;
