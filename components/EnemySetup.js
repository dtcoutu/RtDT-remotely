export class EnemySetup {
  static ENEMY_SECTION_ID = 'enemy-selectors';

  constructor(enemiesModel) {
    this.enemiesModel = enemiesModel;

    this.addListener();
  }

  addListener() {
    document.getElementById(EnemySetup.ENEMY_SECTION_ID).addEventListener('change', (e) => {
      const selector = e.target.closest('.enemy-selector');

      if (selector.dataset.action === 'select') {
        this.enemiesModel.setEnemy(selector.dataset.level, e.target.value)
      }
    });
  }

  updateSelectorValues() {
    for (let level = 2; level <= 5; level++) {
      document.getElementById("enemy-selector-level-" + level).value = this.enemiesModel.getEnemy(level)?.id || '';
    }
  }
}
