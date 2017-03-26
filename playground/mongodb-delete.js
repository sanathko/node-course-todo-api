//const MongoClient =  require('mongodb').MongoClient;
const { MongoClient, ObjectId } =  require('mongodb');

var obj = new ObjectId();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').deleteMany({text: 'Enjoy life'}).then((results) => {
  //   console.log(results);
  // });

  db.collection('Todos').findOneAndDelete({text: 'Test'}).then((results) => {
    console.log(results);
  });

  //db.close();
});
