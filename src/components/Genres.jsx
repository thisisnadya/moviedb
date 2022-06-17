import styled from "styled-components";
import { NavLink, useParams } from "react-router-dom";

function Genres() {
  let params = useParams();
  console.log(params.type);
  const genres = [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
  ];

  return (
    <SGenres>
      {genres.map((genre) => (
        <NavLink to={`/category/${params.type}/genres/${genre.id}`}>
          <SGenre key={genre.id}>{genre.name}</SGenre>
        </NavLink>
      ))}
    </SGenres>
  );
}

const SGenres = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
`;
const SGenre = styled.p`
  display: inline-block;
  color: white;
  font-size: 1rem;
  margin-right: 1rem;
  border: 1px solid #774360;
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
  &:hover {
    background-color: #774360;
  }
  &:active {
    background-color: #774360;
  }
`;

export default Genres;
