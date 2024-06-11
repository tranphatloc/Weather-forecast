import { Search } from "lucide-react";
import React from "react";

function SearchInput() {
  return (
    <div className="relative">
      <input
        className="w-[300px] rounded-md py-2 px-3 pr-8 outline-none text-sm"
        placeholder="Region"
      />
      <span className="absolute inset-y-0 right-3 flex items-center">
        <Search className="w-4 h-4 text-blue-500 " />
      </span>
    </div>
  );
}

export default SearchInput;
