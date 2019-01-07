/**
 * Workinging with mongoDB. Objective: 
    Get all frontend and backend courses that are published
    Sort by price, desc
    display only name and author
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
//Will console.log front- and backend courses that are published and price in desc order
async function getCourses(){
    const courses = await Course
    .find( { isPublished: true, tags: { $in: ['backend', 'frontend'] } } )
    .sort({price: -1})
    .select({name: 1, author: 1});
    console.log(courses);
}

getCourses();