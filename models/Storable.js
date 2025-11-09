import { Storage } from "./Storage.js";

export class Storable {
  get storageKey() {
    throw new Error("storageKey method must define a value to be returned");
  }

  reset() {
    Object.keys(this).forEach(key => {
      if (typeof this[key] === 'string') {
        this[key] = '';
      } else if (typeof this[key] === 'number') {
        this[key] = null;
      } else if (typeof this[key] === 'boolean') {
        this[key] = false;
      } else if (this[key] instanceof Array) {
        this[key] = [];
      } else if (typeof this[key] === 'object') {
        this[key] = null;
      }
    });

    this.updateStorage();
  }

  createElementFromHTML(html) {
    const template = document.createElement('template');
    template.innerHTML = html.trim();
    return template.content.firstChild;
  }

  loadStorage() {
    return Storage.load(this);
  }

  updateStorage() {
    Storage.write(this);
  }
}
