export default function Model() {
  const _todos = [
    { id: 1, text: "Learn Javascript", completed: true },
    { id: 2, text: "Seek for a job!", completed: false },
  ];

  const getTodos = () => _todos;

  const addToDo = (text) => {
    const todo = {
      id: _todos.length + 1,
      text,
      completed: false,
    };
    _todos.push(todo);
  };

  const removeTodo = (id) => {
    _todos = _todos.filter((todo) => todo.id !== id);
  };

  const editToDo = (id, text) => {
    _todos = _todos.map((todo) => {
      if (todo.id !== id) return todo;
      return { ...todo, text };
    });
  };

  const toggleTodo = (id) => {
    _todos = _todos.map((todo) => {
      if (todo.id !== id) return todo;
      return { ...todo, completed: !todo.completed };
    });
  };
  return { addToDo, removeTodo, editToDo, toggleTodo, getTodos };
}
