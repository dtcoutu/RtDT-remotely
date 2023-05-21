const CHARACTER_STORAGE = "character";
const REGION_STORAGE = "region";
const COUNTERS_STORAGE = "counters";
const ALLIANCES_STORAGE = "alliances";
const STARTED_STORAGE = "started";

function resetGame() {
    localStorage.setItem(CHARACTER_STORAGE, null);
    localStorage.setItem(REGION_STORAGE, null);
    localStorage.setItem(COUNTERS_STORAGE, null);
    localStorage.setItem(ALLIANCES_STORAGE, null);
    localStorage.setItem(STARTED_STORAGE, null);

    hideSections();

    // Not sure why this drop down is the only one that doesn't reset...
    document.getElementById("alliances-expansion").value = "";

    window.location.reload();
}

function startGame() {
    const character = JSON.parse(localStorage.getItem(CHARACTER_STORAGE));
    const region = JSON.parse(localStorage.getItem(REGION_STORAGE));
    const alliances = JSON.parse(localStorage.getItem(ALLIANCES_STORAGE));

    if ((character === null) || (region === null) || (alliances === null)) {
        alert('You must select a character, a region, indicate if alliances expansion is in play.');
        return;
    }

    if (alliances.included && !guildRegionsValid(alliances)) {
        alert('All guilds must have a region set and they must be unique');
        return;
    }

    localStorage.setItem(STARTED_STORAGE, 'true');

    initializeCounters();
    revealSections();

    pageUpdate();
}

function guildRegionsValid(alliances) {
    const guildRegions = [
        document.getElementById('arcane-scouts-location').value,
        document.getElementById('druids-circle-location').value,
        document.getElementById('paladins-order-location').value,
        document.getElementById('thieves-guild-location').value
    ]

    const uniqueGuildRegions = guildRegions.filter((region, index, array) => array.indexOf(region) === index)

    return guildRegions.length === uniqueGuildRegions.length;
}

function initializeCounters() {
    const counters = {
        warriors: 7,
        spirit: 1,
    }

    localStorage.setItem(COUNTERS_STORAGE, JSON.stringify(counters));
}

function alliancesInclusion(included) {
    if (included === '---') {
        return;
    }

    const alliancesIncluded = included === 'true';

    const alliances = {
        included: alliancesIncluded,
        arcane_scouts: '',
        druids_circle: '',
        paladins_order: '',
        thieves_guild: ''
    }

    localStorage.setItem(ALLIANCES_STORAGE, JSON.stringify(alliances));

    window.location.reload();
}

function allianceRegionSet(selectorId, value) {
    const alliances = JSON.parse(localStorage.getItem(ALLIANCES_STORAGE));

    const guildName = selectorId.split('-').slice(0,2).join('_');
    alliances[guildName] = value;

    localStorage.setItem(ALLIANCES_STORAGE, JSON.stringify(alliances));

    window.location.reload();
}

function pageUpdate() {
    const character = JSON.parse(localStorage.getItem(CHARACTER_STORAGE));
    const region = JSON.parse(localStorage.getItem(REGION_STORAGE));
    const counters = JSON.parse(localStorage.getItem(COUNTERS_STORAGE));
    const alliances = JSON.parse(localStorage.getItem(ALLIANCES_STORAGE));
    const started = localStorage.getItem(STARTED_STORAGE) === 'true';

    if (character !== null) {
        const characterSelector = document.getElementById("character-selector");
        characterSelector.value = character.id;
    }

    if (region !== null) {
        const regionSelector = document.getElementById("guardian-selector");
        regionSelector.value = region.id;
    }

    if (alliances !== null) {
        const alliancesExpansionSelector = document.getElementById("alliances-expansion");
        alliancesExpansionSelector.value = alliances.included

        const alliances_guild_setup = document.getElementById('alliances-guild-setup');
        if (alliances.included) {
            alliances_guild_setup.classList.remove('hidden');
        } else {
            alliances_guild_setup.classList.add('hidden');
        }

        const arcaneScoutsSelector = document.getElementById("arcane-scouts-location");
        arcaneScoutsSelector.value = alliances.arcane_scouts;
        const druidsCircleSelector = document.getElementById("druids-circle-location");
        druidsCircleSelector.value = alliances.druids_circle;
        const paladinsOrderSelector = document.getElementById("paladins-order-location")
        paladinsOrderSelector.value = alliances.paladins_order;
        const thievesGuildSelector = document.getElementById("thieves-guild-location");
        thievesGuildSelector.value = alliances.thieves_guild;
    }

    if (started) {
        revealSections();
        setCounters(counters);
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

function setCounters(counters) {
    document.getElementById("warrior-counter").innerHTML = counters.warriors;
    document.getElementById("spirit-counter").innerHTML = counters.spirit;
}

function showCharacterDetails(character) {
    document.getElementById("banner-description").innerHTML = character.banner;
    document.getElementById("movement").innerHTML = character.move;

    // populate virtues
    character.virtues.map((virtue) => {
        const virtueElement = document.getElementById(virtue.id);

        document.getElementById(virtue.id + "-name").innerHTML = virtue.name
        document.getElementById(virtue.id + "-description").innerHTML = virtue.description

        if (virtue.permanent || virtue.active) {
            virtueElement.classList.remove("inactive");

            if (!virtue.permanent) {
                console.log("WTF");
                const buyButton = document.getElementById("buy-" + virtue.id);
                buyButton.innerHTML = "Un Buy";
            }
        } else if (!virtue.permanent) {
            virtueElement.classList.add("inactive");

            let buyButton = document.createElement("button");
            buyButton.innerHTML = "Buy"
        }
    });
}

function showRegionDetails(region) {
    document.getElementById("champion-virtue-name").innerHTML = region.name;
    document.getElementById("champion-virtue-description").innerHTML = region.description;
}

function updateCount(counter, amount) {
    let counters = JSON.parse(localStorage.getItem(COUNTERS_STORAGE));

    counters[counter] += amount;

    localStorage.setItem(COUNTERS_STORAGE, JSON.stringify(counters));

    pageUpdate();
}
