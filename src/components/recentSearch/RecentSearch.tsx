import "./recentSearch.css";

const RecentSearch = ({
  setInputValue,
  list,
  setOpenSearch,
}: {
  setInputValue: (s: string) => void;
  list: string[];
  setOpenSearch: (b: boolean) => void;
}) => {
  const handleClick = (el: string) => {
    setOpenSearch(false);
    setInputValue(el);
  };

  return (
    <div className="recentSearch">
      <h6>Recent search</h6>
      <div className="recentSearch__list scrollbar">
        {list.map((el, index) => (
          <button
            className="recentSearch__list-item"
            type="button"
            onClick={() => handleClick(el)}
            key={index}
          >
            <img src="/clock.svg" alt="clock" />
            {el}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecentSearch;
