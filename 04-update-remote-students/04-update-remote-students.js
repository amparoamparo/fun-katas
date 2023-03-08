/*

Updating remote students

The challenge is to implement a function that updates missing location info for students attending Northcoders.

This function will be called with:
- an array of objects (each object representing a student on a Northcoders bootcamp)

Some of the students have a specified location property which is a string of the office they will be attending during their time on the course, but for some students that property is missing.

Your function should return a new array, where all objects that were missing a location have been updated so that they now have a location property with a value of "remote". All other properties should remain as they were.

This function must be a pure function, i.e. it should have no side effects, and your test suite should reflect this.

*/

function updateRemoteStudents(students) {
  updatedStudents = [];
  
  if (students.length === 0) {
    return updatedStudents;
  }

  students.forEach(student => {
    if (student.hasOwnProperty('location')) {
      updatedStudents.push(student);
    } else {
      student.location = "remote";
      updatedStudents.push(student);
    }
  });
  
  return updatedStudents;
}

module.exports = updateRemoteStudents;
