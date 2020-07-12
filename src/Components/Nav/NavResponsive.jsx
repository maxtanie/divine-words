import React, { Component } from "react";
import "./NavResponsive.scss";

export default class NavResponsive extends Component {
  state = {
    burgerActive: false
  };

  burgerMenu = () => {
    this.setState({
      burgerActive: !this.state.burgerActive
    });
  };
  render() {
    const { menuNav = [], menuLinks = [], logo } = this.props;
    const { burgerActive } = this.state;
    const loc = window.location.pathname;
    return (
      <div className="res-nav">
        <div className={`icon-res-menu ${loc.includes('/mes-situations') ? `bg-nav-responsive-blue` : `icon-res-menu`} ${loc.includes('/mes-situations/') ? `bg-nav-responsive-white` : `icon-res-menu`}`} onClick={this.burgerMenu}>
          <div className={`${loc.includes('/mes-situations/') ? `icon-menu-res orange-bgc` : `icon-menu-res white-bg`}`}></div>
          <div className={`${loc.includes('/mes-situations/') ? `icon-menu-res orange-bgc` : `icon-menu-res white-bg`}`}></div>
          <div className={`${loc.includes('/mes-situations/') ? `icon-menu-res orange-bgc` : `icon-menu-res white-bg`}`}></div>

        </div>
        <nav className={`nav-responsive ${burgerActive ? "show" : "hide"} `}>
          <ul className="">
          <div className="logo">
                <a href="/"><img src={logo} alt="logo"/></a>
              </div>
            <div className="list-items-res">
              {menuNav.map((list, index) => {
                const linksUrl = menuLinks.map(link => {
                  return link;
                });

                return (
                  <li key={index} className="list-items">
                    <a
                      href={linksUrl[index]}
                      className="anchors uppercase white-col"
                    >
                      {list}
                    </a>
                  </li>
                );
              })}
            </div>
          </ul>
          <div className="closed" onClick={this.burgerMenu}>
          <i class="close hairline closed-icon"></i>
          </div>
        </nav>
      </div>
    );
  }
}
