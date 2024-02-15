import React from "react";
import { FaSearch as SearchIcon } from "react-icons/fa";
import { StyledSearch } from "./Search.styled";

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Search = ({ search, setSearch }: Props) => {
  return (
    <StyledSearch>
      <SearchIcon />
      <h2>SEARCH</h2>
      <input
        type="text"
        placeholder="Enter fund name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </StyledSearch>
  );
};

export default Search;
