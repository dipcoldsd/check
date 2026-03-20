require('dotenv').config();
const mongoose = require('mongoose');
const Person = require('./models/Person');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Database connection error', err));

// Create and Save a Record of a Model
const createAndSavePerson = async () => {
  const person = new Person({
    name: 'John Doe',
    age: 25,
    favoriteFoods: ['Pizza', 'Burger']
  });

  try {
    const data = await person.save();
    console.log('Saved person:', data);
  } catch (err) {
    console.error(err);
  }
};

// Create Many Records
const createManyPeople = async (arrayOfPeople) => {
  try {
    const data = await Person.create(arrayOfPeople);
    console.log('Created many people:', data);
  } catch (err) {
    console.error(err);
  }
};

// Use model.find() to Search
const findPeopleByName = async (personName) => {
  try {
    const data = await Person.find({ name: personName });
    console.log(`People with name ${personName}:`, data);
  } catch (err) {
    console.error(err);
  }
};

// Use model.findOne()
const findOneByFood = async (food) => {
  try {
    const data = await Person.findOne({ favoriteFoods: food });
    console.log(`One person who likes ${food}:`, data);
  } catch (err) {
    console.error(err);
  }
};

// Use model.findById()
const findPersonById = async (personId) => {
  try {
    const data = await Person.findById(personId);
    console.log(`Person with ID ${personId}:`, data);
  } catch (err) {
    console.error(err);
  }
};

// Perform Classic Updates
const findEditThenSave = async (personId) => {
  try {
    const person = await Person.findById(personId);
    if (!person) return console.log('Person not found');
    
    person.favoriteFoods.push('hamburger');
    const updatedPerson = await person.save();
    console.log('Updated person (Classic):', updatedPerson);
  } catch (err) {
    console.error(err);
  }
};

// Perform New Updates
const findAndUpdate = async (personName) => {
  try {
    const data = await Person.findOneAndUpdate(
      { name: personName },
      { age: 20 },
      { new: true }
    );
    console.log('Updated person (New):', data);
  } catch (err) {
    console.error(err);
  }
};

// Delete One
const removeById = async (personId) => {
  try {
    const data = await Person.findByIdAndRemove(personId);
    console.log('Deleted person:', data);
  } catch (err) {
    console.error(err);
  }
};

// Delete Many
const removeManyPeople = async () => {
  try {
    const result = await Person.deleteMany({ name: 'Mary' });
    console.log('Deleted people named Mary:', result);
  } catch (err) {
    console.error(err);
  }
};

// Chain Search Query Helpers
const queryChain = async () => {
  try {
    const data = await Person.find({ favoriteFoods: 'burritos' })
      .sort({ name: 1 })
      .limit(2)
      .select('-age')
      .exec();
    console.log('Chained query results:', data);
  } catch (err) {
    console.error(err);
  }
};

// Run the functions to demonstrate
const run = async () => {
  console.log("Operations are defined. Uncomment to run them if connected to a DB.");
  // await createAndSavePerson();
};

run();
