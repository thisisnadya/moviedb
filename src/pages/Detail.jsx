import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Detail() {
  let params = useParams();
  const [detail, setDetail] = useState({});
  useEffect(() => {
    getDetail(params.media_type, params.id);
  }, [params.id]);
  const getDetail = async (type, id) => {
    const api = await fetch(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    const data = await api.json();
    setDetail(data);
    console.log(data);
  };
  return (
    <Wrapper className="mt-5">
      <img
        src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`}
        alt=""
      />
      <div className="ms-5">
        {detail.title ? (
          <h1>{detail.title}</h1>
        ) : (
          <h1>{detail.original_title}</h1>
        )}
        <p>{detail.overview}</p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default Detail;
