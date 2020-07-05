import React, { Component } from "react";
import NavResponsive from "./NavResponsive";
import "./Nav.scss";

export default class Nav extends Component {
  state = {
    matchesScreen: window.matchMedia("(min-width: 1068px)").matches
  };

  componentDidMount() {
    const handler = e => this.setState({ matchesScreen: e.matches });
    window.matchMedia("(min-width: 1068px)").addListener(handler);
  }
  render() {
    const { menuNav = [], menuLinks = [], logo } = this.props;
    const loc = window.location.pathname;

    const NavMain = () => {
      return (
        <nav className={`nav-default ${loc.includes('/mes-situations') ? `bg-nav-blue` : `nav-default`} ${loc.includes('/mes-situations/') ? `bg-nav-white` : `nav-default`}`}>
          <div className="container">
            <ul className="flex-menu">
              <h2 className="logo white-col">{logo}</h2>
              <div className="flex-items">
                {menuNav.map((list, index) => {
                  const linksUrl = menuLinks.map(link => {
                    return link;
                  });

                  return (
                    <li key={index} className="list-items">
                      <a
                        href={linksUrl[index]}
                        className={`${loc.includes('/mes-situations/') ? `anchors uppercase orange-col-anchors` : `anchors uppercase white-col`} `}
                      >
                        {list}
                      </a>
                    </li>
                  );
                })}
              </div>
            </ul>
          </div>
        </nav>
      );
    };

    return (
      <div>
        {this.state.matchesScreen && <NavMain />}
        {!this.state.matchesScreen && (
          <NavResponsive
            menuNav={["Accueil", "Alphabets versets", "Mes situations"]}
            menuLinks={["/", "/alphabets-versets", "/mes-situations"]}
          />
        )}
      </div>
    );
  }
}
