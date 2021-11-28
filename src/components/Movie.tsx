import React from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";

type MovieType = {
    id :Number
    medium_cover_image? :String
    bg? :String
}

type PostType = {
    myBg :any
}

const Container = styled.div`
  height: 400px;
  border-radius: 7px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: transparent;
`;

const Poster = styled.div<PostType>`
  background-image: url(${(props) => (props.myBg)});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
  border-radius: 7px;
`;

const Movie = ({ id, medium_cover_image, bg }:MovieType) => {
    return (
        <>
            <Container>
            <Link to={`/${id}`} >
                <Poster myBg={bg} />
            </Link>
            </Container>
        </>
    )
}

export default Movie