import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SongList from "./components/SongList";

function App() {
  const [data, setData] = useState([]);

  return (
    <>
      <SearchBar setSongList={setData} />
      <SongList list={data} />
    </>
  );
}

export default App;
