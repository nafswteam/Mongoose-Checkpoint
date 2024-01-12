const { createPerson } = require("../checkpoint_task/01_createtasks");
const { classicUpdate, findOneAndUpdate } = require("../checkpoint_task/03_updateTasks");
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

  test("Classical Update - //Perform Classic Updates by Running Find, Edit, then Save",async () => {
    const person = await createPerson(people[0]);
    if(person) {
        const updatedPerson = await classicUpdate(person._id.toString());
        expect(updatedPerson.favoriteFoods).toEqual([...person.favoriteFoods, "Hamburger"])
    }
  });

  test("findOneAndUpdate - Perform New Updates on a Document Using model.findOneAndUpdate()",async () => {
    const person = await createPerson(people[0]);
    if(person) {
        const updatedPerson = await findOneAndUpdate(person.name);
        expect(updatedPerson.age).toBe(20)
    }
  });
