import { REGIONS } from "../../data/regions.js";
import { MONUMENTS } from "../../data/monuments.js";

export class CovenantExpansionSetup {
  constructor(expansionModel) {
    this.expansionModel = expansionModel;

    this.populateExpansionDetails();
  }

  handleEvent(e) {
    if (e.target.dataset.action === 'select') {
      const region = e.target.dataset.region;
      const monumentId = e.target.value;
      this.expansionModel.details.setMonumentRegion(monumentId, region);

      this.expansionModel.updateStorage();
    }
  }

  populateExpansionDetails() {
    const monumentOptionsHTML = MONUMENTS.map(monument =>
      `
      <option value="${monument.id}">${monument.name}</option>
      `
    ).join('');

    const regionMonumentSelectorHTML = REGIONS.map(region =>
      `
      <div>
        <label>
          ${region.id}:
          <select id="monument-setup-${region.id}" data-action="select" data-region="${region.id}">
            <option value="" selected="true">---</option>
            ${monumentOptionsHTML}
          </select>
        </label>
      </div>
      `
    ).join('');

    document.getElementById('expansion-setup').innerHTML = `
    <div id="covenant-setup">
      Monument locations:
      ${regionMonumentSelectorHTML}
    </div>
    `;
  }

  updateSelectorValues() {
    if (this.expansionModel.details === null) {
      return;
    }

    this.expansionModel.details.monuments.forEach(monument => {
      document.getElementById('monument-setup-' + monument.region).value = monument.id;
    });
  }
}
