// import React from 'react';
// import ToDoItem from './ToDoItem';

// class ToDoList extends React.Component {
//   render() {
//     return (
//       <ul>
//         {this.props.stavkeIzListe.map((todo) => (
//           <ToDoItem
//             key={todo.id}
//             todo={todo}
//             handleChangeProps={this.props.handleChangeProps}
//             deletedTodoProps={this.props.deletedTodoProps}
//             setUpdate={this.props.setUpdate}
//           />
//         ))}
//       </ul>
//     );
//   }
// }

// export default ToDoList;

//HOOKS

import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={props.handleChangeProps}
          deletedTodoProps={props.deletedTodoProps}
          setUpdate={props.setUpdate}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
