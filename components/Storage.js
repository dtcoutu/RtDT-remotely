export class Storage {
  static load(object) {
    let storedData = localStorage.getItem(object.storageKey);

    // No data stored so use the default object values
    if (storedData == null) {
      Storage.write(object);
      storedData = JSON.stringify(object);
    }

    if (storedData == null) {
      throw new Error("Stored data not found or initialized for " + object.constructor.name);
    }

    return JSON.parse(storedData);
  }

  static write(object) {
    localStorage.setItem(object.storageKey, JSON.stringify(object));
  }
}
