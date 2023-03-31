export default function FriendForm({ onAddFriend }) {
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
      <form
        onSubmit={handleSubmit}
        name="friendForm"
        role="form"
        aria-label="name"
      >
        <div>
          <label htmlFor="friendName" aria-label="name">
            Name:{" "}
          </label>
          <input type="text" name="friendName" required />
        </div>
        <button type="submit" aria-label="button">
          Speichern!
        </button>
      </form>
    </>
  );
}
