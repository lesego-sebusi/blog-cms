/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/Roundafire.png/" }) {
        childImageSharp {
          fixed(width: 450, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      avatar2: file(absolutePath: { regex: "/BLOG.png/" }) {
        childImageSharp {
          fixed(width: 450, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        flexDirection: `column`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Link style={{ boxShadow: `none` }} to={`/`}>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author.name}
          style={{
            marginBottom: 0,
          }}
        />
        <Image
          fixed={data.avatar2.childImageSharp.fixed}
          alt={author.name}
          style={{
            marginBottom: 0,
            transform: `scale(1.3)`,
            zIndex: -999,
          }}
        />
      </Link>

      <a href="https://www.roundafire.co.za">Visit our site</a>
    </div>
  )
}

export default Bio
