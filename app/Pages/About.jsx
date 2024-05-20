import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const About = () => {
  return (
    <div className='item' id='page2'>
    <Link href='#p2' className='focus-page'>focus</Link>
    <label htmlFor="menuChk" className='selected-closer'>&nbsp;</label>
    <div id="image1" className="image">
			<div class="image-container">
        <Image src="/placeHolder.jpg" alt="Cover Artwork" width={500} height={300}></Image>
      </div>
		</div>
    <div className="layout home">
      <div className="content">
        <h2>Introducing</h2>
        <h1 className="huge">Deck</h1>
        <p>A dynamic, CSS only website template</p>
      </div>
      <div className="sidebar">
        <Link href='#p3' className='next-page'>Next</Link>
      </div>
    </div>
  </div>
  )
}

export default About