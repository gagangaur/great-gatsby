import React from "react"
import Layout from "../components/layout/layout"

import { Link } from "gatsby"
export default function blog() {
  return (
    <Layout>
      <h1>This is my personal blog website </h1>
      <Link to="/">Go back</Link>
    </Layout>
  )
}
