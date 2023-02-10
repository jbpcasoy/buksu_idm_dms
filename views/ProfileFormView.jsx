export default function ProfileFormView({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input type='text' placeholder='First Name' />
      <br />
      <input type='text' placeholder='Middle Name' />
      <br />
      <input type='text' placeholder='Last Name' />
      <br />
      <input type='submit' value='Save' />
    </form>
  );
}
