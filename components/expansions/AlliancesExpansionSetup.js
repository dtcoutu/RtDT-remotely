import { GUILDS } from "../../data/guilds.js";

export class AlliancesExpansionSetup {
  constructor(expansionModel) {
    this.expansionModel = expansionModel;

    this.populateExpansionDetails();
    this.updateSelectorValues();
  }

  handleEvent(e) {
    if (e.target.dataset.action === 'select') {
      const guildId = e.target.closest('div').dataset.id;

      if (e.target.dataset.type === 'region') {
        this.expansionModel.details.setGuildRegion(guildId, e.target.value);
      } else if (e.target.dataset.type === 'side') {
        this.expansionModel.details.setGuildSide(guildId, e.target.value);
      }

      this.expansionModel.updateStorage();
    }
  }

  populateExpansionDetails() {
    const guildsHTML = GUILDS.map(guild =>
      `
      <div id="${guild.id}-setup" data-id="${guild.id}">
        <label>
          ${guild.name}:
          <select id="${guild.id}-region" data-action="select" data-type="region">
            <option value="">---</option>
            <option value="North">North</option>
            <option value="South">South</option>
            <option value="East">East</option>
            <option value="West">West</option>
          </select>
          <select id="${guild.id}-side" data-action="select" data-type="side">
            <option value="side_a">A</option>
            <option value="side_b">B</option>
          </select>
        </label>
      </div>
      `
    ).join('');

    this.#expansionSetupElement().innerHTML = `
      <div id="alliances-guild-setup">
        Guild locations:
        ${guildsHTML}
      </div>
      `;
  }

  updateSelectorValues() {
    if (this.expansionModel.details === null) {
      return;
    }

    this.expansionModel.details.guilds.forEach(guild => {
      // update region
      document.getElementById(guild.id + '-region').value = guild.region;

      // update side
      document.getElementById(guild.id + '-side').valud = guild.side;
    });
  }

  #expansionSetupElement() {
    return document.getElementById('expansion-setup');
  }
}
