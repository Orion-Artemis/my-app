import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <input type="checkbox" id="menuChk" name="menuChk" />
        <div className="menu desktop" id="menu">
            <label htmlFor="menuChk" className="menuCloseBtn">&times;</label>
            <h3>Table of Contents:</h3>
            <ul>
                <li><Link href="#p1">Introduction</Link></li>
                <li><Link href="#p2">About Deck</Link></li>
                <li><Link href="#p3">Navigation</Link></li>
                <li><Link href="#p4">CSS Grid</Link></li>
                <li><Link href="#p5">Mobile</Link></li>
                <li><Link href="#p6">Legacy browsers</Link></li>
                <li><Link href="#p7">Example: Image</Link></li>
                <li><Link href="#p8">Example: Quote</Link></li>
                <li><Link href="#p9" className="gallery-link">Example: Gallery</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar