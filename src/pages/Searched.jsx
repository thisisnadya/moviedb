import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Searched() {
  const params = useParams();
  const [searched, setSearched] = useState([]);

  useEffect(() => {
    getSearchedList(params.search);
  }, [params.search]);

  const getSearchedList = async (title) => {
    const api = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${title}`
    );
    const data = await api.json();
    console.log(data.results);
  };

  return <div>Searched</div>;
}

export default Searched;
