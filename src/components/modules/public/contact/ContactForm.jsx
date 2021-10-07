import { useState } from "react";

// Load common components
import MainHeading from "../../../common/headings/MainHeading";
import TextField from "../../../common/formfields/Textfield";
import TextArea from "../../../common/formfields/TextArea";
import CommonButton from "../../../common/buttons/CommonButton";

// Load styles
import "./contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const { name, email, phone, message } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      // TODO: Create request and send info to backend

      // Temp onSubmit action
      console.log(formData);
      alert("Mensaje enviado con éxito!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      // TODO: Create error handler based on backend

      // Temp: Printing to console some generic error
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-form">
      <MainHeading text="Quiero que me contacten" variant="light" />
      <form onSubmit={(e) => handleSubmit(e)}>
        <TextField
          value={name}
          name="name"
          type="text"
          placeholder="Nombre*"
          onChange={(e) => handleChange(e)}
        />
        <TextField
          value={email}
          name="email"
          type="email"
          placeholder="Correo Eletrónico*"
          onChange={(e) => handleChange(e)}
        />
        <TextField
          value={phone}
          name="phone"
          type="number"
          placeholder="Teléfono*"
          onChange={(e) => handleChange(e)}
        />
        <TextArea
          value={message}
          name="message"
          placeholder="Mensaje"
          onChange={(e) => handleChange(e)}
        />
        <CommonButton variant="margin-top" text="enviar" />
      </form>
    </div>
  );
};

export default ContactForm;
