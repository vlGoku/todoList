export default function Controller(model, view) {
  const onTodoChange = (todos) => {
    view.renderTodos(todos);
  };
  onTodoChange(model.getTodos());

  //handle add Todo
  const _handleAddTodo = () => {
    model.addTodo(todoText);
  };

  //handle remove Todo
  const _handleRemoveTodo = (id) => {
    model.removeTodo(id);
  };

  //handle edit todo
  const _handleEditTodo = (id, text) => {
    model.editTodo(id, text);
  };

  //handle toggle todo
  const _handleToggleTogo = (id) => {
    model.toggelTodo(id);
  };

  return { model };
}
