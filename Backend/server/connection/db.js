import mongoose from "mongoose";

const Connection = async () => {
  try {
    const URL = `mongodb://user:shivam@clone-inshorts-shard-00-00.syeco.mongodb.net:27017,clone-inshorts-shard-00-01.syeco.mongodb.net:27017,clone-inshorts-shard-00-02.syeco.mongodb.net:27017/INSHORTS?ssl=true&replicaSet=atlas-71am9j-shard-0&authSource=admin&retryWrites=true&w=majority`;

    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log('DAtabase Connected!!!!!!!!!!!')
  } catch (error) {
    console.log("Error while connecting", error);
  }
};

export default Connection;
