import React from 'react'
import Link from 'next/link'

import Layout from '../components/Layout'

function About() {
  return (
    <Layout>
      <Link href="/">
        <a className="mt-4 uppercase text-sm">Home</a>
      </Link>
    </Layout>
  )
}

export default About
