import React from 'react'
import './Hero.css';
import { FaDatabase , FaAsterisk, FaAccusoft, FaFacebook, FaTwitter, FaGithub} from 'react-icons/fa'


const Hero = () => {
  return (
    <div className='hero'>
      <div className="container">
        <div className='content'>
          <div className="col-1">
            <h1>Data to enrich your</h1>
            <h1><span className='primary-color'>online business</span></h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Eum magni veritatis, nisi eaque vel unde natus alias. Officiis,
               placeat quisquam.</p>
               <div className='used-by'>
                <p>USED BY</p>
                <div className='icons'>
                  <i><FaDatabase /> Staxx</i>
                  <i><FaAsterisk /> Star Al</i>
                  <i><FaAccusoft /> Accusoft</i>
                </div>
              </div>
          </div>
          <div className='col-2'>
            <div className="form-layout">
              <div className="form-container">
                <p className='sign-in-txt'>Sign in with</p>
                <div className='social-logis'>
                  <i><FaFacebook size={20} /></i>
                  <i><FaTwitter size={20} /></i>
                  <i><FaGithub size={20} /></i>
                </div>
                <div className='divider'>
                  <p><span>Or</span></p>
              </div>
                <form action=''>
                  <input type="text" placeholder="Name" />
                  <input type="emoji" placeholder="Email" />
                  <input type="pasword" placeholder="Password"/>
                  <button>Create your account</button>
                </form>
              </div>
              <div className='form-footer'>
                <p>By sighing up, you agree to our
                  <span className='primary-color'>Terms, Data Policy</span>
                  <span className='primary-color'>Cookies Policy</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero