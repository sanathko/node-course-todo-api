const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

const {ObjectId} = require('mongodb');

//var id = '58d8f9316e286ee543616423';
//var id = '58d8f9317777777777543616423';//invalid id

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// if (!ObjectId.isValid()) {
//   console.log('Invalid object id');
// }
//
// Todo.findById(id).then(todo => {
//   if(!todo) {
//     return console.log('Id not found..');
//   }
//   console.log('Todo by id ', todo);
// }).catch(e => console.log(e));

// User.findById('11111').then((user) => {
//   if (!user) {
//     return console.log('Unable to find user');
//   }
// }, e => {
//   console.log(e);
// });
