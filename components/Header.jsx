"use client";

import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='py-5 bg-slate-300'>
        <div>
            <Link href="/">
              <h1 className='text-blue-700 font-bold text-5xl text-center'>Recipes</h1>
            </Link>
        </div>
    </div>
  )
}
