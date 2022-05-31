import { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + searchInput);
  };

  return (
    <Form onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input
          type="text"
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        />
      </div>
    </Form>
  );
}

const Form = styled.form`
  margin: 2rem auto;
  position: relative;
  input {
    display: block;
    margin: 0 auto;
    border: none;
    outline: none;
    padding: 0.8rem 4rem;
    width: 50%;
    background-color: burlywood;
    border-radius: 1rem;
    color: white;
    font-size: 1.2rem;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 25%;
    transform: translate(100%, -50%);
    color: white;
    font-size: 1.5rem;
  }
`;

export default Search;
