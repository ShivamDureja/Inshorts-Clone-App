import { data } from "./Constants/Data.js";
import News from "./Modal/news.js";

const DefaultData = async () => {
  try {
    await News.deleteMany({})
    await News.insertMany(data);
    console.log("Data Imported !!");
  } catch (e) {
    console.log('ERROR!!!', e.message);
  }
}

export default DefaultData;