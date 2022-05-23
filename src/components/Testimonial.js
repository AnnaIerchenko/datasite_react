import React from 'react'
import { FaDatabase } from 'react-icons/fa'
import './Testimonial.css'

const Testimonial = () => {
  return (
    <div className='testimonial'>
      <div className="container">
        <div className="outline">
          <div className="content">
            <i><FaDatabase />Staxx </i>
            <p className='body'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque obcaecati odit magnam minima quos, consequatur numquam perferendis minus eius? 
              Natus dolorum laudantium amet commodi enim ut rem eius 
              praesentium ullam!
             </p>
            <div className='name'>
              <p> Charlie Chivers</p>
              <p>CEO,Staxx</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial