import {log} from "./main.js";

export class Monster{
	constructor(type, health, strength, specialAttack) {
		this.type = type;
		this.health = health;
		this.strength = strength
		this.specialAttack = specialAttack;
	}

	attack(player) {
		const damage = this.strength;
		log(`${this.type} атакує ${player.name}, завдаючи ${damage} шкоди!`, "attackM");
		player.health -= damage;
		if(this.specialAttack){
			this.specialAttack(player);
		}
	}
}
