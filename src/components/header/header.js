import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import {
  navItem,
  header,
  title,
  navList,
  activeNavItem,
} from "./header.module.scss"
const Header = ({ siteTitle }) => (
  <header className={header}>
    <div>
      <h1>
        <Link to="/" className={title}>
          {siteTitle}
        </Link>
      </h1>{" "}
      <ul className={navList}>
        <li>
          <Link className={navItem} activeClassName={activeNavItem} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className={navItem} to="/blog" activeClassName={activeNavItem}>
            Blog
          </Link>
        </li>
        <li>
          <Link
            className={navItem}
            to="/contact"
            activeClassName={activeNavItem}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
