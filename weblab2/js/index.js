import {renderFarms, calcAmountOfLivestock} from "./index_util.js";
import {farms,index} from "./values.js";

const searchButton = document.getElementById("search__button");
const clearButton = document.getElementById("clear__button");
const countButton = document.getElementById("count__button");
const switchButton = document.getElementById("switch");
const searchInput = document.getElementById("search__input");
const countVal = document.getElementById("count__value");

searchButton.addEventListener("click", () => {
    const searchFarm = farms.filter(farm => farm.name.search(searchInput.value) !== -1);
    renderFarms(searchFarm);
})

clearButton.addEventListener("click", () => {
    searchInput.value = "";
    renderFarms(farms);
})

switchButton.addEventListener("change", () => {
    let sortedFarms = Array.from(farms);
    if (switchButton.checked) {
        sortedFarms.sort((farm1, farm2) => farm1.amountOfLivestock - farm2.amountOfLivestock);
    }
    renderFarms(sortedFarms);
});

countButton.addEventListener("click", () => {
    countVal.innerHTML = calcAmountOfLivestock(farms);
});

window.removeFarm = (id) => {
    const farmToDel = farms.map(farms => farms.id);
    farms.splice(farmToDel.indexOf(id), 1);
    renderFarms(farms);
}

renderFarms(farms);
console.log(farms);