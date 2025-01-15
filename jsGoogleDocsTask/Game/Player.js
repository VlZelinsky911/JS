import {log} from "./main.js";


export class Player {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.strength = 15;
    this.medicine = 2;
    this.inventory = [];
    this.level = 1;
    this.experience = 0;
  }

  attack(monster) {
    const damage = this.strength;
    log(
      `${this.name} атакує ${monster.type}a, завдаючи ${damage} шкоди!`,
			"player"
    );
    monster.health -= damage;
    if (monster.health <= 0) {
      log(`${monster.type}a вбито!`, "killed");
      this.gainExperience(50);
    }
  }

  gainExperience(amount) {
    this.experience += amount;
    log(`${this.name} отримав ${amount} досвіду!`,"player");
    this.levelUp();
  }

  levelUp() {
    while (this.experience >= this.level * 100) {
      this.experience -= this.level * 100;
      this.level++;
      this.health += 20;
      this.strength += 5;
      this.medicine += 1;
      console.log(
        `${this.name} досяг рівня! Здоров'я: ${this.health}, Сила: ${this.strength}, Ліки: ${this.medicine}`
      );
    }
  }

  regeneration() {
    if (this.medicine > 0) {
      const healAmount = 30;
      this.health += healAmount;
      this.medicine--;
      log(
        `${this.name} використовує ліки та відновлює ${healAmount} здоров'я. Тепер у нього ${this.health} HP.`,
				"player"
      );
    } else {
     console.log(`${this.name} не має ліків для використання!`);
    }
  }

  addItem(item) {
    this.inventory.push(item);
    console.log(`${this.name} отримав новий предмет: ${item.call}.`, "item");
  }

  useItem(itemName) {
    const itemIndex = this.inventory.find((i) => i.call === itemName);
    if (itemIndex >= 0) {
      const item = this.inventory[itemIndex];
      log(`${this.name} використовує ${item.call}!`);
      item.effect(this);
      this.inventory.splice(itemIndex, 1);
    } else {
      log(`${itemName} немає в інвентарі!`);
    }
  }
}
