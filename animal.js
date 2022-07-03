class animal {
  constructor(name) {
    this.name = name;
    this.water = 100;
    this.hunger = 100;
    this.health = 100;
  }
  drinks() {
    this.water += 5;
    console.log(
      `${this.name} has drank water! And their water level is ${this.water}`
    );
    return this;
  }
  eats() {
    this.hunger += 10;
    console.log(
      `${this.name} has ate food! And their hunger level is ${this.hunger}`
    );
    return this;
  }
  exercise() {
    this.health += 10;
    this.water -= 10;
    this.hunger -= 10;
    console.log(
      `${this.name} has exercised! And their health is ${this.health}, However their water and hunger has decreased water:${this.water} hunger:${this.hunger}`
    );
  }

  stats() {
    return console.table({
      name: this.name,
      water: this.water,
      hunger: this.hunger,
      health: this.health,
      happiness: this.happiness,
      cleanliness: this.cleanliness,
    });
  }
}

module.exports = { animal };
