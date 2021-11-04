import React, {useState} from "react";
import { HeroContainer,Select,Search,Wrapper,AboutContainer} from './Hero.styles';
import About from '../About/About';
import {farms} from '../../../util/Farms';
import FarmTemplate from '../../../farmTemplate/FarmTemplate.js';

const Hero = () => {
	let[farmRender, setFarmRender] = useState(farms);

	return (
		<Wrapper>
			<HeroContainer>
				<Select>
					<FilterItem text="Filter: ">
						<DropdownMenu />
					</FilterItem>
				</Select>
				<Search>
		            <Input />
		            <ClearButton />
		            <SearchButton />
		    	</Search>
		    	
			</HeroContainer>
			<AboutContainer>
				<About farms={farmRender}/>
			</AboutContainer>
		</Wrapper>
	);


	function Input() {
		return (
			<input id="input" className="header__search__input" type="text" placeholder="Type something..."></input>
		);
	}

	function ClearButton() {
		return (
			<button id="clear__button" className="header__clear" type="button" onClick={()=>handleReset()}>Clear</button>
		);
	}

	function SearchButton() {
		return (
			<button id="search__button" className="header__search" type="button" onClick={()=>SearchImpl()}>Search</button>
		);
	}

	function handleReset() {
		setFarmRender(farms);
	  	Array.from(document.querySelectorAll("input")).forEach(
	    	input => (input.value = "")
	  	);
	  
	};

	function SearchImpl(){	
		const title = document.getElementById('input').value
		let temp = farms.filter(farm => farm.name.search(title) !== -1);
		setFarmRender(temp);
	}

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
		return (
			<div className="dropdown">
				<div className="menu-item">
					<button className="button_filter" onClick={()=>filterByAmountOfLivestock()}>Sort by Amount of Live Stocks</button>
					<button className="button_filter" onClick={()=>filterByPrice()}>Sort by Price</button>
				</div>
			</div>
		);
	}

	function filterByAmountOfLivestock(){
		let sortedFarms = Array.from(farms);
	    sortedFarms.sort((farm1, farm2) => farm2.amountOfLivestock - farm1.amountOfLivestock);
	    setFarmRender(sortedFarms);
	}

	function filterByPrice(){
		let sortedFarms = Array.from(farms);
	    sortedFarms.sort((farm1, farm2) => farm2.price - farm1.price);
	    setFarmRender(sortedFarms);
	}

	
}






export default Hero;