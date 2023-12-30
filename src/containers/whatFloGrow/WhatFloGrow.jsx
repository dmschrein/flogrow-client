import React from 'react'
import Feature from '../../components/feature/Feature';
import './whatFloGrow.css'

const WhatFloGrow = () => {
  return (
    <div className="flogrow__whatflogrow section__margin" id="wflogrow">
      <div className="flogrow__whatflogrow-feature">
    <Feature title="What is FloGrow" text="Some text to exlain what our company does and how it works. Blah blah blah"/>
    </div>
    <div className="flogrow__whatflogrow-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Gallery</p>
      </div>
      <div className="flogrow__whatflogrow-container">
        <Feature title="Automated Emails" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
        <Feature title="AI generated Content" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
        <Feature title="Seamless Integrtion and Anayltics" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
    </div>
    </div>
  )
}

export default WhatFloGrow