const {
    createPerson,
    createPeople,
  } = require("../checkpoint_task/01_createtasks");
const {person, peopleArray} = require("../utils/data");




   // Task 1 - create a person using save() method
  test("person.save() - Ensure A single User is created in the Database", async () => {
    const savedPerson = await createPerson(person);
    expect({
        name: savedPerson.name,
        age:savedPerson.age,
        favoriteFoods: savedPerson.favoriteFoods
    }).toMatchObject(person);
  });
    // task 2
  test("Person.create() - Create Many People expect created people to be peopleArray", async() => {
    const savedPeople = await createPeople(peopleArray);
    expect(savedPeople.length).toBe(peopleArray.length);
  });