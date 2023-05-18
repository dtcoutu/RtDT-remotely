const CHARACTER_STORAGE = "character";
const REGION_STORAGE = "region";
const COUNTERS_STORAGE = "counters";

function reset() {
    localStorage.setItem(CHARACTER_STORAGE, null);
    localStorage.setItem(REGION_STORAGE, null);
    localStorage.setItem(COUNTERS_STORAGE, null);

    hideSections();

    window.location.reload();
}

function pageUpdate() {
    const character = JSON.parse(localStorage.getItem(CHARACTER_STORAGE));
    const region = JSON.parse(localStorage.getItem(REGION_STORAGE));
    let counters = JSON.parse(localStorage.getItem(COUNTERS_STORAGE));

    if (character !== null) {
        const characterSelector = document.getElementById("character-selector");
        characterSelector.value = character.id; // This is the index in the array
    }

    if (region !== null) {
        const regionSelector = document.getElementById("guardian-selector");
        regionSelector.value = region.id;
    }

    if (counters === null) {
        counters = {
            warriors: 7,
            spirit: 1,
        }

        localStorage.setItem(COUNTERS_STORAGE, JSON.stringify(counters));
    }

    if ((character !== null) && (region !== null)) {
        revealSections();
        showCounters(counters);
        showCharacterDetails(character);
        showRegionDetails(region);
    }
}

function revealSections() {
    document.getElementById("counters").classList.remove("hidden");
    document.getElementById("actions").classList.remove("hidden");
    document.getElementById("virtues").classList.remove("hidden");
}

function hideSections() {
    document.getElementById("counters").classList.add("hidden");
    document.getElementById("actions").classList.add("hidden");
    document.getElementById("virtues").classList.add("hidden");
}

function showCounters(counters) {
    document.getElementById("warrior-counter").innerHTML = counters.warriors;
    document.getElementById("spirit-counter").innerHTML = counters.spirit;
}

function showCharacterDetails(character) {
    document.getElementById("banner-description").innerHTML = character.banner.description;

    document.getElementById("movement").innerHTML = character.move;

    // populate virtues
    character.virtues.map((virtue) => {
        const virtueElement = document.getElementById(virtue.id);

        let nameDiv = document.createElement("div");
        nameDiv.classList.add("name");
        nameDiv.innerHTML = virtue.name;
        virtueElement.append(nameDiv);

        let descriptionDiv = document.createElement("div");
        descriptionDiv.classList.add("description");
        descriptionDiv.innerHTML = virtue.description
        virtueElement.append(descriptionDiv);

        if (virtue.permanent || virtue.active) {
            virtueElement.classList.remove("inactive");

            if (!virtue.permanent) {
                const buyButton = document.getElementById("buy-" + virtue.id);
                if (buyButton !== null) {
                    buyButton.remove();
                }

                let unbuyButton = document.getElementById("unbuy-" + virtue.id);
                if (unbuyButton === null) {
                    unbuyButton = document.createElement("button");
                    unbuyButton.id = "unbuy-" + virtue.id;
                    unbuyButton.value = virtue.id;
                    unbuyButton.onclick = unbuyVirtue;
                    unbuyButton.appendChild(document.createTextNode("Un-Buy"));
                    virtueElement.appendChild(unbuyButton);
                }
            }
        } else if (!virtue.permanent) {
            virtueElement.classList.add("inactive");

            let buyButton = document.createElement("button");
            buyButton.id = "buy-" + virtue.id;
            buyButton.value = virtue.id;
            buyButton.onclick = buyVirtue;
            buyButton.appendChild(document.createTextNode("Buy"));
            virtueElement.appendChild(buyButton);
        }
    });
}

function showRegionDetails(region) {
    const championElement = document.getElementById("champion-virtue");

    let nameDiv = document.createElement("div");
    nameDiv.classList.add("name");
    nameDiv.innerHTML = region.name;
    championElement.append(nameDiv);

    let descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("description");
    descriptionDiv.innerHTML = region.description
    championElement.append(descriptionDiv);
}

function updateCount(counter, amount) {
    let counters = JSON.parse(localStorage.getItem(COUNTERS_STORAGE));

    counters[counter] += amount;

    localStorage.setItem(COUNTERS_STORAGE, JSON.stringify(counters));

    window.location.reload();
}
