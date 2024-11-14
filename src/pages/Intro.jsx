import React from 'react'
import './Intro.css';
import hero2 from '../assets/hero2.jpg'

const Intro = () => {
  return (
    <section className='hero' style={{ backgroundImage: `url(${hero2})` }}>
      <div className="content">
        <h1>GoaLa</h1>
        <p>Transform your daily tasks into achievable goals. Stay focused, organized, and on track with an intuitive Goala.</p>
        <a href='#'>Start Now</a>
      </div>
        
    </section>
  )
}

export default Intro
