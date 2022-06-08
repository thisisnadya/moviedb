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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .balls {
    display: flex;
  }
  .ball {
    width: 10px;
    height: 10px;
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
    color: white;
  }

  @keyframes ball {
    to {
      transform: translateY(-10px);
    }
  }
`;

export default Loading;
