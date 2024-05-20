import React from 'react'
import Link from 'next/link'

const Projects = () => {
  return (
    <div className='item' id='page6'>
    <Link href='#p6' className='focus-page'>focus</Link>
    <label htmlFor="menuChk" className='selected-closer'>&nbsp;</label>
    <div className="layout home">
      <div className="content">
        <h2>Introducing</h2>
        <h1 className="huge">Deck</h1>
        <p>A dynamic, CSS only website template</p>
      </div>
      <div className="sidebar">
        <Link href='#p7' className='next-page'>Next</Link>
      </div>
    </div>
  </div>
  )
}

export default Projects