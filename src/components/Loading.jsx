import styled from "styled-components";

function Loading() {
  return (
    <Load>
      <div className="balls">
        <div className="ball ball1"></div>
        <div className="ball ball2"></div>
        <div className="ball ball3"></div>
      </div>
      <div className="text">Loading...</div>
    </Load>
  );
}

const Load = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .balls {
    display: flex;
  }
  .ball {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: white;
    margin-right: 10px;
    animation: ball 0.5s infinite alternate;
  }
  .ball2 {
    animation-delay: 0.1s;
  }
  .ball3 {
    animation-delay: 0.1s;
  }
  .text {
    margin: 1rem 0rem;
    font-size: 2rem;
    letter-spacing: 1px;
    color: white;
  }

  @keyframes ball {
    to {
      transform: translateY(-10px);
    }
  }
`;

export default Loading;
