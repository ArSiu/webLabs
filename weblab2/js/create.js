import {getInputValues, clearInput} from "./create_util.js";
import {farms,index} from "./values.js";

const submitButton = document.getElementById("button__submit");

submitButton.addEventListener("click", event => {
    event.preventDefault();
    const {id, name, location, amountOfLivestock, powerOfVents} = getInputValues();
    addItem({id, name, location, amountOfLivestock, powerOfVents});
    clearInput();
})

const addItem = ({id, name, location, amountOfLivestock, powerOfVents}) => {
    const newFarm = {
        id,
        name,
        location,
        amountOfLivestock,
        powerOfVents,
    };
    farms.push(newFarm);
    console.log(farms);
}
