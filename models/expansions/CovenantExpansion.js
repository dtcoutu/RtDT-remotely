import { MONUMENTS } from "../../data/monuments.js";

export class CovenantExpansion {
  constructor(details) {
    this._monuments = details ? details._monuments : [];
  }

  get monuments() {
    return this._monuments;
  }

  handleEvent(e) {
    if (e.target.dataset.action !== 'toggle') {
      return;
    }

    const monument = this.#findMonument(e.target.dataset.id);

    monument.built = !monument.built;

    const reinforcementElement = document.getElementById(monument.region + '-monument-reinforcement');
    if (monument.built) {
      e.target.innerHTML = 'Un-Build';
      reinforcementElement.classList.remove('inactive');
    } else {
      e.target.innerHTML = 'Build';
      reinforcementElement.classList.add('inactive');
    }
  }

  setMonumentRegion(monumentId, region) {
    const monument = structuredClone(MONUMENTS.find(monument => monument.id === monumentId));

    const index = this.monuments.findIndex(monument => monument.region === region);
    if (index >= 0) {
      this.monuments.splice(index, 1);
    }

    monument.region = region;
    this.monuments.push(monument);
  }

  start() {
    document.getElementById('covenant-heroic-action').classList.remove('hidden');
  }

  reset() {
    document.getElementById('covenant-heroic-action').classList.add('hidden');
  }

  render(container, regionOrder) {
    const monumentsHTML = this.monuments.map(monument => {
      const regionIndex = regionOrder.indexOf(monument.region) + 1;

      return `
      <section id="${monument.region}-monument" class="region-${regionIndex} monument" data-region="${monument.region}">
        <div class="monument-name">
          ${monument.name} || ${monument.region} || ${monument.location}
          <button data-action="toggle" data-id="${monument.id}">${monument.built ? 'Un-' : ''}Build</button>
        </div>
        <div id="${monument.region}-monument-offering" class="monument-offering">${monument.offering}</div>
        <div id="${monument.region}-monument-reinforcement" class="monument-reinforcement ${monument.built ? '' : 'inactive'}">
          <div><img src="icons/reinforce.png" title="reinforce" alt="reinforce" width="20px" />Reinforce</div>
          <dl class="action">
            <dt><strong>Free:</strong></dt>
            <dd>${monument.reinforce.free}</dd>
            <dt><strong>${monument.reinforce.enhanced.cost}</strong></dt>
            <dd>${monument.reinforce.enhanced.effect}</dd>
          </dl>
        </div>
      </section>
      `
    }).join('');

    container.innerHTML = `
    <section id="monuments">
      ${monumentsHTML}
    </section>
    `.trim();
  }

  valid() {
    const monumentIds = this.monuments.map(monument => monument.id);
    const uniqMonumentIds = [...new Set(monumentIds)];

    return uniqMonumentIds.length === 4;
  }

  #findMonument(monumentId) {
    return this.monuments.find(monument => monument.id === monumentId);
  }
}
