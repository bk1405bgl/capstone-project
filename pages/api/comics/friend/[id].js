import dbConnect from "../../../../db/connect";
import Comic from "../../../../db/models/Comic";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "PUT") {
    const comicToUpdate = await Comic.findByIdAndUpdate(id, {
      $unset: { friendId: "" },
    });
    response.status(200).json(comicToUpdate);
  }
}
