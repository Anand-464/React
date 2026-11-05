function TaskList(props) {

    return (
      <div>
        <h3>My Tasks</h3>
        <ul>
          {props.tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
        <p className="message">{props.message}</p>
      </div>
    )
}

export default TaskList