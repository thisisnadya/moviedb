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
        className="img-fluid"
        src={`https://image.tmdb.org/t/p/w342${detail.poster_path}`}
        alt=""
      />
      <div className="detail">
        {detail.title ? (
          <h2>{detail.title}</h2>
        ) : (
          <h2>{detail.original_title}</h2>
        )}
        {detail.name ? <h2>{detail.name}</h2> : <h2>{detail.original_name}</h2>}
        <h4 className="rate">{detail.vote_average}</h4>
        {detail.genres?.map((genre) => (
          <span key={genre.id}>{genre.name}</span>
        ))}
        <p className="mt-4">{detail.overview}</p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  img {
    border-radius: 1rem;
  }

  .detail {
    margin-left: 3rem;
    h2 {
      color: white;
      font-size: 4rem;
    }

    h3 {
      font-family: sans-serif;
    }

    h4 {
      color: #b4afaf;
    }
    p {
      font-size: 1.3rem;
      color: #eeeeee;
      display: inline-block;
    }
    span {
      color: white;
      font-size: 1.2rem;
      display: inline-block;
      border: 1px solid white;
      border-radius: 3rem;
      padding: 0.5rem 1rem;
      margin: 0.7rem 1rem 0.7rem 0rem;
    }
  }

  @media (max-width: 850px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    img {
      max-height: initial;
    }
    .detail {
      margin: 1rem 0rem;
      text-align: center;
      h1 {
        font-size: 3rem;
      }
    }
  }
`;

export default Detail;
