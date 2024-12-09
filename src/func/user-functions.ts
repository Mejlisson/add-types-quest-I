import {Person, Dog, Monster} from "./func/main";

// Funktion för averageAge
export const averageAge = (arrayOfPersons: Person[]): number => {
	let allAges = 0;
	arrayOfPersons.forEach((Person) => {
		allAges += Person.age;
	});
	return allAges / arrayOfPersons.length;
};

//Funktion för averageNumberOfHobbies
export const averageNumberOfHobbies = (arrayOfPersons: Person[]) => {
	let allHobbies = 0;
	arrayOfPersons.forEach((Person) => {
		allHobbies += Person.hobby.length;
	});
	return allHobbies / arrayOfPersons.length;
};

//En funnktion som visar Personen med flest hobbies 
//En funktion som visar Personen med flest hobbies (namn) och har (Y) antal hobbies".Skapa den funktionen.

export const personWithMostHobbies =(arrayOfPersons: Person[]): Person => {
	let personWithMaxHobbies = arrayOfPersons[0];
	for (let i= 1; i < arrayOfPersons.length; i++) {
		if (arrayOfPersons[i].hobby.length > personWithMaxHobbies.hobby.length) {
			personWithMaxHobbies = arrayOfPersons[i];
		}
	}
	return personWithMaxHobbies;
	};


//Funktion som visar vem som är "Den äldsta personen, A" och den yngsta personen B". Byt ut A och B mot funktionsanrop. Ska de två funktionerna

export const oldestPerson =(arrayOfPerosns: Person[]): Person => {
	let oldest = arrayOfPerosns[0];
	for(let i=1; i< arrayOfPerosns.length; i++) {
		if (arrayOfPerosns[i].age > oldest.age) {
			oldest = arrayOfPerosns[i];
		}
	}
	return oldest;
};

//Funktion som visar den yngsta personen B"

export const youngestPerson =(arrayOfPerosns: Person[]): Person => {
	let youngest = arrayOfPerosns[0];
	for(let i=1; i < arrayOfPerosns.length; i++) {
		if (arrayOfPerosns[i].age < youngest.age) {
			youngest = arrayOfPerosns[i];
		}
	}
	return youngest;
};

