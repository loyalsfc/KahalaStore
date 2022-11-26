import React from 'react'

function Header() {
  return (
    <header className='bg-white text-black py-4'>
        <div className="container mx-auto center-y justify-between">
            <span className='text-3xl'>Kahala<span className='text-orange'>Store</span></span>
            <div className='mx-2 h-10 rounded w-1/2 border pl-2 overflow-hidden flex justify-between'>
                <input className='h-full w-full focus:outline-0' type="search" name="search-product" id="search-product" placeholder='search for products and categories' />
                <button className='bg-orange h-full center-y p-4 text-white'><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <div className='center-y font-medium'>
                <span className='mr-4 hover:text-orange cursor-pointer'>Login/Sign up</span>
                <div className='hover:text-orange cursor-pointer'>
                    <span className='mr-2'><i className="fa-solid fa-cart-shopping"></i></span>
                    <span>Cart</span>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
