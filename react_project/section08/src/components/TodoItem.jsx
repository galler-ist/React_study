import "./TodoItem.css";
const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onDeleteItem = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input
        checked={isDone}
        onChange={onChangeCheckbox}
        readOnly
        type="checkbox"
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onDeleteItem}>삭제</button>
    </div>
  );
};

export default TodoItem;
