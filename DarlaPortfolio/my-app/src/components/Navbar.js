// // Navbar.js
// import { Component } from "react";
// import "../css/navbar.css";
// import { MenuItems } from "./MenuItems";
// import { Link } from "react-router-dom";
// import { AuthContext } from '../pages/AuthContext';  // Ensure the path is correct

// class Navbar extends Component {
//   state = { clicked: false };

//   handleClick = () => {
//     this.setState({ clicked: !this.state.clicked });
//   };

//   render() {
//     return (
//       <AuthContext.Consumer>
//         {({ user }) => (
//           <nav className="NavbarItems">
//             <h1 className="navbar-logo"> Hi, I'm Darla  </h1>
            
//             <div className="menu-icons" onClick={this.handleClick}>
//               <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
//             </div>
            
//             <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
//               {MenuItems.map((item, index) => (
//                 <li key={index}>
//                   <Link className={item.cName} to={item.url}>
//                     <i className={item.icon}></i>
//                     {item.title}
//                   </Link>
//                 </li>
//               ))}
//               <li>
//                 {user ? (
//                   <span className="nav-links">Hi {user.username}!</span>
//                 ) : (
//                   <Link to="/login" className="nav-links">Login</Link>
//                 )}
//               </li>
//             </ul>
//           </nav>
//         )}
//       </AuthContext.Consumer>
//     );
//   }
// }

// export default Navbar;

import { Component } from "react";
import "../css/navbar.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import { AuthContext } from '../pages/AuthContext';  // ensure here the path is correct

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <AuthContext.Consumer>
        {({ user }) => (
          <nav className="NavbarItems">
            <div className="navbar-left">
              <h1 className="navbar-logo">Hi, I'm Darla</h1>
              <div className="social-links">
                <a href="https://linkedin.com/in/darla-valderrama" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/valderramadi" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="mailto:darlavalderrama5@gmail.com">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
            
            <div className="menu-icons" onClick={this.handleClick}>
              <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            
            <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
              {MenuItems.map((item, index) => (
                <li key={index}>
                  <Link className={item.cName} to={item.url}>
                    <i className={item.icon}></i>
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                {user ? (
                  <span className="nav-links">Hi {user.username}!</span>
                ) : (
                  <Link to="/login" className="nav-links">Login</Link>
                )}
              </li>
            </ul>
          </nav>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default Navbar;
