import dbConnect from "../../../db/connect";
import Friend from "../../../db/models/Friend";

export default async function handler(request, response) {
  await dbConnect();
  const { name } = request.query;

  if (request.method === "POST") {
    const friend = await Friend.insert(friendName);

    if (!friend) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(friend);
  }
}
