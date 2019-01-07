/**
 * Objective of this exercise: 
    Get all the published courses from database
    Sort by name of course
    display using only name and author of course
 */

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercise1')
    .then(() => console.log('Connected to mongo-exercise1..'))
    .catch(err => console.error('Could not connect to mongoDB, mongo-exercise1', err));

const courseSchema = new mongoose.Schema({
    tags: [String],
    date: {type: Date, default: Date.now},
    name: String,
    author: String,
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);

//Async function to retrive data from database. 
//Will console.log courses that are published and in ascending order
 async function getCourses(){
    const courses = await Course
    .find({isPublished: true})
    .sort({name: 1})
    .select({name: 1, author: 1});
    console.log(courses);
 }

 getCourses();