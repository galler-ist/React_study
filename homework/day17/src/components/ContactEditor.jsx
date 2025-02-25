import "./ContactEditor.css";
import { useState, useRef, memo, useCallback, useContext } from "react";
import { ContactsDispatchContext } from "../App";
const ContactEditor = function ContactEditor() {
  const { onCreate } = useContext(ContactsDispatchContext);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const nameRef = useRef();
  const contactRef = useRef();

  const onChangeName = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const onChangeContact = useCallback((e) => {
    setContact(e.target.value);
  }, []);

  const onSubmit = useCallback(() => {
    if (name === "") {
      nameRef.current.focus();
      return;
    } else if (contact === "") {
      contactRef.current.focus();
      return;
    }
    onCreate(name, contact);
    setName("");
    setContact("");
  }, [name, contact, onCreate]);

  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input
          name="name"
          ref={nameRef}
          onChange={onChangeName}
          value={name}
          className="name"
          placeholder="이름 ..."
        />
        <input
          name="contact"
          value={contact}
          ref={contactRef}
          onChange={onChangeContact}
          className="contact"
          placeholder="연락처(이메일) ..."
        />
      </div>
      <button onClick={onSubmit}>Add</button>
    </div>
  );
};

export default memo(ContactEditor);
