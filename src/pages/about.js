import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"

export default function About() {
  return (
    <Layout>
      <h1>About Page</h1>
      <p>This is About page.</p>
      <Link to="/">Go back.</Link>
    </Layout>
  )
}
