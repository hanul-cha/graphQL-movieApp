import React from 'react';
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/client';
import styled from 'styled-components';

const Detail = () => {

    type PostType = {
        myBg :any
    }

    //날려줄 쿼리 넘겨줄 인자는 !를 넣어서 꼭필요한 인자로 지정해주자!
    const GET_MOVIE = gql`
        query getMovie($id :Int!){
            movie(id: $id){
                rating,
                language,
                title,
                medium_cover_image,
                description_intro
            }
        }
    `;

    const Container = styled.div`
      height: 100vh;
      background-image: linear-gradient(-45deg, #d754ab, #fd723a);
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: white;
    `;

    const Column = styled.div`
      margin-left: 10px;
      width: 50%;
    `;

    const Title = styled.h1`
      font-size: 65px;
      margin-bottom: 15px;
    `;

    const Subtitle = styled.h4`
      font-size: 35px;
      margin-bottom: 10px;
    `;

    const Description = styled.p`
      font-size: 28px;
    `;
    
    const Poster = styled.div<PostType>`
      width: 25%;
      height: 60%;
      background-color: transparent;
      background-image: url(${props => props.myBg});
      background-size: cover;
      background-position: center center;
    `;


    const { id }  = useParams()
    const { loading, data } = useQuery(GET_MOVIE, {
        variables: {
            id: Number(id)
        }
    })
    console.log(loading, data, id)

    return (
        <Container>
           <Column>
            <Title>{loading ? "Loading..." : data.movie.title}</Title>
                <Subtitle>
                    {data?.movie?.language} ㆍ {data?.movie?.rating}
                </Subtitle>
                <Description>{data?.movie?.description_intro}</Description>
           </Column> 
           <Poster myBg={data?.movie?.medium_cover_image}></Poster>
        </Container>
    )
}

export default Detail