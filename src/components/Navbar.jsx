import React from 'react'
import Search from './Search'
import Filter from './Filter'

function Navbar() {
    return (
        <nav className=" flex w-screen h-auto py-3 bg-light-brown">
            <Search />
            <Filter />
        </nav>
    )
}

export default Navbar
