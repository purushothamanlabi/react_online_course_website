import React from "react"
import Heading from "../../common/Heading"
import "./course.css"
import CourseCard from "./CourseCard"

const Coures = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Explore new and trending free online courses' subtitle='1000+ Free Courses, Live Sessions by Experts, and Job Opportunities from 3100+ Companies. Join 1 Crore+ learners to build your dream career now!' />
          <CourseCard />
        </div>
      </section>
    </>
  )
}

export default Coures;
