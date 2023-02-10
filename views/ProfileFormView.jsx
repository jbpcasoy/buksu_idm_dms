export default function ProfileFormView({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input type='text' placeholder='First Name' />
      <input type='text' placeholder='Middle Name' />
      <input type='text' placeholder='Last Name' />
      <input type='submit' value='Save' />
    </form>
  );
}
