import { useState } from "react";
import styled from "styled-components";

function Search() {
  const [searchInput, getSearchInput] = useState("");

  const getInput = (e) => {
    console.log(e.target.value);
  };

  return (
    <Form
      onSubmit={(e) => {
        return e.preventDefault();
      }}
    >
      <input type="text" onChange={getInput} />
    </Form>
  );
}

const Form = styled.form`
  margin: 2rem 20rem;
  input {
    border: none;
    outline: none;
    padding: 1rem 2rem;
    width: 100%;
    background-color: burlywood;
    border-radius: 1rem;
    font-size: 1.2rem;
  }
`;

export default Search;
