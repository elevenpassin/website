import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Title from '../Title'
import './elsewhere.css'

const elseWhereQuery = graphql`
  query ElseWhereQuery {
    site {
      siteMetadata {
        elseWhere {
          name
          profile
          link
        }
      }
    }
  }
`

export default () => (
  <StaticQuery
    query={elseWhereQuery}
    render={({
      site: {
        siteMetadata: { elseWhere },
      },
    }) => (
      <div className="elsewhere">
        <Title>Else where</Title>
        <table>
          <tbody>
            {elseWhere.map(({ name, profile, link }, key) => (
              <tr key={key}>
                <td>{name}</td>
                {link ? (
                  <td>
                    <a href={link}>{profile}</a>
                  </td>
                ) : (
                  <td>{profile}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  />
)
