import React from "react"
import { courseList } from "../../data/Data"

const CourseCard = () => {
  const rating=[4];
  return (
    <>
      <div className='content grid4 mtop'>
        {courseList.map((val, index) => {
          const { cover, category, name, price,  } = val
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text mytext '>
                <div className='category flex'>
                  <span style={{ background: category === "Best sell" ? "#25b5791a" : "#ff98001a", color: category === "Normal" ? "#25b579" : "#ff9800" }}>{category}</span>
                  <i className='fa fa-heart'></i>
                </div>
                <h4>{name}</h4>
                
              </div>
                <div className='button flex'>
                    <div>
                      <button className='btn4  cusbtn4'>{price}</button> 
                    </div>
                            <div className="rating-container">
                              {[1, 2, 3, 4, 5].map((star) => (
                              <span
                                key={star}
                                className={star <= rating ? 'star active' : 'star'}
                                >
                              &#9733;
                              </span>
                            ))}
                          </div>
                </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default CourseCard
