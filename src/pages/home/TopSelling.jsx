import React from 'react'
import { getInitialPrice, savedAmount } from '../../utils'

function TopSelling({name, img, amount, percent}) {

    return (
        <li className='hover:shadow-md text-left'>
            <article className='m-1 w-[223px]'>
                <img src={img} alt="Product Image" className='h-[223px] w-[223px]'/>
                <p className='text-sm px-2 pt-1 truncate font-medium'>{name}</p>
                <p className='px-2 pt-1 font-medium'>${amount}</p>
                <p className='px-2 text-xs text-black/[0.75] line-through'>${getInitialPrice(amount, percent)}</p>
            </article>
        </li>
    )
}

export default TopSelling
