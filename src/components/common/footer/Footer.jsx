import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
            <img src='./images/logo.png' alt='' />
              <h2 style={{color:"#ccc",marginBottom:"1rem"}}>Do You Need Help With Anything?</h2>
              <div className='input flex'>
                <input type='text' placeholder='Email Address' style={{color:"black"}} />
                <button>Send</button>
              </div>
              <h5 style={{color:"#ccc",marginTop:"1rem"}}>Check your email for additional details about the Website</h5>
            </div>
          </div>

          {footer.map((val,ind ) => (
            <div className='box' key={ind}>
              <h3 >{val.title}</h3>
              <ul >
                {val.text.map((items, ind) => (
                  <li key={ind}>  {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2024 online Course. Designd By purushothaman.</span>
      </div>
    </>
  )
}

export default Footer
