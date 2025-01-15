import { Player } from './Player.js';
import { Monster } from './Monster.js';
import { Item } from './Item.js';


let player = new Player("Герой");

const goblin = new Monster("Гоблін" , 30, 10, (player)=> {
	if(player.medicine > 0){
		player.medicine --;
		log(`Гоблін вкрав одне зілля у ${player.name}! Ліків залишилось: ${player.medicine}.`, "monsters");
	}
});

const orc = new Monster("Орк",50, 15, (player)=>{
	const criticalChance = Math.random();
	if(criticalChance < 0.3){
		const criticalDamage = orc.strength * 2;
		player.health -= criticalChance;
		log(`Орк завдає критичний удар! ${player.name} отримує додатково ${criticalDamage} шкоди!`, "monsters");
	}
});

const dragon = new Monster("Дракон", 100, 25, (player)=>{
	const fireDamage = 10
	player.health -= fireDamage
	log(`Дракон пускає вогонь, завдаючи ${fireDamage} додаткової шкоди!`, "monsters");
});

const necromancer = new Monster("Некромант", 70, 20, ()=> {
	const healAmount = 10;
	this.health += healAmount;
	log(`Некромант відновлює ${healAmount} здоров'я! Тепер у нього ${this.health} HP.`, "monsters");
})

const monsters = [goblin, orc, dragon, necromancer];

const sword = new Item("Меч", "Зброя", (player) => {
	player.strength += 10;
	console.log(`${player.name} тепер сильніший! Його сила зросла до ${player.strength}.`);
})
const healthPotion = new Item("Зілля", "Ліки", (player) => {
	const healAmount = 50;
	player.health += healAmount;
	console.log(`${player.name} випив зілля та відновив ${healAmount} здоров'я. Тепер у нього ${player.health} HP.`);
})


let currentMonsterIndex = 0;

function updateStatus() {
	const status = document.getElementById("status");
	const monster = monsters[currentMonsterIndex];
	status.innerHTML = `
	<p>${player.name}: ${Math.round(player.health)} HP,Сила ${player.strength}, Ліки ${player.medicine}, Рівень ${player.level}</p>
	<p>Інвентар: ${player.inventory.map((item) => item.name).join(", ") || "Порожній"}</p>
	<p>${monster.type}: ${monster.health} HP,Сила ${monster.strength}</p>
	`
}

export function log(message , type = "default"){
	const logDiv = document.getElementById("log");
  const p = document.createElement("p");

	p.className =	`log-${type}`
	p.textContent = message;

	logDiv.appendChild(p);
	logDiv.scrollTop = logDiv.scrollHeight;
}

function gameOver() {
	alert("Гравець загинув! Гра закінчена.");
	document.querySelectorAll("button").forEach((btn) => (btn.disabled = true));
}

function nextMonster(){
	currentMonsterIndex++;
	if(currentMonsterIndex >= monsters.length){
		alert("Вітаємо! Ви перемогли всіх монстрів!");
		document.querySelectorAll("button").forEach((btn) => (btn.disabled = true));
	} else{
		if(Math.random() < 0.5){
		const foundItem = Math.random() > 0.5 ? sword : healthPotion;
		player.addItem(foundItem);
		console.log(`Ви знайшли ${foundItem.call}!`);
		}
		console.log(`Новий ворог: ${monsters[currentMonsterIndex].type} (${monsters[currentMonsterIndex].health} HP)`);
		updateStatus();
		}
	}

document.getElementById("attack").addEventListener("click", ()=> {
	const monster = monsters[currentMonsterIndex];
	player.attack(monster);
	if(monster.health <= 0){
		nextMonster();
	}else{
		monster.attack(player);
		if(player.health <= 0){
			gameOver()
		}
	}
	updateStatus();
});

document.getElementById("heal").addEventListener("click", () =>{
  player.regeneration();
	const monster = monsters[currentMonsterIndex];
	monster.attack(player);
	if(player.health <= 0){
		gameOver();
	}
	updateStatus()
})

document.getElementById("use__item").addEventListener("click", () =>{
	if(player.inventory.length === 0){
		log("Інвентар порожній!", "isEmpty");
    return;
	}
	const itemName = prompt(`Який предмет використати? Доступні: ${player.inventory.map((i) => i.name).join(", ")}`);
	if(itemName){
		player.useItem(itemName.trim());
	}
})

updateStatus();
log(`Гра почалася! Ваш перший ворог: ${monsters[0].type} (${monsters[0].health} HP)`, "start");
