import mongoose from "mongoose";

const { Schema } = mongoose;

const friendSchema = new Schema({
  friendName: { type: String, required: true },
  rentComicId: { type: Number, required: true },
});

const Friend = mongoose.models.Friend || mongoose.model("Friend", friendSchema);

export default Friend;
