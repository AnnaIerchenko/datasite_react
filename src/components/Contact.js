import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import './Contact.css'


const Contact = () => {
  return (
    <div className='contact'>
      <div className="container">
        <div className="col-1">
          <div className="content">
            <div><h2>Get in touch</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Soluta ea deserunt
               vitae facere doloremque laudantium sunt dolorum .
              </p>
            </div>
            <div className="address">
              <p>742 Evergreen Terrace</p>
              <p>Springfield, OP 12345</p>
            </div>
            <div className="icons">
              <FaPhone style={{marginRight: '1rem'}}/>
              <p>+1(550) 523-4456</p>
            </div>
            <div className="icons">
              <FaEnvelope style={{marginRight: '1rem'}}/>
              <p>Support@example.com</p>
            </div>
            <div className="carriers">
              <p>Looking for carriers?<span>View all jop openings</span></p>
            </div>
          </div>
        </div>
        <div className="col-2">
          <form>
            <input type="text" placeholder='Full-name'/>
            <input type="email" placeholder='Email'/>
            <input type="phone" placeholder='Phone'/>
            <textarea name="Message" placeholder='Message' cols="30" rows="10"></textarea>
            <div className="checkbox">
              <input type="checkbox" />
              <p>By checking this box, you agree to the <spam> Privacy Policy</spam> and
              <span>Cookie Policy</span>.</p>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact