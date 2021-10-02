export let index = 4;


localStorage.setItem(index, JSON.stringify(index));


export let farms = [
    {
        id: 1,
        name: "Saint corn",
        location: "New Edem",
        amountOfLivestock: 2000,
        powerOfVents: 100,
    },
    {
        id: 2,
        name: "Devil potato",
        location: "New Edem",
        amountOfLivestock: 999,
        powerOfVents: 10000,
    },
    {
        id: 3,
        name: "Evil Creature",
        location: "New Edem",
        amountOfLivestock: 10000,
        powerOfVents: 10000,
    }
];
localStorage.setItem(farms, JSON.stringify(farms));