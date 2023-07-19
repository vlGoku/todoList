export default function View() {
  const createElement = (tag, className) => {
    const element = document.createElement(tag);
    className && element.classList.add(className);
    return element;
  };
  const getElement = (selector) => {
    const element = document.querySelector(selector);
    return element;
  };

  const configure = () => {
    //create Title
    const root = getElement("#root");
    const title = createElement("h1", "title");
    title.textContent = "Todos";
    //create Form
    const form = createElement("form");
    const input = createElement("input");
    input.type = "text";
    input.placeholder = "Add todo";
    input.name = "todo";
    //create Submit Button
    const submitButton = createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Add";
    //create todo list
    const todoList = createElement("ul", "todo-list");
    //append element
    form.append(input, submitButton);
    root.append(title, form, todoList);
  };
  configure();

  const renderTodos = (todos) => {
    //delete all todos
    const todoList = getElement(".todo-list");
    todoList.innerHTML = "";
    //show message if there are no todos
    if (todos.length === 0) {
      const message = createElement("p", "message");
      message.textContent = "Sorry, there are no todos!";
      todoList.append(message);
      return;
    } else {
      //render Todos
      todos.forEach((todo) => {
        //create list element
        const listElement = createElement("li");
        listElement.id = todo.id;

        //create Checkbox to toggle todos
        const checkbox = createElement("input");
        checkbox.type = "checkbox";
        checkbox.checkbox = todo.completed;

        //span with content editable text
        const span = createElement("span", "editable");
        span.contentEditable = true;

        //strike through completed todos
        if (todo.completed) {
          const strike = createElement("s");
          strike.textContent = todo.text;
          span.appendChild(strike);
        } else {
          span.textContent = todo.text;
        }

        //create delete button
        const deleteButton = createElement("button", "delete");
        deleteButton.textContent = "Delete";

        //append elements to listElement
        listElement.append(checkbox, span, deleteButton);

        //append ListElement to todoList
        todoList.append(listElement);
      });
    }
  };

  return { createElement, getElement, renderTodos };
}
