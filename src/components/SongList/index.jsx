// index.jsx는 이 폴더의 default 파일인 셈
import Song from "../Song";

function SongList({ data }) {
  return (
    <div>
      {data.map((song) => {
        return <Song {...song} />; // object로 넘겼던 모든 것을 props로 받아오게 됨. 스프레드 형태
      })}
    </div>
  );
}

export default SongList;
