import React from "react";
import SearchFormReset from "./SearchFormReset";
import Form from "next/form";
import { Search } from "lucide-react";
const SearchForm = ({query}:{query?:string}) => {

  return (
    <Form action={"/"} className="search-form" scroll={false}>
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search Ideas"
      />
      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <button type="submit" className="search-btn text-white">
          <Search className="size-5"/>
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;