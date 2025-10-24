class Counter {
  constructor(containerId, name, initialValue = 0) {
    this.container = document.getElementById(containerId);
    this.name = name;
    this.value = initialValue;
    this.render();
  }

  increment(amount = 1) {
    this.value += amount;
    this.update();
  }

  decrement(amount = 1) {
    this.value -= amount;
    this.update();
  }

  update() {
    this.container.querySelector('.counter-value').textContent = this.value;
    // Emit event or update state
  }

  render() {
    this.container.innerHTML = `
      <div class="counter">
        <span class="counter-name">${this.name}:</span>
        <span class="counter-value">${this.value}</span>
        <button data-action="decrement">-</button>
        <button data-action="increment">+</button>
      </div>
    `;
  }
}
