import mongoose from "mongoose";

export default async function connect2DB() {
   try {
      const { connection } = await mongoose.connect(process.env.MONGODB_URI_CLOUD as string, {
         dbName: process.env.DB_NAME, //data base name from .env
      });
      console.log(`DB successfully connected 👍 on : `, connection.host);
   } catch (error) {
      console.log({ error });
   }
}
