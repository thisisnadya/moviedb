import { MdMovie } from "react-icons/md";
import { FaTv } from "react-icons/fa";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <List>
      <SLink to={"/category/movie"}>
        <MdMovie />
        <h4>Movies</h4>
      </SLink>
      <SLink to={"/category/tv"}>
        <FaTv />
        <h4>Tv Shows</h4>
      </SLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
  border-radius: 50%;
  text-decoration: none;
  background: grey;
  width: 6rem;
  height: 6rem;
  cursor: pointer;

  h4 {
    color: white;
    font-size: 1rem;
  }

  svg {
    color: white;
    font-size: 2rem;
  }
  &.active {
    background-color: brown;
  }
`;

export default Category;
