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
    setSearchInput("");
  };

  return (
    <Form onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input
          type="text"
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          placeholder="Search"
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
    padding: 0.5rem 3rem;
    width: 100%;
    border: 2px solid #bc6ff1;
    background: transparent;
    border-radius: 2rem;
    color: white;
    font-size: 1.2rem;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
    font-size: 1.2rem;
  }
`;

export default Search;
