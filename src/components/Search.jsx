import React, { useState } from "react";
import { allData } from "../data/data";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter topics based on input (case-insensitive)
    if (query.length > 0) {
      const results = allData.filter((item) =>
        item.Topic.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
  };

  const handleSelect = (topic) => {
    navigate(`/article/${topic}`);
    setSearchQuery(""); // Clear search after selection
    setFilteredResults([]); // Hide dropdown
  };

  return (
    <div>
      <div className=" flex flex-col">
        <div className="border border-black bg-white flex items-center pr-2 rounded-3xl">
          <input
            className="text-black rounded-l-full p-2 md:p-3 md:w-[400px]"
            type="search"
            placeholder="Search topics..."
            value={searchQuery}
            onChange={handleSearch}
          />
          <img
            className="md:w-10 md:h-10 w-6 h-6 cursor-pointer"
            src="https://img.icons8.com/?size=100&id=59878&format=png&color=000000"
            alt="Search"
          />
        </div>
        <div>
          {filteredResults.length > 0 && (
            <ul className="absolute ml-1 border-Primary-black border-2 dark:bg-Primary-Green rounded-[10px] w-[14rem] md:w-[400px]">
              {filteredResults.map((item) => (
                <div className="flex flex-col items-center">
                    <li
                  key={item.Topic}
                  className="p-2 dark:hover:bg-white ml-0 mr-0 hover:text-white hover:bg-Secondary-black dark:hover:text-Primary-black rounded-[10px] cursor-pointer"
                  onClick={() => handleSelect(item.Topic)}
                >
                  {item.Topic.toUpperCase()}
                </li>
                <hr className="border dark: border-Secondary-black w-[90%]"/>
                </div>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
