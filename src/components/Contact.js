import "../styles/Contact.css";

const Contact = () => {
  return (
    <div>
      <form
        className="contactForm"
        action="https://formsubmit.co/cyprian.gomes@live.co.uk"
        method="POST"
      >
        <h2> Tell me more about your project</h2>
        <input
          type="text"
          name="name"
          placeholder="Full name"
          className="formField"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="formField"
          required
        />
        <textarea
          type="text"
          name="message"
          placeholder="Your message"
          className="formMessage"
          rows="5"
          required
        />
        <button className="formBtn" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
