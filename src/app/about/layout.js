"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const Layout = ({children}) => {
    const pathName =usePathname()
  return (
   <>
    <div>

        <ul >
            {
                pathName !=="/about/aboutwork" ?
                <ul>
                    <Link style={{padding:20 }} href='/about'>About</Link>
                <Link style={{padding:20 }} href='/about/aboutcollege'>college</Link>
                <Link style={{padding:20 }} href='/about/aboutwork'>work</Link>
                </ul> : <>Go back home</>
            }
      
        </ul>
    </div>
    <h1>{children}</h1>
   </>
  )
}

export default Layout