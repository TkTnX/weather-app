import { useState } from "react";
import "./search.css";

const Search = ({
  setOpenSearch,
  setInputValue,
  inputValue,
}: {
  setOpenSearch: (b: boolean) => void;
  setInputValue: (s: string) => void;
  inputValue: string;
}) => {
  const [inpValue, setInpValue] = useState(inputValue);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inpValue !== "") {
      setOpenSearch(false);
      setInputValue(inpValue);
    }
  };

  return (
    <div className="search">
      <button className="search__close" onClick={() => setOpenSearch(false)}>
        <img src="/arrow-left.svg" alt="" />
      </button>
      <form className="search__form">
        <input
          value={inpValue}
          onChange={(e) => setInpValue(e.target.value)}
          type="text"
          placeholder="Search here"
        />

        <button onClick={handleSubmit} className="search__btn">
          <img width={24} height={24} src="/search.svg" alt="" />
        </button>
      </form>
    </div>
  );
};

export default Search;
