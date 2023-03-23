import mongoose from "mongoose";

const { Schema } = mongoose;

const comicSchema = new Schema({
  title: { type: String, required: true },
  rentToFriendId: { type: String, required: true },
  description: { type: String, required: true },
  eanupcisbn: { type: String, required: true },
  apiId: { type: Number, required: true },
});

const Comic = mongoose.models.Comic || mongoose.model("Comic", comicSchema);

export default Comic;
