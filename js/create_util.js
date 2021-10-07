let index = JSON.parse(localStorage.getItem('index'));

const nameInput = document.getElementById("name");
const locationInput = document.getElementById("location");
const amountOfLivestock = document.getElementById("amout_of_livestock");
const powerOfVents = document.getElementById("power_of_vents");


export const getInputValues = () => {
    return {
        id: index,
        name: nameInput.value,
        location: locationInput.value,
        amountOfLivestock: amountOfLivestock.value,
        powerOfVents: powerOfVents.value,
    };
};

export const getInputValuesEdit = () => {
    return {
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
