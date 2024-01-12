const Person = require("../model/person.model")
const { createPerson, createPeople } = require("../checkpoint_task/01_createtasks");
const { findByIdAndRemove, deleteMany } = require("../checkpoint_task/04_deleteTasks");
const people = [
    {
      name: "Smith",
      favoriteFoods: ["Rice", "Beans", "Potatoes"],
    },
    {
      name: "Smith",
      age: 28,
      favoriteFoods: ["Pasta", "Chicken", "Salad"],
    },
    {
      name: "Johnson",
      age: 42,
      favoriteFoods: ["Steak", "Mashed Potatoes", "Broccoli"],
    },
  ];

  test("findByIdAndRemove - Delete One Document Using model.findByIdAndRemove",async () => {
    const person = await createPerson(people[0]);
    if(person) {
        const updatedPerson = await findByIdAndRemove(person._id.toString());
        expect(updatedPerson.name).toBe("Smith")
    }
  });

  test("deleteMany - Delete many users that has name mary",async () => {
    const people = await createPeople([{ name: 'Mary', age: 38, favoriteFoods: ['Rice', 'burritos'] },
    { name: 'Mary', age: 23, favoriteFoods: ['Rice', 'burritos'] },
    { name: 'Mary', age: 56, favoriteFoods: ['Rice', 'burritos'] },
    { name: 'Mary', age: 42, favoriteFoods: ['Rice', 'burritos'] },
    { name: 'Mary', age: 35, favoriteFoods: ['Rice', 'burritos'] },
    { name: 'Charlie', age: 39, favoriteFoods: ['Sushi', 'Tacos', 'Curry'] },
    { name: 'David', age: 57, favoriteFoods: ['Burger', 'Tacos', 'Ice Cream'] },
    { name: 'Eva', age: 49, favoriteFoods: ['Pizza', 'Pasta', 'Burger'] },
    { name: 'Grace', age: 21, favoriteFoods: ['Steak', 'Burger', 'Ice Cream'] },
]);
    if(people) {
        const deletedPeople = await deleteMany();
        expect(deletedPeople.deletedCount).toBe(5)
    }
  });
