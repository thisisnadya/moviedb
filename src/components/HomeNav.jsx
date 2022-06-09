import styled from "styled-components";
import { Link } from "react-router-dom";

function HomeNav() {
  return (
    <Nav>
      <Link to={"/"}>
        <h3>showtime</h3>
      </Link>
    </Nav>
  );
}

const Nav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
  }
`;

export default HomeNav;
