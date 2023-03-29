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
      response.status(201).json({ status: "Comic hinzugefügt" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  } else if (request.method === "PUT") {
    try {
      const comicToUpdate = await Comic.findByIdAndUpdate(id, {
        $set: request.body,
      });
      response.status(200).json(comicToUpdate);
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
}
