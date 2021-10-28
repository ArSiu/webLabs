import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { Image, LinkingWrapper} from './Header.styles';
import Home from '../../pages/Home/Home';
import Catalog from '../../pages/Catalog/Catalog';
import logo from '../../../assets/farm-barn-icon.png';



const Header = () =>{ 
    let a = [
        {
            id: 0,
            name: "Saint corn",
            location: "New Edem",
            amountOfLivestock: 2000,
            powerOfVents: 100,
            price: 1000,
        },
        {
            id: 1,
            name: "Devil potato",
            location: "New Edem",
            amountOfLivestock: 999,
            powerOfVents: 10000,
            price: 9000,
        },
        {
            id: 2,
            name: "Evil Creature",
            location: "New Edem",
            amountOfLivestock: 10000,
            powerOfVents: 10000,
            price: 7000,
        }
      ];
    return (
        <Router>
            <LinkingWrapper>
              <div id="header">
                <Image>
                  <img class="Logo" src={logo} alt="Logo" />
                </Image>
                <ul>
                  <li>
                    <NavLink exact to="/" activeClassName="selected">Home</NavLink>
                  </li>
                  <li>
                    <NavLink exact to="/catalog" activeClassName="selected">Catalog</NavLink>
                  </li>
                  <li>
                    <NavLink exact to="/cart" activeClassName="selected">Cart</NavLink>
                  </li>
                </ul>
                
                </div>
              <Switch>
                <Route exact path="/catalog" component={Catalog}>
                  <Catalog farms = {a} />
                </Route>
                <Route path="/cart" >
                  <div>Hello it is cart</div>
                </Route>
                <Route exact path="/" component={Home}>
                  <Home farms = {a}/>
                </Route>
              </Switch>

            </LinkingWrapper>
        </Router>
    );
}
export default Header;