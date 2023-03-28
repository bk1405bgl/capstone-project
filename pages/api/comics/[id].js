import dbConnect from "../../../db/connect";
import Comic from "../../../db/models/Comic";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "POST") {
    const comic = await Comic.insert(id);

    if (!comic) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(comic);
  }
  if (request.method === "PUT") {
    const comicToUpdate = await Comic.findByIdAndUpdate(id, {
      $set: request.body,
    });
    response.status(200).json(comicToUpdate);
  }
  if (request.method === "DELETE") {
    const comicToDelete = await Comic.findByIdAndDelete(id);
    response.status(200).json(comicToDelete);
  }
}
