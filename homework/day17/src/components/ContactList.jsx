import "./ContactList.css";
import ContactItem from "./ContactItem";
import { memo, useContext } from "react";
import { ContactsStateContext } from "../App";

const ContactList = function ContactList() {
  const contacts = useContext(ContactsStateContext);
  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      <div>
        {contacts.map((contact) => {
          return <ContactItem key={contact.id} {...contact} />;
        })}
      </div>
    </div>
  );
};

export default memo(ContactList);
