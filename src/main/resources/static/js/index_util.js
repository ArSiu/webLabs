import {farms} from "./index.js";
const itemContainer = document.getElementById("items");

export const renderFarms = (farmsToShow) => {
    itemContainer.innerHTML = "";
    for (const farm of farmsToShow) {
        showItem(farm);
    }
};

export const showItem = ({id, name, location, amountOfLivestock, powerOfVents}) => {
    itemContainer.insertAdjacentHTML("afterbegin",
        itemTemplate({id, name, location, amountOfLivestock, powerOfVents})
    );
}

export const itemTemplate = ({id, name, location, amountOfLivestock, powerOfVents}) => `
<li>
    <img class="item__photo" src="img/farm.png" alt="farm">
    <div class="item">
        <h3 class="item__name">Name: ${name}</h3>
        <h5 class="item__location">Location: ${location}</h5>
        <h5 class="item__amoutOfLivestock">Amout Of Livestock: ${amountOfLivestock}</h5>
        <h5 class="item__powerOfVents">Power Of Vents: ${powerOfVents}</h5>
        <button class="button__remove" onClick='editFarm(${id})'>Edit</button>
        <button class="button__remove" onClick='removeFarm(${id})'>Remove</button>
    </div>
</li>
`;

export const calcAmountOfLivestock = (arr) => {
    const generalAmountOfLivestock = arr.map(farm => farm.amountOfLivestock);
    return generalAmountOfLivestock.reduce((sum, current) => +sum + +current);
}
