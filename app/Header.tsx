import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <header className='p-5 bg-blue-900'>
            <Link href='/' className='px-2 py-1 font-bold bg-white text-blue-500 rounded-lg'>Home</Link>
        </header>
    )
}

export default Header