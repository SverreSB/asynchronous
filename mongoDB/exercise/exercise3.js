/**
 * Workinging with mongoDB. Objective: 
    Get all courses that contains "by" in title
    Price should be greater than 15
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
//Will console.log courses that are published and name contains 'by' or price >= 15
async function getCourses(){
   const courses = await Course
   .find( { isPublished: true} )
   .or([
      { name: /.*by.*/ }, 
      { price: { $gte: 15} }
   ]);
   console.log(courses);
}

getCourses();