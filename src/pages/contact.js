import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"

export default function contact() {
  return (
    <Layout>
      <h1>Contact Page</h1>
      <p>This is Contact page.</p>
      <Link to="/">Go back.</Link>
    </Layout>
  )
}
