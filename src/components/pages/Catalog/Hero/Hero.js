import React, {useState} from "react";
import { HeroContainer,Select,Search} from './Hero.styles';

const Hero = () => (
	<HeroContainer>
		<Select>
			<FilterItem text="Filter: ">
				<DropdownMenu />
			</FilterItem>
		</Select>
		<Search>
            <SearchInput />
    	</Search>
	</HeroContainer>
);

function FilterItem(props) {
	const [open, setOpen] = useState(false);
	return(
		<li className="filter-item">
			<a href="#" className="filter-item__button" onClick={() => setOpen(!open)}>
				{props.text}
			</a>
			{open && props.children}
		</li>
	);
}

function DropdownMenu() {
	function DropdownItem(props) {
		return(
			<a href="#" className="menu-item">
				{props.children}
			</a>
		);
	}
	return (
		<div className="dropdown">
			<DropdownItem>Sort by Amount of Live Stocks</DropdownItem>
			<DropdownItem>Sort by Price</DropdownItem>
		</div>
	);
}

function SearchInput(){
	return(
		<div className="header__right">
			<form>
	            <input id="search__input" class="header__search__input" type="text" placeholder="Type something..."></input>
	        </form>
	        <button id="search__button" class="header__search" type="button">Search</button>
	        <button id="clear__button" class="header__clear" type="button">Clear</button>
		</div>
	);
}
export default Hero;