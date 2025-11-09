import { ALLIANCE_COMPANIONS } from "../../data/companions.js";
import { GUILDS } from "../../data/guilds.js";

export class AlliancesExpansion {
  constructor(details) {
    this._guilds = details ? details._guilds : GUILDS
  }

  get guilds() {
    return this._guilds;
  }

  handleEvent(e) {
    if (e.target.dataset.action !== 'select-rank') {
      return;
    }

    const guildId = e.target.closest('.guild').id;
    const rank = Number(e.target.dataset.rank);

    this.setGuildRank(guildId, rank);
  }

  setGuildRegion(guildId, region) {
    this.#findGuild(guildId).region = region;
  }

  setGuildSide(guildId, side) {
    this.#findGuild(guildId).side = side;
  }

  setGuildRank(guildId, rank) {
    const guild = this.#findGuild(guildId);
    const rankIncreased = guild.rank < rank;

    document.getElementById(guild.id + '-rank-' + guild.rank).classList.remove('selected');
    guild.rank = rank;
    document.getElementById(guild.id + '-rank-' + guild.rank).classList.add('selected');

    if (rankIncreased) {
      this.renderCompanionDialog(guild);
    }
  }

  start() {
    document.getElementById('alliances-heroic-action').classList.remove('hidden');
    document.getElementById('alliances-reinforcement-action').classList.remove('hidden');
  }

  reset() {
    document.getElementById('alliances-heroic-action').classList.add('hidden');
    document.getElementById('alliances-reinforcement-action').classList.add('hidden');
  }

  render(container, regionOrder) {
    this.start();

    const guildHTML = this.guilds.map(guild => {
      const rankTextHTML = guild[guild.side].map(rank => {
        const selected = rank.rank === guild.rank ? 'selected' : '';

        return `
        <div id="${guild.id}-rank-${rank.rank}" class="guild-rank ${selected}" data-action="select-rank" data-rank="${rank.rank}">
          ${rank.text}
        </div>
        `
      }).join('');

      const regionIndex = regionOrder.indexOf(guild.region) + 1;

      return `
      <section id="${guild.id}" class="guild region-${regionIndex}">
        <div class="guild-name">${guild.name}: ${guild.building} || <span id="${guild.id}-region">${guild.region}</span> || ${this.#sideDisplayText(guild)}</div>
        ${rankTextHTML}
      </section>
      `;
    }).join('');

    container.innerHTML = `
      <section id="guilds">
        ${guildHTML}
      </section>
    `.trim();
  }

  renderCompanionDialog(guild) {
    var modal = document.getElementById("alliance-companion-modal");

    document.getElementById("alliance-companion-guild").innerHTML = guild.name;

    const selector = document.getElementById("alliance-companion-selector");
    selector.innerHTML = "";

    ALLIANCE_COMPANIONS.filter((companion) => companion.guild == guild.id).map((item) => {
      let opt = document.createElement("option");
      opt.value = item.id;
      opt.innerHTML = item.name;
      selector.append(opt);
    });

    modal.style.display = "block";
  }

  valid() {
    const guildRegions = this.guilds.map(guild => guild.region);
    const uniqueGuildRegions = [...new Set(guildRegions)];

    return guildRegions.length === uniqueGuildRegions.length;
  }

  #findGuild(guildId) {
    return this.guilds.find(guild => guild.id === guildId);
  }

  #sideDisplayText(guild) {
    return guild.side.split('_').map(part =>
      part.charAt(0).toUpperCase() + part.substring(1).toLowerCase()
    ).join(' ');
  }
}
