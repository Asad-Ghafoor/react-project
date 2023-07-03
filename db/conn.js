const mongoose = require('mongoose');
const db = process.env.Database;
const intialDbConnection = async () => {
    try {
      console.log("connecting?")
      await mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      console.log("db connected")
      // await mongoose.disconnect()
      // console.log("test complete. db disconnected")
    }
    catch (error) {
      console.error("not connected");
      console.log(error);
    }
  }
// mongoose.connect(db,{
//     useNewUrlParser:true
// }
//     ).then(() => {
//         console.log('connection successful');
//     }).catch((err) => {
//         console.log('no connection successful');
//     })
intialDbConnection();