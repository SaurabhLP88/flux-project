const ActionTypes = {
    ADD_TODO: 'ADD_TODO',
    REMOVE_TODO: 'REMOVE_TODO'
}

// Action Creators
const TodoActions = {
    addTodo: (text) => ({
        type: ActionTypes.ADD_TODO,
        payload: {text} // added for payloads
    }),

    removeTodo: (id) => ({
        type: ActionTypes.REMOVE_TODO,
        payload: {id} // added for payloads
    })
}

// Dispatch
function dispatch(action) {
    // Logic
    TodoStore.handleActions(action); // added for payloads
    console.log('Dispatched action: ', action);
}

//const newTodoAction = TodoActions.addTodo('Buy Groceries');
//dispatch(newTodoAction);

const TodoStore = {
    todos: [],

    // Dispatcher register method
    register(callback) {
        this.callback = callback;
    },

    handleActions(action) {
        switch(action.type) {
            case ActionTypes.ADD_TODO:
                this.todos.push({text: action.payload.text}); // added for payloads
                this.callback();
                break;
            case ActionTypes.REMOVE_TODO:
                const idToRemove = action.payload.id; // added for payloads
                this.todos = this.todos.filter(
                    (todo, indexing) => indexing !== idToRemove
                );
                this.callback();
                break;
            default:
                break;
        }
    }
}

TodoStore.register(() => {
    console.log(`Todos updated: ${TodoStore.todos}`)
});

dispatch(TodoActions.addTodo('Go to park'));
dispatch(TodoActions.addTodo('Clean clothes'));
dispatch(TodoActions.removeTodo(0));