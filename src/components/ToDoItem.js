// import React from 'react';
// import styles from '../TodoItem.module.css';
// import { AiTwotoneDelete } from 'react-icons/ai';

// class ToDoItem extends React.Component {
//   state = {
//     editing: false,
//   };
//   handleEditing = () => {
//     this.setState({
//       editing: true,
//     });
//   };
//   handleUpdateDone = (event) => {
//     if (event.key === 'Enter') {
//       this.setState({ editing: false });
//     }
//   };
//   componentWillUnmount() {
//     console.log('Cleaning up...');
//   }
//   render() {
//     const completedStyle = {
//       fontStyle: 'italic',
//       color: '#595959',
//       opacity: 0.4,
//       textDecoration: 'line-through',
//     };

//     let viewMode = {};
//     let editMode = {};

//     if (this.state.editing) {
//       viewMode.display = 'none';
//     } else {
//       editMode.display = 'none';
//     }
//     return (
//       <div className="todoItems">
//         <li className={styles.item}>
//           <div onDoubleClick={this.handleEditing} style={viewMode}>
//             <input
//               className={styles.checkbox}
//               type="checkbox"
//               checked={this.props.todo.completed}
//               onChange={() => this.props.handleChangeProps(this.props.todo.id)}
//             ></input>
//             <span style={this.props.todo.completed ? completedStyle : null}>
//               {this.props.todo.title}
//             </span>
//             <button
//               className="Button"
//               onClick={() => this.props.deletedTodoProps(this.props.todo.id)}
//             >
//               <li>
//                 <AiTwotoneDelete size="20px" color="black" />
//               </li>
//             </button>
//           </div>
//           <input
//             type="text"
//             style={editMode}
//             value={this.props.todo.title}
//             className={styles.textInput}
//             onChange={(e) => {
//               this.props.setUpdate(e.target.value, this.props.todo.id);
//             }}
//             onKeyDown={this.handleUpdateDone}
//           />
//         </li>
//       </div>
//     );
//   }
// }

// export default ToDoItem;

//HOOKS

import React, { useState, useEffect } from 'react';
import styles from '../TodoItem.module.css';
import { AiTwotoneDelete } from 'react-icons/ai';

const ToDoItem = (props) => {
  const [editing, setEditing] = useState(false);

  const handleChange = () => {
    setEditing(true);
  };
  const handleUpdateDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const { completed, id, title } = props.todo;

  let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  useEffect(() => {
    return () => {
      console.log('Cleaning up...');
    };
  }, []);
  return (
    <div className="todoItems">
      <li className={styles.item}>
        <div onDoubleClick={handleChange} style={viewMode}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => props.handleChangeProps(id)}
          ></input>
          <span style={completed ? completedStyle : null}>{title}</span>
          <button className="Button" onClick={() => props.deletedTodoProps(id)}>
            <li>
              <AiTwotoneDelete size="20px" color="black" />
            </li>
          </button>
        </div>
        <input
          type="text"
          style={editMode}
          value={title}
          className={styles.textInput}
          onChange={(e) => {
            props.setUpdate(e.target.value, id);
          }}
          onKeyDown={handleUpdateDone}
        />
      </li>
    </div>
  );
};

export default ToDoItem;
