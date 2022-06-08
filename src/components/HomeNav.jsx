import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiPopcorn } from "react-icons/gi";

function HomeNav() {
  return (
    <Nav>
      <Link to={"/"}>
        <h3>showtime</h3>
      </Link>
      <GiPopcorn />
    </Nav>
  );
}

const Nav = styled.div`
  width: 100%;
  margin: 0 auto;
  /* text-align: center; */
  display: flex;
  /* justify-content: center; */
  align-items: center;
  a {
    color: white;
    text-decoration: none;
  }
  svg {
    font-size: 2rem;
    color: white;
  }
`;

export default HomeNav;
