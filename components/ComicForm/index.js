export default function ComicForm({ onAddComic }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddComic(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Hinzufügen</button>
    </form>
  );
}
