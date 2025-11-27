
  function TodoList() {
  const todos = ["Buy groceries", "Study React" , "Go for a walk"];
  // const todos = []; to test the "No tasks" message

  return (
    <>
      <h2>My Todos</h2>

      {todos.length === 0 ? (
        <p>No tasks</p>
      ) : (
        <ul>
          {todos.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default TodoList;
