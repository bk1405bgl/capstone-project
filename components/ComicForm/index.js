import useSWR from "swr";

export default function ComicForm({ onAddComic }) {
  const comics = useSWR("/api/comics");

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const comicData = Object.fromEntries(formData);

    const response = await fetch("/api/comics", {
      method: "POST",
      body: JSON.stringify(comicData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      await response.json();
      comics.mutate();
      event.target.reset();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Hinzufügen</button>
    </form>
  );
}
