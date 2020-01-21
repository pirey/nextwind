import React from 'react'
import Link from 'next/link'

import Layout from '../components/Layout'

function Index() {
  return (
    <Layout>
      <h1 className="tracking-widest text-blue-500 text-bold text-6xl text-center">
        NEXT.JS
      </h1>
      <Link href="/about">
        <a className="mt-4 uppercase text-sm">About</a>
      </Link>
    </Layout>
  )
}

export default Index
