import React, { useContext } from 'react'
import { Context } from '../../Context'

function Categories() {
    const {categories} = useContext(Context)

    const categoriesName = categories.map(item=>{
        if(item.id < 6){
            return(
                <span className='cursor-pointer hover:text-orange mx-4' key={item.id}>{item.name}</span>
            )
        }
    })
  return (
    <section className='bg-[#f5f5f5] py-2 text-black'>
        <div className="container mx-auto text-sm center-y justify-center font-medium">
            {categoriesName}
        </div>
    </section>
  )
}

export default Categories
