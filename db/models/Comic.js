import mongoose from "mongoose";

const { Schema } = mongoose;

const comicSchema = new Schema({
  title: { type: String, required: true },
  rentToFriendId: { type: String },
  description: { type: String },
  ean: { type: String },
  upc: { type: String },
  isbn: { type: String },
  images: [
    {
      path: { type: String },
      extension: { type: String },
    },
  ],
  id: { type: Number, required: true },
  friendId: { type: Schema.Types.ObjectId },
});

const Comic = mongoose.models.Comic || mongoose.model("Comic", comicSchema);

export default Comic;
