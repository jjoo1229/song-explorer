import "./App.css";
import SongList from "./components/SongList";

const data = [
  {
    brand: "kumyoung",
    no: "53327",
    title: "널 제외한 나의 뇌 (Get The Hell Out)",
    singer: "DAY6            ",
    composer: "원필,성진,홍지상",
    lyricist: "Young K         ",
  },
  {
    brand: "kumyoung",
    no: "83929",
    title: "Wonderful",
    singer: "빅뱅",
    composer: "G-DRAGON,테디,..",
    lyricist: "G-DRAGON",
    release: "2008-11-18",
  },
  {
    brand: "uga",
    no: "6244-13",
    title: "僕は僕であって",
    singer: "angela×fripSide",
    release: "2016-10-19",
  },
];

function App() {
  return (
    <>
      <SongList list={data} />
    </>
  );
}

export default App;
