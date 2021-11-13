import React from "react";
import { useParams } from 'react-router-dom'
import Hero from "./Hero/Hero";

const Details = () => {
    const params = useParams();
    return (
        <Hero id = {params.id}/>
    );
    
};

export default Details;