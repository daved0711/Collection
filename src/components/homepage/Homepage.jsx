import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Homebanner from './Homebanner'
import Collection from './Collection'
import Secondbanner from './Secondbanner'
import Gendercards from './Gendercards'


const Homepage = () => {
  return (
    <>
      <Header/>
      <Homebanner img="banner.jpg" header="TOLUS SPRING COLLECTION." subheader="Find out spring collection.offering our best quality productina a tolus 
            Spring Collection"/>   
       
      <Collection/>
      <Secondbanner img ="secondbanner.png" header="WEAR TO WEDDING"
       subheader="A symphony of exquisite design tailored for your unforgettable moments"/>
      <Gendercards/>
      <Footer/> 
    </>
  )
}

export default Homepage
