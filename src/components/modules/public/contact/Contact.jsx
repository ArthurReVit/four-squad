// Load contact components
import ContactForm from "./ContactForm";
import ContactInterest from "./ContactInterest";

// Load styles
import "./contact.css";

const Contact = (props) => {
  return (
    <div className="contact-wrapper">
      <ContactInterest
        handleServiceInterest={props.handleServiceInterest}
        interest={props.interest}
      />
      <ContactForm />
    </div>
  );
};

export default Contact;
