import "./App.css";
import SongList from "./components/SongList";

const data = [
  {
    brand: "dam",
    no: "2877-26",
    title: "僕は僕であって",
    singer: "angela×fripSide",
    composer: "",
    lyricist: "",
    release: "2016-10-01",
  },
  {
    brand: "joysound",
    no: "688350",
    title: "僕は僕であって",
    singer: "angela×fripSide",
    composer: "",
    lyricist: "",
    release: "2016-10-19",
  },
  {
    brand: "uga",
    no: "6244-13",
    title: "僕は僕であって",
    singer: "angela×fripSide",
    composer: "",
    lyricist: "",
    release: "2016-10-19",
  },
];

function App() {
  return (
    <>
      <SongList data={data} />
    </>
  );
}

export default App;
