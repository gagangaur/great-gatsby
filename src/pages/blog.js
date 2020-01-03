import React from "react"
import Layout from "../components/layout/layout"
import { graphql, useStaticQuery, Link } from "gatsby"

const Blog = () => {
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
  console.log(data)
  return (
    <Layout>
      <h3>This is my blogpage</h3>
      <Link to="/">Go back</Link>
    </Layout>
  )
}
export default Blog
