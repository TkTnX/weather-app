import { useState } from "react";
import "./search.css";
import {
  AddressSuggestions,
  DaDataAddress,
  DaDataSuggestion,
} from "react-dadata";
const Search = ({
  setOpenSearch,
  setInputValue,
  inputValue,
}: {
  setOpenSearch: (b: boolean) => void;
  setInputValue: (s: string) => void;
  inputValue: string;
}) => {
  const [inpValue, setInpValue] = useState({
    value: inputValue,
  });
  const [realtimeValue, setRealtimeValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inpValue.value !== "") {
      setOpenSearch(false);
      setInputValue(
        inpValue.value !== inputValue ? inpValue.value : realtimeValue
      );
    }
  };

  const handleChange = (
    suggestion: DaDataSuggestion<DaDataAddress> | undefined
  ) => {
    if (suggestion) {
      setInpValue({ value: String(suggestion.data.city) });
    }
  };

  return (
    <div className="search">
      <button className="search__close" onClick={() => setOpenSearch(false)}>
        <img src="/arrow-left.svg" alt="" />
      </button>
      <form className="search__form">
        <AddressSuggestions
          token={import.meta.env.VITE_DADATA_API_KEY}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          value={inpValue.value}
          onChange={handleChange}
          filterFromBound="city"
          filterToBound="city"
          inputProps={{
            placeholder: "Search here",
            style: {
              width: "100%",
            },
            value: realtimeValue,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
              setRealtimeValue(e.target.value),
          }}
        />

        <button onClick={handleSubmit} className="search__btn">
          <img width={24} height={24} src="/search.svg" alt="" />
        </button>
      </form>
    </div>
  );
};

export default Search;
