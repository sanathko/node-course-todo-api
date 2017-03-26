//const MongoClient =  require('mongodb').MongoClient;
const { MongoClient, ObjectId } =  require('mongodb');

var obj = new ObjectId();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   "_id": new ObjectId("58d705e753380608bb643638")
  // }).toArray().then((docs) => {
  //   console.log('TODOS');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Todos').find({}).count().then((count) => {
    console.log(`TODOS count ${count}`);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  //db.close();
});
