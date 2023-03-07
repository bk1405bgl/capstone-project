export default function Form({ onAddFriend }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddFriend(data);

    event.target.reset();
    event.target.elements.fName.focus();
  }

  return (
    <>
      <h2>Freund hinzufügen</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fName">Name: </label>
          <input id="fName" type="text" name="fName" required />
        </div>
        <button type="submit">Speichern!</button>
      </form>
    </>
  );
}
