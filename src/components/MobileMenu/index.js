import React, { Component } from "react";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./style.css";

const menus = [
  {
    id: 1,
    title: "Home",
    link: "/home",
  },

  {
    id: 2,
    title: "About",
    link: "/about",
  },

  {
    id: 3,
    title: "Projects",
    link: "/projects",
    // submenu: [
    //   {
    //     id: 31,
    //     title: "Sylvan-Retreat",
    //     link: "/sylvan-retreat",
    //   },
    //   {
    //     id: 32,
    //     title: "Eco-Nest",
    //     link: "/eco-nest",
    //   },
    // ],
  },
  {
    id: 6,
    title: "Careers",
    link: "/careers",
    submenu: [
      {
        id: 61,
        title: "BDE",
        link: "/bdeCareerForm",
      },
      {
        id: 62,
        title: "BDE-Intern",
        link: "/bdeIntern",
      },
    ],
  },
  // {
  //   id: 4,
  //   title: "Service",
  //   link: "/service",
  //   submenu: [
  //     {
  //       id: 41,
  //       title: "Service",
  //       link: "/service",
  //     },
  //     {
  //       id: 42,
  //       title: "Service Details",
  //       link: "/service-single",
  //     },
  //   ],
  // },
  // {
  //   id: 7,
  //   title: "Pages",
  //   link: "/",
  //   submenu: [
  //     {
  //       id: 71,
  //       title: "Portfolio",
  //       link: "/portfolio",
  //     },
  //     {
  //       id: 75,
  //       title: "Team",
  //       link: "/team",
  //     },
  //     {
  //       id: 76,
  //       title: "Faq",
  //       link: "/faq",
  //     },

  //     {
  //       id: 79,
  //       title: "Contact",
  //       link: "/contact",
  //     },
  //     {
  //       id: 70,
  //       title: "Error",
  //       link: "/404",
  //     },
  //   ],
  // },

  // {
  //   id: 5,
  //   title: "Blog",
  //   link: "/blog",
  //   submenu: [
  //     {
  //       id: 51,
  //       title: "Blog",
  //       link: "/blog",
  //     },
  //     {
  //       id: 52,
  //       title: "Blog Single",
  //       link: "/blog-single",
  //     },
  //   ],
  // },
  {
    id: 88,
    title: "Contact",
    link: "/contact",
  },
];

export default class MobileMenu extends Component {
  state = {
    isMenuShow: false,
    isOpen: 0,
  };

  menuHandler = () => {
    this.setState({
      isMenuShow: !this.state.isMenuShow,
    });
  };

  setIsOpen = (id) => () => {
    this.setState({
      isOpen: id === this.state.isOpen ? 0 : id,
    });
  };

  render() {
    const { isMenuShow, isOpen } = this.state;
    return (
      <div className="responsiveMenu">
        <nav
          id="mobileMenu"
          className={`mobileMenu ${isMenuShow ? "active" : ""}`}
        >
          <ul className="responsivemenu">
            {menus.map((item) => {
              return (
                <li key={item.id}>
                  {item.submenu ? (
                    <p
                      onClick={this.setIsOpen(item.id)}
                      aria-expanded={isMenuShow}
                    >
                      {item.title}
                      {item.submenu ? "" : ""}
                    </p>
                  ) : (
                    <Link to={item.link}>{item.title}</Link>
                  )}

                  {item.submenu ? (
                    <Collapse in={item.id === isOpen}>
                      <ul className="sub-menu">
                        {item.submenu.map((submenu) => (
                          <li key={submenu.id}>
                            <Link className="active" to={submenu.link}>
                              {submenu.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </Collapse>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div
          className={`spinner-master ${isMenuShow ? "active" : ""}`}
          onClick={this.menuHandler}
          
        >
          <div id="spinner-form"   className="spinner-spin">
            <div style={{ backgroundColor: isMenuShow ? 'white' : 'black' }}  className="spinner diagonal part-1"></div>
            <div style={{ backgroundColor: isMenuShow ? 'white' : 'black' }}  className="spinner horizontal"></div>
            <div style={{ backgroundColor: isMenuShow ? 'white' : 'black' }}  className="spinner diagonal part-2"></div>
          </div>
        </div>
      </div>
    );
  }
}
