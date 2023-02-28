import { state } from "./state.js";

const getTodo = () => {
    const todoList = JSON.parse(localStorage.getItem('pomodoro') || '[]');

    if (!todoList.length) {
        todoList.push({
            id: 'default',
            pomodoro: 0,
            title: 'Pomodoro Title',
        })
    }
    
    return todoList;
}

export const initToDo = () => {
    const todoList = getTodo();
    state.activeTodo = todoList[0];

    showTodo();
}