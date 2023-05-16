const NORTH = {
    id: "north",
    name: "Champion of the North",
    description: "+2 WILD Advantages in mountains",
}

const SOUTH = {
    id: "south",
    name: "Champion of the South",
    description: "+2 WILD Advantages in desert",
}

const EAST = {
    id: "east",
    name: "Champion of the East",
    description: "+2 WILD Advantages in hills",
}

const WEST = {
    id: "west",
    name: "Champion of the West",
    description: "+2 WILD Advantages in forest",
}

REGIONS = [ NORTH, SOUTH, EAST, WEST]

function guardianSelector() {
    const selector = document.getElementById('guardian-selector');

    REGIONS.map( (region, i) => {
        let opt = document.createElement("option");
        opt.value = region.id;
        opt.innerHTML = region.name;
        selector.append(opt);
    });
}

function selectedRegion(value) {
    const region = REGIONS.find(element => element.id === value);

    localStorage.setItem("region", JSON.stringify(region))

    window.location.reload();
}