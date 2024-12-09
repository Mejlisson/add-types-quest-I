//utöka så alla egenskaper för monstret skrivs ut

import { Monster } from "./type";

export const prettyPrintMonsters = (monsters: Monster[]): void => {
    monsters.forEach((monster) => {
        console.log(`Monster: ${monster.name}`);
        console.log(`Monster age: ${monster.age}, Tentacles: ${monster.tentacles}, Eyes: ${monster.eyes}`);
        console.log(`Wings: ${monster.hasWings ? "Yes" : "No"}`);
        console.log("-------------------------");
    });
};
	
export const averageMonsterAge = (arrayOfMonsters: Monster[]): number => {
	let allAges = 0;
	arrayOfMonsters.forEach((Monster) => {
		allAges += Monster.age;
	});
	return allAges / arrayOfMonsters.length;
};

export const averageNumberOfTentacles = (arrayOfMonsters: Monster[]): number => {
	let averageNumberOfTentacles = 0;
	arrayOfMonsters.forEach((Monster) => {
		averageNumberOfTentacles += Monster.tentacles;
	});
	return averageNumberOfTentacles / arrayOfMonsters.length;
};

export const printMonstersWithWings = (arrayOfMonsters: Monster[]): number => {
	let wingedMonsterCount = 0;  
	arrayOfMonsters.forEach((monster) => {
	  if (monster.hasWings) {
		wingedMonsterCount++;  
	}
	});
	return wingedMonsterCount;
  };

export const getAllNoWingedMonster = (arrayOfMonsters: Monster[]): number => {
	let nonWingedMonsterCount = 0;
	arrayOfMonsters.forEach((monster) =>{
		if(!monster.hasWings) {
			nonWingedMonsterCount++;
		}
	});
	return nonWingedMonsterCount;
};
