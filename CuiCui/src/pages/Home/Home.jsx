import React from 'react'
import { Posts } from '../../components/Posts/Posts'

export const Home = () => {
  return (
    <main>
      <h3>Welcome on My Social Network. This website is a training to React, global state handling and tokens. Here, authentification and routing will be used to create a small social media website.</h3>
      <Posts />
    </main>
  )
}