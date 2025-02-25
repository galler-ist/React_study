import "./ContactItem.css";
import { memo, useContext } from "react";
import { ContactsDispatchContext } from "../App";
const ContactItem = function ContactItem({ id, name, contact }) {
  const { onRemove } = useContext(ContactsDispatchContext);
  const onRemoveContact = () => {
    onRemove(id);
  };

  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{contact}</div>
      <button onClick={onRemoveContact}>🗑️ Remove</button>
    </div>
  );
};

export default memo(ContactItem);
