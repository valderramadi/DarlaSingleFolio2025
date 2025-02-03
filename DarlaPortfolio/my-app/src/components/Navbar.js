import React, { Component } from "react";
import "../css/navbar.css";
import { MenuItems } from "./MenuItems";

class Navbar extends Component {
  state = {
    clicked: false,
    isSpotifyVisible: false, 
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  toggleSpotifyVisibility = () => {
    this.setState({ isSpotifyVisible: !this.state.isSpotifyVisible }); 
  };

  render() {
    return (
      <nav className="NavbarItems">
        <div className="navbar-left">
          <h1 className="navbar-logo">DV</h1>
          <div className="social-links">
            <a
              href="https://linkedin.com/in/darla-valderrama"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/valderramadi"
              target="_blank"
              rel="noopener noreferrer"
            >
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
              <a
                className={item.cName}
                href={`#${item.url}`} // holds the hash-based scrolling
              >
                <i className={item.icon}></i>
                {item.title}
              </a>
            </li>
          ))}
          {/* music icon home */}
          <li onClick={this.toggleSpotifyVisibility} className="music-icon">
            <i className="fas fa-music"></i> Music
          </li>
        </ul>

        {/* spotify player popup inserted here!! */}
        <div
          className={`spotify-popup ${
            this.state.isSpotifyVisible ? "visible" : "hidden"
          }`}
        >
          <iframe
            style={{ borderRadius: "10px" }}
            src= "https://open.spotify.com/embed/playlist/6x9mkRpNdXlM54AKhXhnAr?utm_source=generator&theme=0" 
            width="300"
            height="380"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </nav>
    );
  }
}

export default Navbar;