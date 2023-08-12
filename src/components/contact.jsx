import React, { useState } from "react";
import "./contact.css";
import AllImages from "../images/imagemudule";

const Contact = () => {
  // const [inputs, setInput] = useState({ Name: "", Email: "", Description: "" });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  console.log(name, email, description);
  const WhatsAppImage = [AllImages.WhatsAppButtonGreenLarge];
  return (
    <div>
      <form>
        <label className="form_sheet">Name :</label>
        <input
          value={name}
          type="text"
          id="input_name"
          placeholder="enter-name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label className="form_sheet">Email :</label>
        <input
          value={email}
          type="email"
          id="input_email"
          placeholder="enter-email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label className="form_sheet">Description :</label>
        <textarea
          value={description}
          id="input_description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button className="submit_btn">Submit</button>
      </form>
      <a aria-label="Chat on WhatsApp" href="https://wa.me/8105962861">
        {" "}
        <img
          alt="Chat on WhatsApp"
          src={WhatsAppImage}
          className="whatsapp_btn"
        />{" "}
      </a>
    </div>
  );
};

export default Contact;
