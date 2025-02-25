import "./ContactList.css";
import ContactItem from "./ContactItem";
import { memo } from "react";

const ContactList = function ContactList({ contacts, onDelete }) {
  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      <div>
        {contacts.map((contact) => {
          return (
            <ContactItem key={contact.id} {...contact} onDelete={onDelete} />
          );
        })}
      </div>
    </div>
  );
};

export default memo(ContactList);
