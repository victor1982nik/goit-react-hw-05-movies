export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="query"
        autoComplete="off"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="May contain only letters, apostrophe, dash and spaces."
        required
        autoFocus
        placeholder="Search movies"
        //onChange={e => setQuery(e.target.value)}
        //value={query}
      />
      <button type="submit" aria-label="search button">
        Search
      </button>
    </form>
  );
};
