import styled from "styled-components";
function Footer() {
  return (
    <SFooter>
      <div className="brand">
        <h3>showtime</h3>
      </div>
    </SFooter>
  );
}

const SFooter = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export default Footer;
