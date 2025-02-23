import "./ContactItem.css";

export default function ContactItem({ id, name, contact, onDelete }) {
  const onDeleteContact = () => {
    onDelete(id);
  };

  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{contact}</div>
      <button onClick={onDeleteContact}>🗑️ Remove</button>
    </div>
  );
}
