interface TaskProps {
    task: string;
    onDelete: () => void
}

const Task = ({task, onDelete}: TaskProps) => {
  return (
    <div>
        <span>{task}</span>
        <button onClick={onDelete}>Delete</button>
    </div>
  )
}

export default Task