import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";

const Home = (props) => {
    return (
        <div>
          <Hero />
          <About farms = {props.farms}/>
        </div>
    );
};

export default Home;