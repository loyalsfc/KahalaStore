import React, { useEffect, useState } from 'react'
import { getInitialPrice, savedAmount } from '../../utils'

function TodaysItem({name, img, amount, percent}) {


  return (
    <li className='p-4 hover:shadow-lg bg-white shadow text-black flex cursor-default'>
        <div className='pr-2.5 shrink-0'>
            <img src={img} alt="Product Image" className='h-[100px]' />
        </div>
        <div className='flex flex-col'>
            <h5 className='mb-1 text-[15px]'>{name}</h5>
            <p className='center-y mt-auto'>
                <span className='text-xl font-semibold'>${amount}</span>
                {percent &&  <span className='ml-1 text-sm line-through'>${getInitialPrice(amount, percent)}</span>}
            </p>
            {percent && <p className='text-[#33b27b] text-xs'>You save ${savedAmount(getInitialPrice(amount, percent), amount)}</p>}
        </div>
    </li>
  )
}

export default TodaysItem
