import React from "react"
import PropTypes from "prop-types"
import { Link, StaticQuery, graphql } from "gatsby"
import { Location } from '@reach/router'
import "./mobile-menu.css"


const MobileMenu = ({ toggleMenu, menuToggled }) => (
  <StaticQuery
    query={graphql`
      query SiteMenuQuery {
        site {
          siteMetadata {
            menuItems {
              name
              path
              external
            }
          }
        }
      }
    `}
    render={data => (<Location>
      {
        ({ navigate, location }) => (
          <nav
            onClick={() => toggleMenu(!menuToggled)}
            className={`mobile-menu ${menuToggled ? "toggled" : ""}`}
          >
            <ul>
              {data.site.siteMetadata.menuItems.map(item => item.external ? (
                <a href={item.path} key={item.name}>
                  <span className={`item-text ${location.pathname === item.path ? "active" : ""}`}>
                    {item.name}
                  </span>
                  <span className="item-line" />
                </a>
              ) : (
                  <Link to={item.path} key={item.name}>
                    <span className={`item-text ${location.pathname === item.path ? "active" : ""}`}>
                      {item.name}
                    </span>
                    <span className="item-line" />
                  </Link>
                ))}
            </ul>
          </nav>
        )
      }

    </Location>)
    }
  />
)

MobileMenu.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  menuToggled: PropTypes.bool.isRequired,
}

export default MobileMenu
