import React from "react"
import Heading from "../../common/Heading"
import "./price.css"
import PriceCard from "./PriceCard"

const Price = () => {
  return (
    <>
      <section className='price padding'>
        <div className='container'>
          <Heading title='Select Your Package' subtitle='"Unlock boundless knowledge with our online courses! Choose from diverse subscription plans tailored to your learning journey. Elevate your skills, anytime, anywhere. Join us and embark on a learning adventure!"' />
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Price
