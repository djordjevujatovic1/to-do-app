// import React from 'react';
// import react from 'react';

// class InputTodo extends react.Component {
//   state = {
//     title: '',
//   };
//   onChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };
//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.addTodoProps(this.state.title);
//     this.setState({
//       title: '',
//     });
//   };
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} className="form-container">
//         <input
//           className="input-text"
//           type="text"
//           placeholder="Add Todo..."
//           value={this.state.title}
//           name="title"
//           onChange={this.onChange}
//         />
//         <button className="input-submit">Submit</button>
//       </form>
//     );
//   }
// }

// export default InputTodo;

// //   render() {
// //     return (
// //       <div className="InputTodo">
// //            <h2>Ovo je Input!</h2>
// //           <button
// //             type="submit"
// //             className="fill submit--btn"
// //             onClick={() => this.props.klik()}
// //           >
// //             Dodaj
// //           </button>
// //           <input

// //             type="text"
// //             id="new-todo-input"
// //             className="input_lg"
// //             name="text"
// //             autoComplete="off"
// //           />
// //         </div>
// //     );
// //   }
// // }
// // export default InputTodo;

// // const InputTodo = () => {
// //     return (

// //         <div className="InputTodo">
// //         <h2>Ovo je Input!</h2>
// //     </div>
// //     )
// // }

// // export default InputTodo

//HOOKS

import React, { useState } from 'react';

const InputToDo = (props) => {
  const [title, setTitle] = useState('');

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      props.addTodoProps(title);
      setTitle('');
    } else {
      alert('Please write item');
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={title}
        name="title"
        onChange={onChange}
      />
      <button className="input-submit">Submit</button>
    </form>
  );
};

export default InputToDo;
