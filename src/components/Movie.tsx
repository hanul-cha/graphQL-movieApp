import React from "react";
import { Link } from "react-router-dom"

type MovieType = {
    id :Number
}

const Movie = ({ id }:MovieType) => {
    return (
        <>
            <div>
                <Link to={`/${id}`} >{id}</Link>
            </div>
        </>
    )
}

export default Movie