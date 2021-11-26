import React from 'react';
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/client';

const GET_MOVIES = gql`
        {
            movies {
                id
                medium_cover_image
            }
        }
    `;

const Home = () => {
    const { loading, error, data } = useQuery(GET_MOVIES);
    console.log(loading, data);

    if(loading) {
        return "loading...";
    }
    if(data && data.movies) {
        return data.movies.map((m :any,i :string) => {
            return <h2 key={i}>{m.id}</h2>
        })
    }

}

export default Home