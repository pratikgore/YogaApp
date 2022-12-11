import React from 'react'
import { Link } from 'react-router-dom'
import "./Landing.css"

const Landing = () => {
  return (
    <div>
      <header class="main-header">
        <div class="header-nav">
          <p className='logo'>YOGA ACADMEY</p>
        </div>
        <div className="hero-content">
          <h1 className="main-heading">"Yoga is the journey of  The Self, <br /> To The
            Self, <br /> Through The Self” </h1>

          <Link to="/addContact">
            <button className="hero-cta link">Register Yourself</button>
          </Link>
          <Link to="/home">
            <button className="hero-cta link">Check Out Batches</button>
          </Link>
        </div>
      </header>
    </div>

  )
}

export default Landing
