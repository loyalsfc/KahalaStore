import React from 'react'

function TopSelling({name, img, amount}) {
    return (
        <li>
            <article className='m-1'>
                <img src={img} alt="Product Image" className='h-[223px] w-[223px]'/>
                <p className='text-sm px-2 pt-1'>{name}</p>
                <p className='{`px-2 pt-1 after:content-["Hi"]`}'>{amount}</p>
            </article>
        </li>
    )
}

export default TopSelling
