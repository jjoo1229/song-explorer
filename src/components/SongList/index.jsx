// index.jsx는 이 폴더의 default 파일인 셈
import "./index.css";
import Song from "../Song";

function SongList({ list }) {
  return (
    <div className="SongList">
      {list.map((song) => (
        <Song key={song.no} {...song} /> // object로 넘겼던 모든 것을 props로 받아오게 됨. 스프레드 형태
      ))}
    </div>
  );
}

export default SongList;
