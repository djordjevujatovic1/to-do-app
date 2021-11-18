// import React from 'react';

// const Navbar = () => {
//   return (
//     <div className="navbarContainer">
//       <h1>Navbar</h1>
//       <ul>
//         <li className="home">
//           <a href="url">Home</a>
//         </li>

//         <li className="about">
//           <a href="url">About Me</a>
//         </li>

//         <li className="contact">
//           <a href="url">Contact Me</a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;

import React from 'react';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/about',
      text: 'About',
    },
  ];

  return (
    <nav className="navBar">
      <h1>Navbar</h1>
      <ul>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <NavLink to={link.path} activeClassName="active-link" exact>
                {link.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
