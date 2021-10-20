import React from "react";
import './About.css'
import FarmImage from '../../../assets/farm.png'

const About = () => (
<div className="containerAbout">
    <div className="liItem">
        <img className="item__photo" src={FarmImage} alt="farm"/>
        <div className="item">
            <h3 className="item__name">Name: Saint corn</h3>
            <h5 className="item__location">Location: New Edem</h5>
            <h5 className="item__amoutOfLivestock">Amout Of Livestock: 2000</h5>
            <h5 className="item__powerOfVents">Power Of Vents: 100</h5>
        </div>
      </div>
      <div className="liItem">
        <img className="item__photo" src={FarmImage} alt="farm"/>
        <div className="item">
            <h3 className="item__name">Name: Devil potato</h3>
            <h5 className="item__location">Location: New Edem</h5>
            <h5 className="item__amoutOfLivestock">Amout Of Livestock: 999</h5>
            <h5 className="item__powerOfVents">Power Of Vents: 200</h5>
        </div>
      </div>
      <div className="liItem">
        <img className="item__photo" src={FarmImage}  alt="farm"/>
        <div className="item">
            <h3 className="item__name">Name: Evil Creature</h3>
            <h5 className="item__location">Location: New Edem</h5>
            <h5 className="item__amoutOfLivestock">Amout Of Livestock: 10000</h5>
            <h5 className="item__powerOfVents">Power Of Vents: 60000</h5>
        </div>
      </div>
</div>
);

export default About;