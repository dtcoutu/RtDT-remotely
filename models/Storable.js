import { Storage } from "./Storage.js";

export class Storable {
  get storageKey() {
    throw new Error("storageKey method must define a value to be returned");
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
