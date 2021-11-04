import React from "react";
import Hero from "./Hero/Hero";
// import About from "./About/About";
import {farmRender} from "./Hero/Hero";

const Catalog = (props) => {
    return (
        <div>
          <Hero farms = {props.farms}/>
        </div>
    );
};

export default Catalog;