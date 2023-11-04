import Link from 'next/link'
import React from 'react'

const Layout = ({children}) => {
  return (
   <>
    <div>

        <ul >
        <Link style={{padding:20 }} href='/about'>About</Link>
          <Link style={{padding:20 }} href='/about/aboutcollege'>college</Link>
          <Link style={{padding:20 }} href='/about/aboutwork'>work</Link>
        </ul>
    </div>
    <h1>{children}</h1>
   </>
  )
}

export default Layout