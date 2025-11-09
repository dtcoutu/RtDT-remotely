import { Metadata } from "./Metadata.js";

export class Kingdom {
  id;
  name;
  type;
  description;
  system;

  constructor(kingdom) {
    if (kingdom === null) {
      return;
    }

    Object.keys(kingdom).forEach(key => {
      this[key] = kingdom[key];
    });
  }

  start() {
    new Metadata().add(this);
  }

  render() {
    const regionVirtueElement = document.getElementById('virtue-champion-virtue');

    const regionVirtueHTML = `
    <div id="${this.type}-${this.id}" style="height: 100%">
      <div id="champion-virtue-name" class="name">
        ${this.name}
      </div>
      <div id="champion-virtue-description">
        ${this.description}
      </div>
    </div>
    `;

    regionVirtueElement.innerHTML = regionVirtueHTML.trim();
  }
}
