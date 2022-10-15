import { FormEvent, useState } from "react";

const SearchForm = () => {
  const [searchString, setSearchString] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`You are looking for ${searchString}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your search query:
        <input
          type="text"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  );
};

export default SearchForm;
