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
      avatar2: file(absolutePath: { regex: "/output-onlinepngtools-2.png/" }) {
        childImageSharp {
          fixed(width: 450, height: 300) {
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
      <div
        style={{
          display: `flex`,
          flexDirection: `column`,
          marginBottom: rhythm(-1),
        }}
      >
        <a
          style={{
            textDecoration: `none !important`,
            position: `absolute`,
            top: 80,
            right: 120,
          }}
          href="https://www.roundafire.co.za"
        >
          Home
        </a>
      </div>

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
            marginTop: -70,
            transform: `scale(0.6)`,
            zIndex: -999,
          }}
        />
      </Link>
    </div>
  )
}

export default Bio
