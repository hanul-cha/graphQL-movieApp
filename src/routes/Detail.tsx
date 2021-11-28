import React from 'react';
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/client';
import styled from 'styled-components';

const Detail = () => {

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



    const { id }  = useParams()
    const { loading, data } = useQuery(GET_MOVIE, {
        variables: {
            id: Number(id)
        }
    })

    

    console.log(loading, data, id)


    return (
        <div>
        {loading && "Loading"}
        {!loading && data.movie && data.movie.title}
        </div>
    )
}

export default Detail