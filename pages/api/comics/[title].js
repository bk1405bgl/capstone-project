import dbConnect from "../../../db/connect";
import Comic from "../../../db/models/Comic";

export default async function handler(request, response) {
  await dbConnect();
  const { title } = request.query;

  if (request.method === "POST") {
    const comic = await Comic.insert(title);

    if (!comic) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(comic);
  }
}
