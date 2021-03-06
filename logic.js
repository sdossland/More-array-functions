/**
 * Created by sophia on 3/8/17.
 */
const people = [
  {name: 'Wes', year: 1988},
  {name: 'Kait', year: 1986},
  {name: 'Irv', year: 1910},
  {name: 'Lux', year: 2015}
];

const comments = [
  {text: 'Love this!', id: 523423},
  {text: 'Super good', id: 823423},
  {text: 'You are the best', id: 2039842},
  {text: 'Ramen is my fav food ever', id: 123523},
  {text: 'Nice Nice Nice!', id: 542328}
];

//1. Is at least one person 19?
const adults = people.some(function(person) {
  const currentYear = new Date().getFullYear();
  return (currentYear - person.year) >= 19;
});
console.log(adults); //works! returns 'true'

//2. Is everyone 19?
const allAdults = people.every(function(person) {
  const currentYear = new Date().getFullYear();
  return (currentYear - person.year) >= 19;
});
console.log(allAdults); //works! returns 'false'

//3. Find the comment with an ID of '823423'
const specificComment = comments.find(function(comment) {
    if (comment.id === 823423) {
      return true;
    }
  }).text;
console.log(specificComment); //works! returns 'Super good'

//4. Delete the comment with this ID
const index = comments.findIndex(function(comment) {
  return comment.id === 823423; //returns index in array
});
const deletedComment = comments.splice(index, 1);
console.table(comments); //the .splice() method alters the original array
