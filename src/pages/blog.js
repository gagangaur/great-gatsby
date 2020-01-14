import React from "react"
import Layout from "../components/layout/layout"
import { graphql, useStaticQuery, Link } from "gatsby"

const Blog = () => {
  // fetching the markdown post data
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <h3>This is my blogpage.</h3>
      <ol>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
            </li>
          )
        })}
      </ol>
      <Link to="/">Go back</Link>
    </Layout>
  )
}
export default Blog
