
import React, { Component } from "react";
import "../css/navbar.css";
import { MenuItems } from "./MenuItems";

class Navbar extends Component {
  state = {
    clicked: false,
    isSpotifyVisible: false, // State to toggle visibility (not unmounting)
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  toggleSpotifyVisibility = () => {
    this.setState({ isSpotifyVisible: !this.state.isSpotifyVisible }); // Toggle visibility
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
                href={`#${item.url}`} // Hash-based scrolling
              >
                <i className={item.icon}></i>
                {item.title}
              </a>
            </li>
          ))}
          {/* Music Icon */}
          <li onClick={this.toggleSpotifyVisibility} className="music-icon">
            <i className="fas fa-music"></i> Music
          </li>
        </ul>

        {/* Spotify Player Popup */}
        <div
          className={`spotify-popup ${
            this.state.isSpotifyVisible ? "visible" : "hidden"
          }`}
        >
          <iframe
            style={{ borderRadius: "10px" }}
            src="https://open.spotify.com/embed/playlist/37sLgz32hXQYT5ORDzBwCJ?utm_source=generator"
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