import React from 'react'
import people from '../../assets/people.png'
import header from '../../assets/header.png'
import './header.css'

const Header = () => (
    <div className="flogrow__header section__padding" id="home">
      <div className="flogrow__header-content">
        <h1 className="gradient__text">Let&apos;s Grow Something Amazing with FloGrow</h1>
        <p>Some text to introduce the website</p>

        <div className="flogrow__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
          </div>

          <div className="flogrow__header-content__people">
          <img src={people} alt="people"/>
          <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>
        <div className="gpt3__header-image">
          <img src={header} alt="header"/>
      </div>
    </div>
  );

export default Header