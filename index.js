const mongoose = require("mongoose")
const dotenv = require("dotenv")
const {person, peopleArray} = require("./utils/data.js")
const Person = require("./model/person.model.js");
const {createPerson, createPeople} = require("./checkpoint_task/01_createtasks.js");
const {findByName,findOnePerson,findById} = require("./checkpoint_task/02_ReadTasks.js");
const {classicUpdate,findOneAndUpdate} = require("./checkpoint_task/03_updateTasks.js");
const {findByIdAndRemove,deleteMany} = require("./checkpoint_task/04_deleteTasks.js");
const {chainSearchQuery} = require("./checkpoint_task/05_chainSearchQuery.js")
dotenv.config();

const DB_URL = process.env.DB_URL;

async function startDB() {
    const connected = await mongoose.connect(DB_URL);
    if(connected) {
        console.log("Database Connected");
        // This clears the database before we perform any operation.
        await Person.deleteMany({});
        // Task one - Create a person using save() method
        await createPerson(person);
        // Task two - Create many people using 
        await createPeople(peopleArray);
        // Task 3 - find user by Name
        await findByName({name: "Mary"});
        // findOnePerson - that loves a particular food
        await findOnePerson("Guacamole")
        // findById - specifical - get a person detail by just providing his ID
        const persons = await Person.find()
        await findById(persons[0]._id.toString());
        // classicUpdate - update the favoritFoods of the found person
        await classicUpdate(persons[5]._id.toString());
        // findOneAndUpdate - find and update the age of a user
        await findOneAndUpdate("Davis")
        // {findByIdAndRemove,
        const removed = await findByIdAndRemove(persons[5]._id.toString());
        // delete all mary in our DB
        await deleteMany();
        // chainSearchQuery - find all persons that likes Burritos, sort them by name and return just two 
        await chainSearchQuery();
    }
}

startDB();



