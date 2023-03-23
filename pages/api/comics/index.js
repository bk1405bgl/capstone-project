import dbConnect from "../../../db/connect";
import Comic from "../../../db/models/Comic";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const Comics = await Comic.find();
    return response.status(200).json(Comics);
  } else if (request.method === "POST") {
    try {
      const comicData = request.body;
      const comic = new Comic(comicData);
      await comic.save();
      return response.status(201).json({ status: "Comic hinzugefügt" });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}