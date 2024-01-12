const initializeDatabase = require("./initializeDatabase");
const Person = require("../model/person.model");
const { createPeople } = require("../checkpoint_task/01_createtasks");
const { chainSearchQuery } = require("../checkpoint_task/05_chainSearchQuery");

// Initial the database before test
beforeAll(() => {
  return initializeDatabase();
});

beforeEach(async () => {
  await Person.deleteMany(); 
});


require("./read");
require("./update")
require("./create");
require("./delete")

test("chainSearchQuery return the first two document where favoriteFoods includes burritos and sort by name", async () => {
  const people = [
    { name: 'Eva', age: 49, favoriteFoods: ['Pizza', 'Pasta', 'Burger'] },
    { name: 'Grace', age: 21, favoriteFoods: ['Steak', 'Burger', 'Ice Cream'] },
    { name: 'Ivy', age: 32, favoriteFoods: ['Pasta', 'Salad', 'Tacos'] },
    { name: 'Angela', age: 56, favoriteFoods: ['Rice', 'Burritos', 'Pasta', 'Salad',] },
    { name: 'Frank', age: 49, favoriteFoods: ['Tacos', 'Burger', 'Sushi'] },
    { name: 'Henry', age: 21, favoriteFoods: ['Pizza', 'Sushi', 'Steak'] },
    { name: 'Ivy', age: 32, favoriteFoods: ['Pasta', 'Burger', 'Ice Cream'] },
    { name: 'Mary', age: 23, favoriteFoods: ['Rice', 'Burritos'] },
    { name: 'David', age: 22, favoriteFoods: ['Salad', 'Pizza', 'Ice Cream'] },
    { name: 'Eva', age: 49, favoriteFoods: ['Pizza', 'Steak', 'Burger'] },
    { name: 'Faith', age: 42, favoriteFoods: ['Rice', 'Burger', 'Sushi', 'Burritos'] },
  ]

  const savedPeople = await createPeople(people);
  if(savedPeople) {
    const queriedPeople = await chainSearchQuery();
    expect(queriedPeople.length).toBe(2);
    expect(queriedPeople[0].name).toBe("Angela");
    expect(queriedPeople[queriedPeople.length-1].name).toBe("Faith");
    expect(queriedPeople[0].age).toBe(undefined);
  }
})