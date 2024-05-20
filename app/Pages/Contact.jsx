import React from 'react'
import Link from 'next/link'

const Contact = () => {
  return (
    <div className='item' id='page4'>
    <Link href='#p4' className='focus-page'>focus</Link>
    <label htmlFor="menuChk" className='selected-closer'>&nbsp;</label>
    <div className="layout home">
      <div className="content">
        <h2>Introducing</h2>
        <h1 className="huge">Deck</h1>
        <p>A dynamic, CSS only website template</p>
      </div>
      <div className="sidebar">
        <Link href='#p5' className='next-page'>Next</Link>
      </div>
    </div>
  </div>
  )
}

export default Contact