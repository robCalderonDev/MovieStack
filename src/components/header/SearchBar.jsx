import React from "react";
import { CiSearch } from "react-icons/ci";

export const SearchBar = () => {
  return (
    <form className="mx-auto h-11  ">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only h-10"
      >
        Search
      </label>
      <div className="relative h-10 mt-2">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <CiSearch />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-80 h-10 p-4 ps-10 text-sm outline-none   border-gray-300 rounded-lg bg-gray-50 dark:bg-slate-100 dark:border-gray-300 dark:placeholder-gray-400 text-slate-600"
          placeholder="Películas, Series, etc"
          required
        />

        <button
          type="submit"
          className="text-white w-20 h-10  absolute end-0 top-0 bg-blue-700   font-medium rounded-r-lg text-xs   hover:bg-blue-600"
        >
          Buscar
        </button>
      </div>
    </form>
  );
};
