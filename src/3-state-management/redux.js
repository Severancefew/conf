export const ADD_TODO = () => ({
  type: 'ADD_TODO',
});

const initialState = {
  todoList: [],
  todoValue: '',
};

export const todoReducer = (state = initialState, aciton) => {
  switch (action.payload) {
    case 'ADD_TODO':
      return {
        ...state,
        todoList: [...state.todoList, { name: state.todoValue, done: false }],
        todoValue: '',
      };
  }
};

function mapStateToProps(state) {
  return {
    todoList: state.todoList,
  };
}

export default connect(
  mapStateToProps,
  { addTodo },
)(Component);
