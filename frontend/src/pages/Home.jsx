import { useEffect, useState } from "react";
import Entry from "../components/Entry";

function Home() {
  useEffect(() => {
    getData();
  }, []);

  const [entries, setEntries] = useState([]);

  const getData = async () => {
    const res = await fetch("http://localhost:3000/api/journal-entries");
    const finalRes = await res.json();
    setEntries(finalRes);
  };

  return (
    <div>
      {entries.map((entry) => {
        return (
          <Entry title={entry.title} content={entry.content} id={entry._id} />
        );
      })}
    </div>
  );
}

export default Home;
