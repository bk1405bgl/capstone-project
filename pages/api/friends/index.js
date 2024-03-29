import dbConnect from "../../../db/connect";
import Friend from "../../../db/models/Friend";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const Friends = await Friend.find();
    return response.status(200).json(Friends);
  } else if (request.method === "POST") {
    try {
      const friendData = request.body;
      const friend = new Friend(friendData);
      await friend.save();
      response.status(201).json({ status: "Freund hinzugefügt" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
}
