// index.jsx는 이 폴더의 default 파일인 셈
import "./index.css";
import Song from "../Song";
import { useQuery } from "@tanstack/react-query";
import { useSearchTextStore } from "../../stores/useSearchTextStore";

function SongList() {
  const { searchText } = useSearchTextStore();

  const { data, isLoading } = useQuery({
    queryKey: ["getSong", searchText],
    queryFn: () => {
      return fetch(
        searchText
          ? `https://api.manana.kr/karaoke/song/${searchText}.json`
          : "https://api.manana.kr/karaoke.json"
      ).then((res) => {
        return res.json();
      });
    },
  });

  if (isLoading) {
    return "Loading...";
  }

  if (!data) {
    return "No data";
  }

  return (
    <div className="SongList">
      {data.map((song) => (
        <Song key={song.brand + song.no} {...song} /> // object로 넘겼던 모든 것을 props로 받아오게 됨. 스프레드 형태
      ))}
    </div>
  );
}

export default SongList;
