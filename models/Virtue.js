import { Metadata } from "./Metadata.js";

export class Virtue {
  id;
  name;
  type;
  description;
  permanent;
  active = false;
  system;

  constructor(virtue) {
    Object.keys(virtue).forEach(key => {
      this[key] = virtue[key];
    });

  }

  start() {
    if (this.permanent) {
      new Metadata().add(this);
    }
  }

  render() {
    document.getElementById(this.id + '-name').innerHTML = this.name;
    document.getElementById(this.id + '-description').innerHTML = this.description;

    if (this.permanent) {
      return;
    }

    const virtueElement = document.getElementById(this.type + '-' + this.id);
    const buyButton = document.getElementById('buy-' + this.id);

    if (this.active) {
      virtueElement.querySelectorAll('div').forEach(div => div.classList.remove('inactive'));
      buyButton.innerHTML = 'Un Buy';
    } else {
      virtueElement.querySelectorAll('div').forEach(div => div.classList.add('inactive'));
      buyButton.innerHTML = 'Buy';
    }
  }

  toggle() {
    this.active = !this.active;

    this.render();

    if (this.active) {
      new Metadata().add(this);
    } else {
      new Metadata().remove(this);
    }
  }
}
