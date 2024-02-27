"use client";

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname().replace("/", "");
    const currentPage = pathname.split("/")[1];
    const recipeID = pathname.split("/")[2];
  return (
    <div className='py-5 bg-slate-300'>
        <div>
            <Link href="/">
              <h1 className='text-blue-700 font-bold text-5xl text-center'>Recipes</h1>
            </Link>
        </div>
        {pathname && currentArea && (
        <div>
          <Link
            className="bg-blue-500 text-white p-4 text-xs sm:text-lg rounded font-bold"
            href={recipeID ? `/types/${currentArea}` : "/types"}
          >
            Back to {recipeID ? `${currentArea} recipes` : "recipe types"}
          </Link>
        </div>
      )}
    </div>
  )
}
