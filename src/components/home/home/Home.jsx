import React from "react"
import Heading from "../../common/Heading"
import "./home.css"




const Home = () => {
  return (
    <>
   
      <section className='home'>
        <div className='container'>
          <Heading title='Search Your Next Master courses ' subtitle='Learn Job ready skills from free online courses with certificates' />

          <form className='flex'>
            <div className='box'>
              <span>COURSES</span>
              <input type='text' placeholder='Name...' />
            </div>
            <div className='box hideinput' >
              <span>Language</span>
              <input type='text' placeholder='Language...'  />
            </div>
            <div className='box hideinput'>
              <span>Price Range</span>
              <input type='text' placeholder='$1-500$'  />
            </div>
            <div className='box'>
              <h4>search</h4>
            </div>
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Home
