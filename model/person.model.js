const {Schema, model} = require("mongoose");

const personSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type:Number, 
        default: 8
    },
    favoriteFoods: [String]
});

const Person = model("Person", personSchema);

module.exports = Person;