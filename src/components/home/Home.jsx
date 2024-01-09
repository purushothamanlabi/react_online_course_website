import React from "react"
import Featured from "./featured/Featured"
import Hero from "./home/Home"
import Price from "./price/Price"
import Coures from  './course/Listcourse'


const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Coures />
      <Price />
    </>
  )
}

export default Home
