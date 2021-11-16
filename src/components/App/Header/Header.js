import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { Image, LinkingWrapper} from './Header.styles';
import Home from '../../pages/Home/Home';
import Catalog from '../../pages/Catalog/Catalog';
import Details from '../../pages/Details/Details';
import Cart from '../../pages/Cart/Cart'
import logo from '../../../assets/farm-barn-icon.png';

const Header = () =>{  
    return (
        <Router>
            <LinkingWrapper>
              <div id="header">
                <Image>
                  <img src={logo} className="Logo" alt="Logo" />
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
                <Route exact path="/" component={Home}>
                  <Home />
                </Route>
                <Route exact path="/catalog" component={Catalog}>
                  <Catalog />
                </Route>
                <Route exact path={"/details/:id"} component={Details}/>
                <Route exact path="/cart" component={Cart} >
                  <Cart />
                </Route>
                
              </Switch>

            </LinkingWrapper>
        </Router>
    );
}
export default Header;