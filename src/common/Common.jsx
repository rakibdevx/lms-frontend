import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Common = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Common
