import "./index.css";
import axios from "axios";
import { useRef } from "react";
import { useSearchTextStore } from "../../stores/useSearchTextStore";

function SearchBar() {
  const inputRef = useRef(); // 렌더링이 일어나지 않다가 버튼을 누르는 순간 리렌더링
  const { setSearchText } = useSearchTextStore();
  // const handleSearch = () => {
  //   axios
  //     .get(`https://api.manana.kr/karaoke/song/${inputRef.current.value}.json`)
  //     .then((res) => {
  //       // console.log(res.data);
  //       props.setSongList(res.data);
  //     });
  // };

  // const enterKeyPress = (event) => {
  //   if (event.key === "Enter") {
  //     handleSearch();
  //   }
  // };

  return (
    <div className="SearchBar">
      <input
        type="text"
        className="SearchBar__input"
        ref={inputRef}
        // onKeyDown={enterKeyPress}
      />
      <button
        className="SearchBar__button"
        onClick={() => {
          setSearchText(inputRef.current.value);
        }}
      >
        검색
      </button>
    </div>
  );
}

export default SearchBar;
