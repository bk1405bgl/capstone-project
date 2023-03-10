export default function Form({ onAddFriend }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddFriend(data);

    event.target.reset();
    event.target.elements.friendName.focus();
  }

  return (
    <>
      <h4>Freund hinzufügen</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="friendName">Name: </label>
          <input type="text" name="friendName" required />
        </div>
        <button type="submit">Speichern!</button>
      </form>
    </>
  );
}
