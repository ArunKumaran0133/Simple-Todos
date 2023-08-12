import './index.css'

const TodoItem = props => {
  const {eachList, deleteTodo} = props
  const {title, id} = eachList

  const onDeleteBtn = () => {
    deleteTodo(id)
  }

  return (
    <li className="items-container">
      <p className="title">{title}</p>
      <button type="button" className="button" onClick={onDeleteBtn}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
