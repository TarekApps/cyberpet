let inquirer = require("inquirer");
let { dog } = require("./dog");
let { cat } = require("./cat");
let { snake } = require("./snake");

let myPet;

async function start() {
  const { petType } = await inquirer.prompt({
    type: "list",
    name: "petType",
    message: "Which pet would you like?",
    choices: [
      {
        key: "a",
        name: "Dog",
        value: "dog",
      },
      {
        key: "b",
        name: "Cat",
        value: "cat",
      },
      {
        key: "c",
        name: "Snake",
        value: "snake",
      },
    ],
  });

  const { petName } = await inquirer.prompt({
    type: "input",
    name: "petName",
    message: "What would you like to name your pet?",
    default: "Tarek",
  });

  if (petType === "dog") myPet = new dog(petName);
  if (petType === "cat") myPet = new cat(petName);
  if (petType === "snake") myPet = new snake(petName);

  activity();
}

async function activity() {
  const { choice } = await inquirer.prompt({
    type: "list",
    name: "choice",
    message: `What would you like to do with your pet`,
    choices: [
      {
        key: "a",
        name: "Drink",
        value: "drink",
      },
      {
        key: "b",
        name: "Eat",
        value: "eat",
      },
      {
        key: "c",
        name: "Exercise",
        value: "exercise",
      },
      {
        key: "d",
        name: "Play",
        value: "plays",
      },
      {
        key: "e",
        name: "Clean",
        value: "clean",
      },
      {
        key: "f",
        name: "Quit",
        value: "quit",
      },
    ],
  });

  if (choice === "drink") await myPet.drinks();
  if (choice === "eat") await myPet.eats();
  if (choice === "exercise") await myPet.exercise();
  if (choice === "plays") await myPet.plays();
  if (choice === "clean") await myPet.clean();
  if (choice === "quit") await quit();

  if (
    myPet.health > 0 ||
    myPet.hunger > 0 ||
    myPet.water > 0 ||
    myPet.cleanliness > 0 ||
    myPet.happiness > 0
  ) {
    fainted();
  }
  console.log(myPet.stats());

  activity();
}
start();

async function quit() {
  await start();
}

async function fainted() {
  console.log("Oh no your pet fainted! You must start again");
  await start();
}
