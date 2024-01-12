const {
  createPerson,
  createPeople,
} = require("../checkpoint_task/01_createtasks");
const {
  findByName,
  findOnePerson,
  findById,
} = require("../checkpoint_task/02_ReadTasks");

//
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


  // findByName task
  test("Person.findByName() - Make sure that only two object is returned", async () => {
    const savedPeople = await createPeople(people);
    if (savedPeople) {
      const foundPeople = await findByName({ name: "Smith" });
      expect(foundPeople.length).toBe(2);
    }
  });

  test("Person.findOne() Task - Find just one person which has a certain food in the person's favorites", async () => {
    const savedPeople = await createPeople(people);
    if (savedPeople) {
      const foundPeople = await findOnePerson("Rice");
      expect(foundPeople.name).toBe("Smith");
    }
  });

  test("Person.findOne() Task - Find the (only!!) person having a given _id", async () => {
    const savedPerson = await createPerson(people[0]);
    if (savedPerson) {
      const person = await findById(savedPerson._id.toString());
      expect(person._id.toString()).toBe(savedPerson._id.toString());
    }
  });
