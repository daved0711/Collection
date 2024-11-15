import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Homebanner from './Homebanner'
import Collection from './Collection'

const Homepage = () => {
  return (
    <>
      <Header/>
      <Homebanner img="banner.jpg" header="TOLUS SPRING COLLECTION." subheader="Find out spring collection.offering our best quality productina a tolus 
            Spring Collection"/>   
      <Footer/>  
      <Collection/>
    </>
  )
}

export default Homepage
