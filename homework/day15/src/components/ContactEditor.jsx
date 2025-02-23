import "./ContactEditor.css";
import { useState, useRef } from "react";
export default function ContactEditor({ onCreate }) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const nameRef = useRef();
  const contactgRef = useRef();

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeContact = (e) => {
    setContact(e.target.value);
  };

  const onSubmit = () => {
    if (name === "") {
      nameRef.current.focus();
      return;
    } else if (contact === "") {
      contactgRef.current.focus();
      return;
    }
    onCreate({ name: name, contact: contact });
    setName("");
    setContact("");
  };

  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input
          ref={nameRef}
          onChange={onChangeName}
          value={name}
          className="name"
          placeholder="이름 ..."
        />
        <input
          value={contact}
          ref={contactgRef}
          onChange={onChangeContact}
          className="contact"
          placeholder="연락처(이메일) ..."
        />
      </div>
      <button onClick={onSubmit}>Add</button>
    </div>
  );
}
