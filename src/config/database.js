import mongoose from 'mongoose';
  import constants from './constants';

 //Removes the warning with promises
 mongoose.Promise = global.Promise;
 //console.log(constants.MONGO_URL)
 const config = {
  autoIndex: false,
  useNewUrlParser: true,
  useUnifiedTopology:true
};

 //Connect the db with the url provided
 try {
  mongoose.connect(constants.MONGO_URL,config)
 } catch (err) {
     mongoose.createConnection(constants.MONGO_URL);

 }
 mongoose.connection.once('open', () =>
  console.log('MongoDB Running')).on('error',
  e => {
     throw e;
 })
