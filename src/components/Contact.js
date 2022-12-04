const Contact = () => {
  return (
    <div>
      <h2> Contact</h2>
      <form
        action="https://formsubmit.co/cyprian.gomes@live.co.uk"
        method="POST"
      >
        <input type="text" name="name" required />
        <input type="email" name="email" required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
