import {index} from "./values.js";

let index1 = index;

const nameInput = document.getElementById("name");
const locationInput = document.getElementById("location");
const amountOfLivestock = document.getElementById("amout_of_livestock");
const powerOfVents = document.getElementById("power_of_vents");


export const getInputValues = () => {
    return {
        id: index1++,
        name: nameInput.value,
        location: locationInput.value,
        amountOfLivestock: amountOfLivestock.value,
        powerOfVents: powerOfVents.value,
    };
};

export const clearInput = () => {
    nameInput.value = "";
    locationInput.value = "";
    amountOfLivestock.value = "";
    powerOfVents.value = "";
};